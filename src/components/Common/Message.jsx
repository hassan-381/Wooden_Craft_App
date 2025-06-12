import React from "react";
import {
  FaInfoCircle,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

const Message = ({ variant = "info", children }) => {
  const variants = {
    info: {
      bg: "bg-blue-100",
      text: "text-blue-800",
      icon: <FaInfoCircle className="text-blue-500" />,
    },
    success: {
      bg: "bg-green-100",
      text: "text-green-800",
      icon: <FaCheckCircle className="text-green-500" />,
    },
    danger: {
      bg: "bg-red-100",
      text: "text-red-800",
      icon: <FaExclamationTriangle className="text-red-500" />,
    },
  };

  const { bg, text, icon } = variants[variant] || variants.info;

  return (
    <div className={`${bg} ${text} p-4 rounded-md mb-4 flex items-center`}>
      <span className="mr-2">{icon}</span>
      {children}
    </div>
  );
};

export default Message;
