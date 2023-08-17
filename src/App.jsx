import "./index.css";
import React, { useState, useRef } from "react";
import Modal from "./Modal";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = (e) => {
    if (modalRef.current && modalRef.current.contains(e.target)) {
      return;
    }
    setIsModalOpen(false);
  };

  return (
    <div className="h-[100vh] relative">
      <div className="-z-50 absolute">
        <img src="/images/bg.png" alt="Background" />
      </div>
      <div className="z-50 h-[100vh] w-full">
        {/* popup button */}
        <div
          className="bottom-5 right-10 absolute"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleButtonClick} // Open modal on click
        >
          <div className="rounded-full w-16 h-16 bg-blue-950 p-3 btn btn-primary">
            <img src="/images/popupLogo.png" alt="Popup Logo" />
          </div>
          {isHovered && !isModalOpen && (
            <div className="absolute left-[-250px] top-1/2 transform -translate-y-1/2 p-4 bg-white shadow-md">
              {/* Description content */}
              Short description goes here.
            </div>
          )}
        </div>
      </div>

      {isModalOpen && <Modal onClose={handleModalClose} ref={modalRef} />}
    </div>
  );
}

export default App;
