import { MovieProps } from "@/types";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface MovieDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  movie: MovieProps;
}

const MovieDetails = ({ isOpen, closeModal, movie }: MovieDetailsProps) => {
  return <div>Details</div>;
};

export default MovieDetails;
