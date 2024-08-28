import { Metadata } from "next";
import { Movie } from "@/components/sections";
import { GETMovieById } from "@/api/movie/route";

type Props = { params: { movieId: string } };

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `movie ${params.movieId}`,
  };
};

export default async function movieId({ params }: Props) {
  const movie = await GETMovieById(params.movieId);
  return (
      <Movie movie={movie} />
  );
}
