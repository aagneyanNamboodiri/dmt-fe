import React from "react";
import { Button } from "../ui/button";
import { FaGoogle } from "react-icons/fa";
import UserAuthForm from "./UserAuthForm";
import { useForm } from "react-hook-form";
import { FORM_DEFAULTS } from "./constants";
import * as arrowAnimation from "../../assets/data_animation.json";
import { useNavigate } from "react-router-dom";

import Lottie from "react-lottie";

const LoginPage = () => {
  const navigateTo = useNavigate();
  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log("vals are ", values);
    navigateTo("/upload");
  };
  const form = useForm(FORM_DEFAULTS);

  const handleSsoLogin = () => {
    console.log("SSO Login");
  };
  // return <div>Login</div>;

  const arrowOptions = {
    loop: true,
    autoplay: true,
    animationData: arrowAnimation.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className=" w-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-screen flex-col bg-muted p-10 text-white lg:flex dark:border-r space-y-10">
        <div className="absolute inset-0 bg-slate-900 rounded-r-xl" />
        <div className="relative z-20 flex items-center font-medium justify-center text-3xl">
          Master Data Management Tool.
        </div>
        <div className="z-20 flex items-center font-medium justify-center w-96 flex-col space-y-8">
          <div>
            Add some details or features or some more styles about the DMT tool
            here.
          </div>
          <ul className="list-disc">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vehicula egestas elit, ac dictum nunc dictum ac.
            </li>
            <li>
              Sed diam sapien, placerat vel congue eu, pulvinar placerat erat.
              Ut et massa non nulla sodales commodo in et nisi.
            </li>
            <li>
              Nam in risus in metus ultrices condimentum. In mattis velit
              malesuada, sagittis dolor sed, imperdiet nibh.
            </li>
          </ul>
        </div>
        <Lottie
          options={arrowOptions}
          height={"15em"}
          width={"15em"}
          isStopped={false}
          className="cloudAnimation"
        />
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back!
            </h1>
          </div>
          <Button
            className="rounded-2xl bg-white text-black border justify-center space-x-4 hover:bg-white hover:border-black"
            onClick={handleSsoLogin}
          >
            <FaGoogle size={25} />
            <span>Login with Google</span>
          </Button>
          <UserAuthForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
