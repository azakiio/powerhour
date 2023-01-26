import { useEffect, useState } from "react";
import { cards, CardType } from "./data";

let index = 0;

export default function Presentation() {
  const [favourites, setFavourites] = useState<CardType[]>([]);

  return (
    <div className="container mx-auto p-4">
      <button onClick={() => setFavourites([...favourites, cards[index++]])}>
        Add Favourite
      </button>
      <div className="flex gap-4 flex-wrap">
        {favourites.map(({ id, author, download_url }) => {
          return (
            <div
              key={id}
              className="flex flex-col items-center max-w-xs w-full rounded relative"
            >
              <div className="text-xl font-bold">{author}</div>
              <img src={download_url} alt="" className="h-full object-cover rounded-xl" />
              <button
                className="px-4 border rounded"
                onClick={() =>
                  setFavourites(
                    favourites.filter((current) => current.id !== id)
                  )
                }
              >
                Remove Me
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
