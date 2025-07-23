import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, resetCounter } = useCounter();

  return (
    <div className="flex flex-col max-w p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-zinc-800 dark:border-zinc-700 mt-10">
      <h1 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white p-5 lg:text-3xl">
        Counter with Hook: {counter}
      </h1>

      <div className="grid grid-cols-3 gap-1 md:place-items-center">
        <button
          className="focus:outline-none text-white bg-indigo-700 hover:bg-indigo-500 active:bg-indigo-900 font-medium rounded-lg text-4xl mt-5 w-32 h-32 lg:w-15 lg:h-20 lg:text-3xl"
          onClick={() => increment(2)}
        >
          +1
        </button>
        <button
          className="focus:outline-none text-white bg-indigo-700 hover:bg-indigo-500 active:bg-indigo-900 font-medium rounded-lg text-4xl mt-5 w-64 h-32 lg:w-25 lg:h-20 lg:text-3xl"
          onClick={resetCounter}
        >
          Reset
        </button>
        <button
          className="focus:outline-none text-white bg-indigo-700 hover:bg-indigo-500 active:bg-indigo-900 font-medium rounded-lg text-4xl mt-5 w-32 h-32 lg:w-15 lg:h-20 lg:text-3xl"
          onClick={() => decrement(2)}
        >
          -1
        </button>
      </div>
    </div>
  );
};
