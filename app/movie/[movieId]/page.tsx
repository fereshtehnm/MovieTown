"use client";
import { useEffect, useState } from "react";
import { getMovieId } from "@/utils";
export default function movieId({ params }: { params: { movieId: string } }) {
  const [movie, setMovie] = useState("");
  useEffect(() => {
    async function fetchBlogData() {
      try {
        const data = await getMovieId(params.movieId);
        console.log(data);
        
        setMovie(data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    }
    if (params.movieId) {
      fetchBlogData();
    }
  }, [params.movieId]);

  return <h1>{movie.title}</h1>;
}
