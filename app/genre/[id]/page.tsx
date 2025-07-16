import { Metadata } from "next";
import { MovieCard } from "@/components/sections";
import { PaginationControlled } from "@/components/common";
import { GETMoviesByGenre } from "@/api/genre/route";
import { cookies } from "next/headers";
type Props = { params: Promise<{ id: string }> };

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const params = await props.params;
  return {
    title: `movie ${params.id}`,
  };
};

export default async function MoviesByGenre(
  props: {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ page: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const fetchedData = await GETMoviesByGenre(
    parseInt(searchParams.page) || 1,
    params.id
  );
  // Retrieve and parse the genre cookie, find the matching genre name
  const genreName =
    JSON.parse((await cookies()).get("genre")?.value || "[]").find(
      (g: { id: number; name: string }) => g.id === parseInt(params.id)).name;

  const movies = fetchedData.data;
  const totalPage = fetchedData.metadata.page_count;

  return (
    <main className="overflow-hidden">
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <h2 className="genre-id__title">{genreName}</h2>

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
