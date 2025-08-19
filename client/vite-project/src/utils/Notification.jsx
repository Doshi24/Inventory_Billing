import React, { useEffect } from "react";

const Notification = ({ type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed z-50 px-6 py-3 rounded-lg shadow-lg text-white font-medium transition-opacity duration-300
        ${type === "success" ? "bg-green-600" : "bg-red-600"}
      `}
      style={{
        right: "20px",
        bottom: "20px",
        // If you want center screen option, change this:
        // top: "50%", left: "50%", transform: "translate(-50%, -50%)"
      }}
    >
      {message}
    </div>
  );
};

export default Notification;
