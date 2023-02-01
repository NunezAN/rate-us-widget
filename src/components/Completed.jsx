import React from "react";

const Completed = ({ rating }) => {
  return (
    <div className="text-white w-[40%] h-[400px] m-auto p-6 bg-[#1F2631] rounded-xl flex flex-col gap-4 text-center">
      <div className="text-lg p-1 bg-[#272F37] rounded-xl text-center text-orange-500">
        You selected {rating} out of 5
      </div>
      <p className="text-3xl">Thank you!</p>
      <span className="text-slate-400 text-xl">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </span>
    </div>
  );
};

export default Completed;
