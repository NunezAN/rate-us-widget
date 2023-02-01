import { useState } from "react";
import Completed from "./components/Completed";
import RateUs from "./components/RateUs";

function App() {
  const [rating, setRating] = useState(0);
  console.log(rating);
  return (
    <div className="bg-black min-h-screen w-full flex flex-col">
      {rating === 0 ? (
        <RateUs setRating={setRating} />
      ) : (
        <Completed rating={rating} />
      )}
    </div>
  );
}

export default App;
