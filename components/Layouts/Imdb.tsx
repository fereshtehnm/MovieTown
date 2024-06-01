import Image from "next/image";

interface ImdbProps {
  imdb_rating: string;
}

const Imdb = ({ imdb_rating }: ImdbProps) => {
  return (
    <div className="imdb-rating">
      <span className="imdb-rating__value">{imdb_rating}</span>
      <Image src="/imdb.png" width={30} height={30} alt="imdb" />
    </div>
  );
};

export default Imdb;
