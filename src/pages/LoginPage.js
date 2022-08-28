import React from "react";

/* Components */
import Header from "../components/common/Header/Header";
import LoginForm from "../components/LoginComponents/LoginForm";
import WelcomeBanner from "../components/LoginComponents/WelcomeBanner";

/* Styles */
import "./scss/login-page.scss"


export default function LoginPage(){
  
  return (
    <>
      <Header/>
      <div className="main-login"> 
        <div className="main-login__background"></div>
        <WelcomeBanner/>
        <div className="form-container">
          <LoginForm/>
        </div>
      </div>
    </>
  )
  
}