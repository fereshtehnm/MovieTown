"use client";

import Image from "next/image";
import Link from "next/link";
import { MovieProps } from "@/types";
import { Imdb } from "../common";

const MovieCard = ({ movie }: { movie: MovieProps }) => {
  const { id, title, poster, year, country, imdb_rating, genres, images } =
    movie;

  return (
    <Link
      href={`/movie/${id}`}
      className="block"
      tabIndex={0} // for keyboard accessibility
    >
      <div className="card group">
        <div className="card__header">
          <div className=" basis-5/6">
            <h2 className="card__content-title">{title}</h2>
          </div>

          <Imdb imdb_rating={imdb_rating} />
        </div>

        <div className=" card__image">
          <Image
            src={poster}
            fill
            sizes="100vw" // Image always fills 100% of viewport width
            alt={`${title} poster`}
            className="object-contain"
          />
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
