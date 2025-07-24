import { useState } from "react";
import { useCounter } from "../hooks/useCounter";


export const MemoHook = () => {
  const { counter, increment } = useCounter(1);
  const [show, setShow] = useState(true);

  return (
    <div className="flex flex-col max-w p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-zinc-800 dark:border-zinc-700 mt-10">
      <h1 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white p-5 lg:text-3xl">
        Counter: <small>{counter}</small>
      </h1>
      <div className="flex flex-row">
        <button
          className="focus:outline-none text-white bg-indigo-700 hover:bg-indigo-500 active:bg-indigo-900 font-medium rounded-lg text-5xl m-5 p-5 w-64 lg:text-3xl"
          onClick={() => increment()}
        >
          +1
        </button>
        <button
          className="focus:outline-none text-white bg-indigo-700 hover:bg-indigo-500 active:bg-indigo-900 font-medium rounded-lg text-5xl m-5 p-5 w-64 lg:text-2xl"
          onClick={() => setShow(!show)}
        >
          Show(hiden) {JSON.stringify(show)}
        </button>
      </div>
    </div>
  );
};
