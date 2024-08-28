import Link from "next/link";
import { Genre } from "@/types";
import { GETGenres } from "@/api/genre/route";


export default async function page() {
  const genres: Genre[] = await GETGenres();

  return (
    <div className="min-h-screen bg-black text-white py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">Genres</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {genres.map((genre) => (
          <Link
            key={genre.id} 
            href={`/genre/${genre.id}`} 
            className="block p-4 bg-gray-800 hover:bg-gray-700 rounded-lg text-center transition duration-200"
          >
            <h2 className="text-xl font-semibold">{genre.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
