import { Metadata } from "next";
import { MovieCard } from "@/components/sections";
import { PaginationControlled } from "@/components/common";
import { GETMoviesByGenre } from "@/api/genre/route";

type Props = { params: { id: string } };

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `movie ${params.id}`,
  };
};

export default async function MoviesByGenre({ params, searchParams }: { params: { id: string }, searchParams: { page: string } }) {
    const fetchedData = await GETMoviesByGenre(
      parseInt(searchParams.page) || 1,
      params.id
    );
    const movies = fetchedData.data;
    const totalPage = fetchedData.metadata.page_count;
  
  return (
    <main className="overflow-hidden">
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        {movies ? (
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
            currentPage={parseInt(searchParams.page) || 1}
          />
        </div>
      </div>
    </main>
  );
}
