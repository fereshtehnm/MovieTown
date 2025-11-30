import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // const genres: Genre[] = await GETGenres();
  // const genresList = request.cookies.get("genre");

  // if (!genresList) {
  //   response.cookies.set("genre", JSON.stringify(genres));
  // }
  return response;
}
