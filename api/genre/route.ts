import { MovieProps } from "@/types";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function GETGenres() {
  const data = await fetch(`${baseUrl}/genres`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return data;
}
