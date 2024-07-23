import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    textStyles?: string;
    address: string;
}
export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}
export interface MovieProps {
    id: number,
    title: string,
    poster: string,
    year: string,
    country: string,
    imdb_rating: string,
    genres: Array<string>,
    images: Array<string>
}