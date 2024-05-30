import Image from "next/image";
import { CustomFilter, Hero, SearchBar, MovieCard } from "@/components";
import { getMovies } from "@/utils";

export default async function Home() {
  const movies = await getMovies(1);

  const isEmpty = !Array.isArray(movies) || movies.length < 1 || !movies;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Catalogue</h1>
          <p>Explore the movies here!</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="genre" />
          </div>
        </div>

        {!isEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {movies.map((movie) => (
                <MovieCard key={movie.country} movie={movie} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">oops! no data!</h2>
            <p>{movies?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
