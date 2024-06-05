import { MovieProps } from "@/types";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getMovies(page: number) {
  const headers = {
    "content-type": "application/json",
  };

  const response = await fetch(
    `${baseUrl}/movies?page=${page}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();  
  return result;
}

export async function getMovieId(movie_id:string) {
  const headers = {
    "content-type": "application/json",
  };

  const response = await fetch(
    `${baseUrl}/movies/${movie_id}`,
    {
      headers: headers,
    }
  );
  const result = await response.json();  
  return result;
}
