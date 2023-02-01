import React, { useRef } from "react";

const RateUs = ({ setRating }) => {
  const rate = useRef(0);

  function handleRatingChange(rating) {
    rate.current = rating;
    console.log(rate.current);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setRating(rate.current);
  }
  return (
    <div className="text-white w-[40%] h-[400px] m-auto p-6 bg-[#1F2631] rounded-xl">
      <div className="h-8 w-8 mb-4 bg-[#272F37] rounded-full flex items-center justify-center text-center p-1">
        ⭐️
      </div>
      <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
        <h1 className="text-2xl">How did we do?</h1>
        <span className="text-xl text-slate-500">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </span>
        <div className="flex justify-around">
          <button
            className="flex h-12 w-12 items-center justify-center bg-[#272F37] p-2 rounded-full hover:bg-orange-500 active:bg-gray-400"
            type="button"
            onClick={() => handleRatingChange(1)}
          >
            1
          </button>
          <button
            className="flex h-12 w-12 items-center justify-center bg-[#272F37] p-2 rounded-full hover:bg-orange-500 active:bg-gray-400"
            type="button"
            onClick={() => handleRatingChange(2)}
          >
            2
          </button>
          <button
            className="flex h-12 w-12 items-center justify-center bg-[#272F37] p-2 rounded-full hover:bg-orange-500 active:bg-gray-400"
            type="button"
            onClick={() => handleRatingChange(3)}
          >
            3
          </button>
          <button
            className="flex h-12 w-12 items-center justify-center bg-[#272F37] p-2 rounded-full hover:bg-orange-500 active:bg-gray-400"
            type="button"
            onClick={() => handleRatingChange(4)}
          >
            4
          </button>
          <button
            className="flex h-12 w-12 items-center justify-center bg-[#272F37] p-2 rounded-full hover:bg-orange-500 active:bg-gray-400"
            type="button"
            onClick={() => handleRatingChange(5)}
          >
            5
          </button>
        </div>
        <button
          className="flex flex-1 justify-center uppercase bg-orange-500 rounded-2xl p-2 mt-4 hover:bg-white hover:text-black"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default RateUs;
