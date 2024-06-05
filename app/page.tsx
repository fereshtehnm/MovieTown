"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Hero,
  MovieCard,
  Loader
} from "@/components";
import { getMovies } from "@/utils";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(""); // Reset error state on each fetch
      try {
        const fetchedData = await getMovies(1);
        setMovies(fetchedData.data);
        setIsLoading(false);
        console.log(movies);
      } catch (error) {
        setError("An error occurred");
      }
    };

    fetchData();
  }, []); // Re-run useEffect on currentPage change

  const isEmpty = !movies.length || !movies;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops! {error}</h2>
          </div>
        ) : !isEmpty ? (
          <section>
            <div className="home__wrapper">
              {movies.map((movie) => (
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
      </div>
    </main>
  );
}
