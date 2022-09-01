import React from "react";
import { createPortal } from "react-dom";

export const BackDrop = (props) => {
  return (
    <div
      onClick={() => {
        props.setNullAuth(null);
      }}
      className="z-40 flex justify-around align- absolute w-full h-screen bg-black backdrop-opacity-80"
    >
      <div className="z-50 w-[1000px] h-[150px] sm:h-[200px] md:h-[270px] lg:h-[300px] bg-white rounded-b-3xl ">
        <h1 className="z-50 align-middle text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center text-sky-600 ">
          Logged out successfully!!
        </h1>
      </div>
    </div>
  );
};

const LogoutModal = (props) => {
  return (
    <div>
      {createPortal(
        <BackDrop setNullAuth={props.setNullAuth}></BackDrop>,
        document.getElementById("rootModal")
      )}
    </div>
  );
};

export default LogoutModal;
