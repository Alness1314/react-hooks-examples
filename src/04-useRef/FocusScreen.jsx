import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    console.log(inputRef)
    inputRef.current.select()
  };

  return (
    <div className="flex flex-col max-w p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-zinc-800 dark:border-zinc-700 mt-10">
      <h1 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white p-5 lg:text-2xl">
        Focus Screen
      </h1>
      <div className="grid grid-cols-1 gap-4">
        <input
          ref={inputRef}
          type="text"
          name="name"
          className="bg-zinc-100 border border-gray-300 text-gray-900 text-sm rounded-s focus:ring-indigo-500 focus:border-indigo-500 active:ring-indigo-500 active:border-indigo-500 block w-full p-2.5 dark:bg-zinc-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
          placeholder="Ingrese nombre"
        />
        <button
          className="inline-flex items-center px-4 py-2 text-sm text-center focus:outline-none text-white bg-indigo-700 hover:bg-indigo-500 active:bg-indigo-900 font-medium rounded"
          onClick={onClick}
        >
          Set Focus
        </button>
      </div>
    </div>
  );
};
