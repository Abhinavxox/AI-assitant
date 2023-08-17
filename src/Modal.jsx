import React, { useEffect } from "react";
import Chatbox from "./Chatbox";

const Modal = ({ onClose }) => {
  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the parent
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-md shadow-lg h-[95vh] w-[85%]"
        onClick={handleModalClick}
      >
        {/* template chatbox */}
        <Chatbox />
      </div>
    </div>
  );
};

export default Modal;
