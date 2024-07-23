import Image from "next/image";
import { MovieProps } from "@/types";
import CustomButton from "../CustomButton";
import Imdb from "./Imdb";

interface MovieCardProps {
  movie: MovieProps;
}

const Movie = ({ movie }: MovieCardProps) => {
  const { title, poster, year, country, imdb_rating, genres, images } = movie;

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center md:items-start md:flex-row md:basis-1/3">
          <Image
            src={poster}
            width={300}
            height={450}
            alt={`${title} poster`}
            className="object-contain rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col md:basis-2/3 mt-4 md:mt-0 md:ml-8">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-xl">{year}</span>
            <span className="text-xl">{country}</span>
          </div>
          <div className="mb-4">
            <Imdb imdb_rating={imdb_rating} />
          </div>
          <div className="flex flex-wrap space-x-2 mb-4">
            {genres.map((genre) => (
              <span key={genre} className="bg-gray-800 rounded-full px-4 py-1 text-sm">
                {genre}
              </span>
            ))}
          </div>
         
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Images</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={200}
              height={300}
              alt={`Image ${index + 1}`}
              className="object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
