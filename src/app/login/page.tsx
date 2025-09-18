import LoginContent from "@/pages/login/LoginContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Banking Solutions for Businesses NextJs Template",
  description: "Banking Solutions for Businesses NextJs Template",
};

const Login = () => {
  return <LoginContent />;
};

export default Login;
