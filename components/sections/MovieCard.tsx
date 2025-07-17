"use client";

import Image from "next/image";
import Link from "next/link";
import { MovieProps } from "@/types";
import { CustomButton, Imdb } from "../common";

const MovieCard = ({ movie }: { movie: MovieProps }) => {
  const { id, title, poster, year, country, imdb_rating, genres, images } =
    movie;

  return (
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
          sizes="100vw"
          alt={`${title} poster`}
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="card__bottom-container">
          <div className="card__btn-container">
            <Link href={`/movie/${id}`}>
              <CustomButton
                title="view more"
                containerStyles="card__btn"
                textStyles="card__btn-text"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
