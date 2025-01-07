import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";  // Remove BrowserRouter here
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { LoginPage } from "./Routes/Login";
import Home from "./Routes/Home";

function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      fetchUserProfile(codeResponse.access_token);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const fetchUserProfile = (accessToken) => {
    axios
      .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`)
      .then((res) => {
        setProfile(res.data);
        localStorage.setItem("userData" , JSON.stringify(res.data))
        console.log(res.data);
        
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (user) {
      fetchUserProfile(user.access_token);
    }
  }, [user]);

  const logOut = () => {
    localStorage.removeItem("userData")
    googleLogout();
    setProfile(null);
    setUser(null);
    navigate("/login");  
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage login={login} />} />
        <Route path="/" element={<Home profile={profile} logOut={logOut} />} />
      </Routes>
    </div>
  );
}

export default App;
