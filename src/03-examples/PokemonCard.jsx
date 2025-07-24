import PropTypes from "prop-types";
import { useLayoutEffect, useRef } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {

  const titleRef = useRef()

  useLayoutEffect(() => {
    const {height, width} = titleRef.current.getBoundingClientRect();
    console.log({width, height})
  
  }, [name])


  return (
    <div className="h-80 w-full flex flex-col bg-zinc-100 border border-zinc-200 rounded-lg shadow-sm dark:bg-zinc-800 dark:border-zinc-700 overflow-hidden">
      {/* Imagen fija arriba */}
      <div className="h-60 w-full overflow-hidden grid grid-cols-2 gap-2">
        {sprites.map((sprite) => (
          <img
            className="h-auto w-full rounded-lg"
            key={sprite}
            src={sprite}
            alt={name}
          />
        ))}
      </div>

      {/* Contenedor que empuja el título al fondo */}
      <div className="flex-1 flex flex-col justify-end p-4">
        <h5  ref={titleRef} className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 mt-auto">
          #{id} - {name}
        </h5>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  sprites: PropTypes.any,
};
