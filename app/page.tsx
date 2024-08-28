import Image from "next/image";
import Link from "next/link";
import { Hero, MovieCard } from "@/components/sections";
import { Spinner } from "@/components/common";
import { GETMovies } from "@/api/movie/route";
import { MovieProps, ApiResponse } from "@/types";
export default async function Movie() {
  const fetchedData: ApiResponse = await GETMovies(2); // Use ApiResponse type here
  const movies: MovieProps[] = fetchedData.data; // Use Movie[] type here
  const totalPage: number = fetchedData.metadata.page_count;

  const isEmpty = !movies.length || !movies;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        {!movies ? (
          <Spinner />
        ) : !isEmpty ? (
          <section>
            <div className="home__wrapper">
              {movies.map((movie: MovieProps) => ( // Use Movie type here
                <MovieCard
                  key={movie.id} // Use movie.id for unique key
                  movie={movie}
                />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">oops! no data!</h2>
          </div>
        )}
      </div>
    </main>
  );
}
