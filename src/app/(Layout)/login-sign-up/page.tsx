"use client";
import LoginForm from "@/components/LoginForm";
import SignUpForm from "@/components/SignUpForm";
import React from "react";
const LoginSignup = () => {
  const [showSignUpForm, setShowSignUpForm] = React.useState(false);
  return (
    <div className="w-full flex justify-center items-center min-h-screen ">
      <div>
        <SignUpForm
          showSignUpForm={showSignUpForm}
          setShowSignUpForm={setShowSignUpForm}
        />
        <LoginForm
          showSignUpForm={showSignUpForm}
          setShowSignUpForm={setShowSignUpForm}
        />
      </div>
    </div>
  );
};

export default LoginSignup;
