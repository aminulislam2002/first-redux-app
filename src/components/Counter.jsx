import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue, decrementByValue } from "../redux/features/Counter/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="py-10 border">
      <h1 className="text-center text-lg font-medium text-purple-500 mb-5">Counter Component</h1>
      <div className="flex justify-center items-center gap-5">
        <button
          onClick={() => dispatch(increment())}
          className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-md text-white text-lg"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-md text-white text-lg"
        >
          Increment By Value 5
        </button>
        <h1>{count}</h1>
        <button
          onClick={() => dispatch(decrementByValue(5))}
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-md text-white text-lg"
        >
          Decrement By Value 5
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-md text-white text-lg"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
