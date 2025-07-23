import { useEffect } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const SimpleFormWithCustomHook = () => {
  const { formState, onInputChange, username, email, password, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  useEffect(() => {
    console.log("useEffect formstate changed");
  }, [formState]);

  useEffect(() => {
    console.log("useEffect email changed");
  }, [email]);

  return (
    <div className="flex flex-col max-w p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-zinc-800 dark:border-zinc-700 mt-10">
      <h1 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white p-5 lg:text-2xl">
        Formulario Simple con Hook personalizado
      </h1>
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="username"
          className="bg-zinc-100 border border-gray-300 text-gray-900 text-sm rounded-s focus:ring-indigo-500 focus:border-indigo-500 active:ring-indigo-500 active:border-indigo-500 block w-full p-2.5 dark:bg-zinc-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
          placeholder="username"
          value={username}
          onChange={onInputChange}
        />

        <input
          type="email"
          name="email"
          className="bg-zinc-100 border border-gray-300 text-gray-900 text-sm rounded-s focus:ring-indigo-500 focus:border-indigo-500 active:ring-indigo-500 active:border-indigo-500 block w-full p-2.5 dark:bg-zinc-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
          placeholder="e-mail@dominio.com"
          value={email}
          onChange={onInputChange}
        />

        <input
          type="password"
          name="password"
          className="bg-zinc-100 border border-gray-300 text-gray-900 text-sm rounded-s focus:ring-indigo-500 focus:border-indigo-500 active:ring-indigo-500 active:border-indigo-500 block w-full p-2.5 dark:bg-zinc-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
          placeholder="contraseña"
          value={password}
          onChange={onInputChange}
        />
        <button
          className="focus:outline-none text-white bg-indigo-700 hover:bg-indigo-500 active:bg-indigo-900 font-medium rounded-lg text-4xl mt-5 w-64 h-32 lg:w-32 lg:h-10 lg:text-lg"
          onClick={onResetForm}
        >
          Borrar
        </button>
      </div>
      {username === "alness1213" && <Message />}
    </div>
  );
};
