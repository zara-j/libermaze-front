import { Link } from "react-router-dom";

interface CardItemProps {
  id: number;
  title: string;
  author: string;
  imgSrc: string;
}

const CardItem: React.FC<CardItemProps> = ({ id, title, author, imgSrc }) => (
  <div className="mb-8 p-5 flex justify-center items-center">
    <div className="hover:shadow-lg max-w-[250px] max-h-[600px]">
      <Link to={`/books/${id}`}>
        <img src={imgSrc} className="object-cover object-center" alt={title} />
      </Link>
      <div className="flex flex-col text-center justify-center items-center">
        <Link to={`/books/${id}`} className="pt-3 text-2xl font-bold hover:underline">
          {title}
        </Link>
        <div className="text-xl text-gray-400">
          <small>{author}</small>
        </div>
      </div>
    </div>
  </div>
);

export default CardItem;
