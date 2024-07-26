import Image from "next/image";
import { MovieProps } from "@/types";
import { CustomButton } from "../common";
import Imdb from "../common/Imdb";

interface MovieCardProps {
  movie: MovieProps;
}

const Movie = ({ movie }: MovieCardProps) => {
  const {
    title,
    poster,
    year,
    country,
    imdb_rating,
    genres,
    images,
    released,
    runtime,
    director,
    actors,
    plot,
    awards,
  } = movie;

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center md:items-start md:flex-row md:basis-1/3">
          <Image
            src={poster}
            width={400}
            height={500}
            alt={`${title} poster`}
            className="object-contain rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col md:basis-2/3 mt-4 md:mt-0 md:ml-8">
          <div className="flex space-x-3">
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            <Imdb imdb_rating={imdb_rating} />
          </div>

          <div className="flex items-center space-x-4 mb-4">
            <span className="text-lg">
              year: <b>{year}</b>
            </span>
            <span className="text-lg">
              country: <b>{country}</b>
            </span>
            <span className="text-lg">
              released: <b>{released}</b>
            </span>
            <span className="text-lg">
              runtime: <b>{runtime} minutes</b>
            </span>
          </div>

          <div className="flex flex-wrap space-x-2 mb-4">
            {genres.map((genre) => (
              <span
                key={genre}
                className="bg-gray-800 rounded-full px-4 py-1 text-sm"
              >
                {genre}
              </span>
            ))}
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold">Director</h2>
            <p>{director}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold">Actors</h2>
            <p>{actors}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold">Plot</h2>
            <p>{plot}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold">Awards</h2>
            <p>{awards}</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Images</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={450}
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
