import { Button } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";

export const LoginPage = ({ login }) => {
  return (
    <section className="min-h-screen flex">
      <div className="bg-blue-600 md:w-[40%]"></div>

      <div className="flex-1 flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-2xl font-medium text-gray-60 mb-4">
            Student Request Approval Portal
          </h2>

          <button onClick={login} className="inline-flex gap-2  border-2 py-2 px-3 hover:bg-gray-100 transition-colors rounded-md " color="">
            <GoogleIcon className="text-blue-700" /> <span>Sign in with Bitsathy account</span>
          </button>
        </div>
      </div>
    </section>
  );
};
