import element from "@/../public/images/home-one/footer-crown.png";
import logo from "@/../public/images/home-one/logo.png";
import loginImage from "@/../public/images/login-image.png";
import {
  IconBrandFacebook,
  IconBrandGoogleFilled,
  IconCheckbox,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const LoginContent = () => {
  return (
    <div className="relative h-screen grid-cols-12 items-center justify-center gap-6 lg:grid xxl:overflow-hidden">
      <div className="col-start-1 col-end-7">
        <Image
          src={loginImage}
          width={948}
          height={1080}
          alt="Login Image"
          className="xxl:max-h-screen"
        />
      </div>
      <div className="col-start-7 col-end-12 max-lg:px-4 max-lg:py-8 xl:col-start-8 ">
        <div className="items-center justify-center">
          <div>
            {" "}
            <Image
              src={logo}
              width={167}
              height={60}
              alt="Logo"
              className="mx-auto block"
            />
            <h5 className="h5 mt-6 text-center font-medium">
              Login to Your Account
            </h5>
          </div>
          <form className="smt40px">
            <input
              type="text"
              placeholder="Username"
              className="placeholder:m-text w-full bg-white-4 px-5 py-3 placeholder:text-black-3"
            />
            <input
              type="password"
              placeholder="Password"
              className="placeholder:m-text smt24px w-full bg-white-4 px-5 py-3 placeholder:text-black-3"
            />
            <div className="s-text mt-3 flex items-center justify-between gap-6 text-black-3">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Rember me</span>
              </div>
              <Link href={`/signup`}>Forgot Password?</Link>
            </div>
            <button className="h6 smb32px smt32px w-full bg-primary py-3 text-center text-white-1">
              Login
            </button>
          </form>
          <div className="flex items-center">
            <div className="h-px flex-1 bg-[#B3B6B9]/60"></div>
            <p className="m-text p-2 text-black-1">Or sign in with</p>
            <div className="h-px flex-1 bg-[#B3B6B9]/60"></div>
          </div>
          <div className="smt32px flex items-center justify-center gap-5">
            <button className="theme-transition-3 flex items-center gap-2 border border-[#4687F2] bg-[#4687F2] px-4 py-3 text-white-1 hover:bg-white-1 hover:text-black-4">
              <IconBrandGoogleFilled /> <span className="m-text">Google</span>
            </button>
            <button className="theme-transition-3 flex items-center gap-2 border border-[#3B5998] bg-[#3B5998] px-4 py-3 text-white-1 hover:bg-white-1 hover:text-black-4">
              <IconBrandFacebook /> <span className="m-text">Facebook</span>
            </button>
          </div>
          <p className="s-text smt40px text-center text-black-1">
            Don’t have an account?{" "}
            <Link href={"/signup"} className="!text-primary">
              {" "}
              Register Here
            </Link>
          </p>
        </div>
      </div>
      <Image
        src={element}
        width={222}
        height={214}
        alt="Element"
        className="absolute bottom-0 right-0 max-3xl:hidden"
      />
    </div>
  );
};

export default LoginContent;
