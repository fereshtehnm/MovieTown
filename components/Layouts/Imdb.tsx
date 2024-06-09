import Image from "next/image";

interface ImdbProps {
  imdb_rating: string;
}

const Imdb = ({ imdb_rating }: ImdbProps) => {
  return (
    <div className=" flex-col items-center justify-center w-8">
      <div className="flex justify-center">
        <span className="imdb-rating__value">{imdb_rating}</span>
      </div>
      <div>
        <Image src="/imdb.png" width={32} height={25} alt="imdb" />
      </div>
    </div>
  );
};

export default Imdb;
