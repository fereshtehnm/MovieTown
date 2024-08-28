import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
export interface MovieProps {
  id: number;
  title: string;
  poster: string;
  year: string;
  country: string;
  imdb_rating: string;
  genres: Array<string>;
  images: Array<string>;
  released: string;
  runtime: string;
  director: string;
  actors: string;
  plot: string;
  awards: string;
}

export interface Metadata {
  current_page: string;
  per_page: number;
  page_count: number;
  total_count: number;
}

export interface ApiResponse {
  data: MovieProps[];
  metadata: Metadata;
}

export interface Genre {
  id: number;
  name: string;
}
