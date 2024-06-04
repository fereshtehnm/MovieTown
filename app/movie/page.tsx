"use client";

import { useState, useEffect } from "react";
import {
  CustomFilter,
  MovieCard,
  PaginationControlled,
  Loader
} from "@/components";
import { getMovies } from "@/utils";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(""); // Reset error state on each fetch
      try {
        const fetchedData = await getMovies(currentPage);
        setMovies(fetchedData.data);
        setTotalPages(Number(fetchedData.metadata.page_count));
        setIsLoading(false);
        console.log(movies);
      } catch (error) {
        setError("An error occurred");
      }
    };

    fetchData();
  }, [currentPage]); // Re-run useEffect on currentPage change

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  const isEmpty = !movies.length || !movies;

  return (
    <main className="overflow-hidden">

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops! {error}</h2>
          </div>
        ) : !isEmpty ? (
          <section>
            <div className="home__cars-wrapper">
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
        <div className=" flex justify-center py-8">
          <PaginationControlled
            pageCount={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </main>
  );
}
