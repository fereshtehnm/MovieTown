"use client";

import { useState } from "react";
import Image from "next/image";
import { MovieProps } from "@/types";
import CustomButton from "./CustomButton";
import Imdb from "./Layouts/Imdb";

interface MovieCardProps {
  movie: MovieProps;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { title, poster, year, country, imdb_rating, genres, images } = movie;

  const [isOpen, setIsOpen] = useState(false);
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
          alt={`${title} poster`}
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex invisible group-hover:visible w-full justify-between text-gray">
          <div className="card__btn-container">
            <CustomButton
              title="view more"
              containerStyles="w-full py-[16px] rounded-full bg-red-600"
              textStyles="text-white text-[14px] leading-[17px] font-bold"
              rightIcon="/right-arrow.svg"
              handleClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
