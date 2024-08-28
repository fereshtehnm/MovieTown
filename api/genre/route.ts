const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function GETGenres() {
  const data = await fetch(`${baseUrl}/genres`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return data;
}

export async function GETMoviesByGenre( page: number, id: string) {
  const data = await fetch(`${baseUrl}/genres/${id}/movies?page=${page}`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return data;
}
