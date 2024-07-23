import { getMovieId } from "@/utils";
import { Metadata } from "next";
import { Movie } from "@/components/Layouts";

type Props = { params: { movieId: string } };

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `movie ${params.movieId}`,
  };
};

export default async function movieId({ params }: Props) {
  const movie = await getMovieId(params.movieId);
  console.log(movie);
  return (
    <div>
      <Movie movie={movie} />
    </div>
  );
}
