import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import { NavLink } from "react-router";

const LoginUser = () => {
  let subBtnTheme = {
    spinnerLeftPosition: {
      xs: "right-2",
      sm: "right-3",
      md: "right-4",
      lg: "right-5",
      xl: "right-6",
    },
  };

  return (
    <div className="px-4 sm:px-11 w-full sm:min-w-[640px] md:min-w-[798px] lg:min-w-[1024px]">
      <div className="flex justify-center">
        <form className="w-full sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 my-14 p-5 border rounded-lg border-gray-300">
          <p className="text-3xl font-medium mb-3">Sign In</p>
          {/* Email or Mobile */}
          <div className="mb-3">
            <div className="mb-2 block">
              <Label htmlFor="userInp" value="Email or mobile phone number" />
            </div>
            <TextInput id="userInp" type="text" />
            {false && (
              <small className="text-red-500">Username can't be empty</small>
            )}
          </div>

          {/* Password */}
          <div className="mb-3">
            <div className="mb-2 block">
              <Label htmlFor="pwd" value="Password" />
            </div>
            <TextInput id="pwd" type="password" />

            {false && (
              <small className="text-red-500">Username can't be empty</small>
            )}
          </div>

          <div className="mb-5">
            <a href="#" className="text-blue-500 underline">
              Forget password?
            </a>
          </div>

          <div className="mb-3">
            <Button
              isProcessing={false}
              theme={subBtnTheme}
              size="md"
              type="submit"
              className="w-full"
              pill
            >
              Submit
            </Button>
          </div>

          <div className="">
            <hr className="mt-7 mb-3" />
            <p>
              Don't have an account?&nbsp;
              <NavLink to="/reguser" className="text-blue-500">
                {"Sign Up >"}
              </NavLink>
            </p>

            <p>
              By creating an account or logging in, you agree to&nbsp;
              <a href="#" className="text-blue-500 underline">
                Conditions of Use
              </a>
              &nbsp;and&nbsp;
              <a href="#" className="text-blue-500 underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
