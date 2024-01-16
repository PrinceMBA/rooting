import React from "react";
import { Link } from "react-router-dom";

const animeItem = [
  { name: "Attack On Titan", id: "1" },
  { name: "Naruto Shipuden", id: "2" },
  { name: "Fulmetal Alchimist Brotherhood", id: "3" },
  { name: "Death note", id: "4" },
  { name: "Violet Evergarden", id: "5" },
];

export default function Item() {
  return (
    <div>
      {animeItem.map((anime) => {
        return (
          <div>
            <h1>
              <Link to={"/Item/" + anime.name}>{anime.name}</Link>
            </h1>
          </div>
        );
      })}
    </div>
  );
}
