import React from "react";

const BottomNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-inner flex justify-around py-2 text-sm">
      <button className="text-blue-600 font-semibold">Home</button>
      <button>Libraries</button>
      <button>AI Assistant</button>
    </div>
  );
};

export default BottomNavBar;
