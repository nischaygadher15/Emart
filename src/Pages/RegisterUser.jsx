import { Label, Select, TextInput } from "flowbite-react";
import React from "react";

const RegisterUser = () => {
  return (
    <div className="px-4 sm:px-11 w-full sm:min-w-[640px] md:min-w-[798px] lg:min-w-[1024px]">
      <div className="flex justify-center">
        <form className="w-1/3 p-4 border rounded-lg border-gray-300">
          <p className="text-3xl font-medium mb-3">Create Account</p>
          {/* Your name */}
          <div className="mb-3">
            <div className="mb-2 block">
              <Label htmlFor="username" value="Your name" />
            </div>
            <TextInput
              id="username"
              type="email"
              placeholder="Full name"
              required
            />
          </div>

          {/* Mobile number */}
          <div className="mb-3">
            <div className="mb-2 block">
              <Label htmlFor="mob" value="Mobile number" />
            </div>
            <div className="flex">
              <Select id="countries" required>
                <option>India +91</option>
                <option>USA +1</option>
                <option>Canada +1</option>
                <option>France +33</option>
                <option>Germany +49</option>
              </Select>
              <TextInput
                id="mob"
                type="text"
                placeholder="Mobile number"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
