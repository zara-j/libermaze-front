interface BookCardProps {
    image: string;
    title: string;
    author: string
}

const Card: React.FC<BookCardProps> = ({ image, title, author }) => {
    return (
      <div className="card bg-base-100 shadow-md flex flex-col justify-center items-center text-center pt-1">
        <figure>
          <img src={image} alt={title} className="w-full h-64 object-center object-contain rounded"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-wrap">{title}</h2>
          <p className="text-gray-500">{author}</p>
        </div>
      </div>
    );
  };
export default Card;


