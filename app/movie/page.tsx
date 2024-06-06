import Image from "next/image";
import Link from "next/link";
import { Hero, MovieCard, Loader, PaginationControlled } from "@/components";
import { getMovies } from "@/utils";

export default async function Home(context: any) {
  const fetchedData = await getMovies(parseInt(context.searchParams.page) || 1);
  const movies = fetchedData.data;
  const totalPage = fetchedData.metadata.page_count;

  const isEmpty = !movies.length || !movies;

  return (
    <main className="overflow-hidden">
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        {!movies ? (
          <Loader />
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
        <div className="flex justify-center padding-x padding-y">
          <PaginationControlled
            pageCount={totalPage}
            currentPage={parseInt(context.searchParams.page) || 1}
          />
        </div>
      </div>
    </main>
  );
}
