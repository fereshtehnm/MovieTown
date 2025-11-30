"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { MovieCard } from "@/components/sections";
import { Spinner } from "@/components/common";
import { GETMovies } from "@/api/movie/route";
import type { MovieProps } from "@/types";

interface LoadMoreProps {
  initialPage: number;
  totalPage: number;
  initialMovies: MovieProps[];
}

const LoadMore = ({ initialPage, totalPage, initialMovies }: LoadMoreProps) => {
  const [movies, setMovies] = useState<MovieProps[]>(initialMovies || []);
  const [page, setPage] = useState(initialPage + 1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialPage < totalPage);

  const { ref, inView } = useInView();

  // Only increment page number when the bottom is in view
  useEffect(() => {
    if (inView && hasMore && !loading) {
      setPage((prev) => prev + 1);
    }
  }, [inView, hasMore, loading]);

  // Fetch movies when page changes (but NOT for the initial render)
  useEffect(() => {
    if (page === initialPage + 1) return; // skip fetching for the initial render
    if (!hasMore) return;
    setLoading(true);
    console.log(page);
    
    GETMovies(page - 1) // GETMovies expects the page number
      .then((fetchedData) => {
        setMovies((prev) => [...prev, ...fetchedData.data]);
        setHasMore(page - 1 < totalPage);
      })
      .finally(() => setLoading(false));
  }, [page, hasMore, totalPage, initialPage]);

  return (
    <>
      {/* Only render movies loaded after the initial page */}
      {movies.slice(initialMovies.length).map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      {loading && <Spinner />}
      {hasMore && <div ref={ref} className="h-8" />}
      {!hasMore && (
        <div className="text-center py-4 font-semibold text-gray-600">
          All movies loaded.
        </div>
      )}
    </>
  );
};

export default LoadMore;
