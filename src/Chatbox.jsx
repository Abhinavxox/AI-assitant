import React from "react";

const Chatbox = ({ onClose }) => {
  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the parent
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 mt-[125px] rounded-md shadow-lg h-[85vh] w-[85%]"
        onClick={handleModalClick}
      >
        {/* template chatbox */}
        <div className="h-full w-full"></div>
      </div>
    </div>
  );
};

export default Chatbox;
