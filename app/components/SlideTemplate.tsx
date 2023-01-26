import { useState } from "react";

export default function Presentation() {
  const [favourites, setFavourites] = useState(["hello"]);

  return (
    <div className="container">
      {favourites.map((favourite) => {
        return <div>Test</div>;
      })}

      <button onClick={() => setFavourites([...favourites, "hello"])}>
        Add Favourite
      </button>
    </div>
  );
}
