import React from "react";
import { UserLayout } from "../Layout/UserLayout";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar/ProgressBar";
export default function Home({ profile, logOut }) {
    const navigate = useNavigate()
  if (!profile) navigate('/login') 

  return (
    <UserLayout>
    <ProgressBar/>
    </UserLayout>
  );
}