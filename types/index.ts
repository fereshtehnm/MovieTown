import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    textStyles?: string;
}
export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}
export interface MovieProps {
    title: string,
    poster: string,
    year: string,
    country: string,
    imdb_rating: string,
    genres: Array<string>,
    images: Array<string>
}