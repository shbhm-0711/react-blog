import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setAuthenticated }) => {
  let navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setAuthenticated(true);
        navigate("/");
      }}
    >
      <input
        defaultValue={"demo@demo.demo"}
        className="block m-3 text-slate-800"
        type="email"
      />
      <input
        defaultValue={"demo"}
        className="block m-3 text-slate-800"
        type="password"
      />
      <button className="bg-slate-900 p-2 m-3 rounded-md min-w-10">
        Submit
      </button>
    </form>
  );
};

export default LoginPage;
