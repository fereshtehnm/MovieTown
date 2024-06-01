import { MovieProps } from "@/types";

export async function getMovies(page: number) {
  const headers = {
    "content-type": "application/json",
  };

  const response = await fetch(
    `https://moviesapi.ir/api/v1/movies?page=${page}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();
  
  return result.data;
}

