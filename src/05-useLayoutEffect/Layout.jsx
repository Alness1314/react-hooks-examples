import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";


export const Layout = () => {
  const { counter, decrement, increment } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <div className="flex flex-col max-w p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-zinc-800 dark:border-zinc-700 mt-10">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white p-5 lg:text-2xl">
        Informacion de Pokemon
      </h1>

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={data.id}
          name={data.name}
          sprites={[data.sprites.front_default, data.sprites.back_default]}
        />
      )}

      <div className="flex flex-col items-center pb-10">
        <div className="flex mt-4 md:mt-6">
          <button
            className="inline-flex items-center px-4 py-2 text-sm text-center focus:outline-none text-white bg-indigo-700 hover:bg-indigo-500 active:bg-indigo-900 font-medium rounded"
            onClick={() => (counter > 1 ? decrement() : null)}
          >
            Anterior
          </button>
          <button
            className="py-2 px-4 ms-2 text-sm focus:outline-none text-white bg-indigo-700 hover:bg-indigo-500 active:bg-indigo-900 font-medium rounded"
            onClick={() => increment()}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};
