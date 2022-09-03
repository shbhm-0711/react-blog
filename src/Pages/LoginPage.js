import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setAuthenticated }) => {
  let navigate = useNavigate();

  return (
    <form
      // className="p-5 m-auto my-7 rounded-2xl bg-stone-900 text-center w-[300px] h-[200px]"
      className="p-5 m-auto my-7 rounded-2xl bg-slate-300 text-center w-[300px] h-[200px]"
      onSubmit={(event) => {
        event.preventDefault();

        setAuthenticated(true);
        navigate("/");
      }}
    >
      <input
        defaultValue={"demo@demo.demo"}
        className="block m-auto my-3 text-slate-100 bg-slate-700 p-1"
        type="email"
      />
      <input
        defaultValue={"demo"}
        className="block m-auto my-3 text-slate-100 bg-slate-700 p-1"
        type="password"
      />
      <button className="bg-slate-900 p-2 m-3 rounded-md min-w-10 ">
        Submit
      </button>
    </form>
  );
};

export default LoginPage;
