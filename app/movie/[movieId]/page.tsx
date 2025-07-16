import { Metadata } from "next";
import { Movie } from "@/components/sections";
import { GETMovieById } from "@/api/movie/route";

type Props = { params: Promise<{ movieId: string }> };

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const params = await props.params;
  return {
    title: `movie ${params.movieId}`,
  };
};

export default async function movieId(props: Props) {
  const params = await props.params;
  const movie = await GETMovieById(params.movieId);
  return (
      <Movie movie={movie} />
  );
}
