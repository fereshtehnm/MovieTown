import Image from "next/image";
import Link from "next/link";
import { Hero, MovieCard } from "@/components/sections";
import { Spinner, PaginationControlled } from "@/components/common";
import { GETMovies } from "@/api/movie/route";
import { SearchBar } from "@/components/common";

export const metadata = {
  title: "movies",
  description: "explore movies from around the world!",
};

export default async function Home(context: any) {
  const fetchedData = await GETMovies(parseInt((await context.searchParams).page) || 1);
  const movies = fetchedData.data;
  const totalPage = fetchedData.metadata.page_count;

  const isEmpty = !movies.length || !movies;


  return (
    <main className="overflow-hidden">
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        {/* <SearchBar /> */}
        {!movies ? (
          <Spinner />
        ) : !isEmpty ? (
          <section>
            <div className="home__wrapper">
              {movies.map((movie: any) => (
                <MovieCard
                  key={movie.id} 
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
        <div className="flex justify-center padding-x padding-y">
          <PaginationControlled
            pageCount={totalPage}
            currentPage={parseInt((await context.searchParams).page) || 1}
          />
        </div>
      </div>
    </main>
  );
}
