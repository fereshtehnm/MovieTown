const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function GETMovies(page: number) {
  const data = await fetch(`${baseUrl}/movies?page=${page}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return data;
}

export async function GETMovieById(movie_id: string) {
  const data = await fetch(`${baseUrl}/movies/${movie_id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return data;
}
