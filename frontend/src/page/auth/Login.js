import React from "react";

const Login = () => {
  return (
    <div className="login-bg flex items-center justify-center w-full h-screen relative">
      <div className="flex rounded-2xl p-6 ">
        <div className="flex m-auto gap-4 blur-css z-10 rounded-2xl ">
          <div className="flex-1">
            <img
              className="w-[550px] rounded-2xl"
              src="./images/dogvang.jpg"
              alt=""
            />
          </div>
          <form className="flex-1">
            <p className="text-end mb-5 p-4">
              Not a member? <a className="text-[#3888F2]" href="/register">Register now</a>
            </p>
            <div className="flex m-auto flex-col w-[400px]">
              <h3 className="text-2xl font-semibold mb-1">Hello Again!</h3>
              <p className="mb-5">Wellcome back you've been missed!</p>
              <div className="mb-5 flex flex-col gap-3 w-full">
                <input
                  className="rounded-lg w-full"
                  type="text"
                  placeholder="Enter username"
                />
                <input
                  className="rounded-lg w-full"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <p className="text-end text-gray-600">Recovery Password</p>
              <button className="bg-[#FF642F] text-white py-2 text-xl rounded-lg w-full mt-4 font-semibold">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
