import Image from "next/image";
import Link from "next/link";
import { Hero, MovieCard } from "@/components/sections";
import { Spinner } from "@/components/common";
import { getMovies } from "@/utils";

export default async function Movie() {
  const fetchedData = await getMovies( 1);
  const movies = fetchedData.data;
  const totalPage = fetchedData.metadata.page_count;
  
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
              {movies.map((movie: any) => (
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
