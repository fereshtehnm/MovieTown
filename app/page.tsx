import Image from "next/image";
import { CustomFilter, Hero, SearchBar, CarCard } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const movies = await fetchCars(1);

  const isEmpty = !Array.isArray(movies) || movies.length < 1 || !movies;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars here!</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="country" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {movies.map((movie) => (
                <CarCard key={movie.country} movie={movie} />
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
