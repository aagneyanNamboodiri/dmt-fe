import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { FORM_DEFAULTS } from "./constants";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import UserAuthForm from "./components/UserAuthForm";

function App() {
  const onSubmit = async (values) => {
    const { username, password } = values;
    setLoading(true);
    console.log("vals are ", values);
  };
  const form = useForm(FORM_DEFAULTS);

  return (
    <div className=" w-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-screen flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-gray-800 rounded-r-xl" />
        <div className="relative z-20 flex items-center font-medium justify-center  text-3xl">
          Master Data Management Tool.
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}

export default App;
