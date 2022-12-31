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

export const Modal = (props) => {
  return (
    <div
      className={`z-50 absolute top-0 w-screen lg:w-[800px] lg:left-1/2 
          lg:ml-[-400px] h-[150px] sm:h-[180px] md:h-[220px] lg:h-[340px]
          md:top-1/2 md:mt-[-110px] md:rounded-none lg:rounded-3xl lg:top-1/2
          lg:mt-[-170px] lg:p-10 bg-gray-300 rounded-b-3xl
          text-center ${props.containerClasses}`}
    >
      <h1
        className={`"z-50 align-middle text-6xl sm:text-7xl
        md:text-8xl lg:text-9xl text-center text-sky-700 "`}
      >
        {props.action}{" "}
        {props.success ? "was successfull!!" : "was unsuccessfull"}
      </h1>
      <span className="text-slate-500 text-xs bottom-0">
        *
        <button
          onClick={() => {
            props.setNullAuth(null);
          }}
          className="text-red-700 text-xs bottom-0 px-1 m-0 rounded-lg"
        >
          Click me
        </button>
        or outside to close *
      </span>
    </div>
  );
};

const SuccessOrFailModal = (props) => {
  return (
    <React.Fragment>
      {createPortal(
        <Modal
          setNullAuth={props.setNullAuth}
          action={props.action}
          success={props.success}
          containerClasses={props.containerClasses}
        />,
        document.getElementById("rootModal")
      )}
      {createPortal(
        <BackDrop setNullAuth={props.setNullAuth} />,
        document.getElementById("rootBackdrop")
      )}
    </React.Fragment>
  );
};
SuccessOrFailModal.defaultProps = {
  action: null,
  success: true,
  containerClasses: "",
};

export default SuccessOrFailModal;
