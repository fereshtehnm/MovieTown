"use client";

import { useState } from "react";
import Image from "next/image";
import { MovieProps } from "@/types";
import CustomButton from "./CustomButton";
import MovieDetails from "./MovieDetails";

interface MovieCardProps {
  movie: MovieProps;
}
const MovieCard = ({ movie }: MovieCardProps) => {
  const { title, poster, year } = movie;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {movie.title}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/steering-wheel.svg"
          fill
          alt="car model"
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
          </div>

          <div className="car-card__btn-container">
            <CustomButton
              title="view more"
              containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
              textStyles="text-white text-[14px] leading-[17px] font-bold"
              rightIcon="/right-arrow.svg"
              handleClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>
      <MovieDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        movie={movie}
      />
    </div>
  );
};

export default MovieCard;
