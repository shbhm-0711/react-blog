import React from "react";
import { createPortal } from "react-dom";

export const BackDrop = (props) => {
  return (
    <div
      onClick={() => {
        props.setNullAuth(null);
      }}
      className="z-40 absolute w-full h-screen bg-black opacity-80"
    ></div>
  );
};

export const Modal = () => {
  return (
    <div className="z-50 mx-auto absolute top-0 w-screen h-[150px] sm:h-[200px] md:h-[270px] lg:h-auto lg:p-10 bg-white rounded-b-3xl ">
      <h1 className="z-50 align-middle text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center text-sky-600 ">
        Logged out successfully!!
      </h1>
    </div>
    // <div
    //   className="z-50 m-auto absolute top-0 w-screen lg:w-[1000px] md:w-screen  h-[150px] sm:h-[200px] md:h-[270px] lg:h-[300px]
    // left-[calc(50%-(w-screen/2))] lg:left-[50%-500px] bg-white rounded-b-3xl "
    // >
    //   <h1 className="z-50 align-middle text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center text-sky-600 ">
    //     Logged out successfully!!
    //   </h1>
    // </div>
  );
};

const LogoutModal = (props) => {
  return (
    <>
      {createPortal(<Modal />, document.getElementById("rootModal"))}
      {createPortal(
        <BackDrop setNullAuth={props.setNullAuth} />,
        document.getElementById("rootBackdrop")
      )}
    </>
  );
};

export default LogoutModal;
