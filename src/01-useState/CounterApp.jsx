import { useState } from "react";

export const CounterApp = () => {
    const [state, setState] = useState({
        counter1: 0,
        counter2: 3,
        counter3: 6,
    })

    const {counter1, counter2, counter3} = state

  return (
    <div className="flex flex-col max-w p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-zinc-800 dark:border-zinc-700 mt-10">
      <h1 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white p-5 lg:text-3xl">
        Counter: {counter1}
      </h1>
      <h1 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white p-5 lg:text-3xl">
        Counter: {counter2}
      </h1>
      <h1 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white p-5 lg:text-3xl">
        Counter: {counter3}
      </h1>
      <div className="flex flex-row">
        <button className="focus:outline-none text-white bg-indigo-700 hover:bg-indigo-500 active:bg-indigo-900 font-medium rounded-lg text-5xl m-5 p-5 w-64 lg:text-3xl"
        onClick={() => {
            setState({
                ...state,
                counter1: counter1 + 1
            })
        }}>
          +1
        </button>
        
      </div>
    </div>
  );
};
