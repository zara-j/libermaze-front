interface CardItemProps {
  title: string;
  author: string;
  imgSrc: string;
  // genre?: string;
  // description?: string;
  // rating?: number;
  // publishDate?: number;
  // firstSentence?: string;
}

const CardItem:React.FC<CardItemProps> = ({ title, author, imgSrc}) => (
  <div className="mb-8 p-5 flex justify-center items-center">
    <div className="hover:shadow-lg max-w-[250px] max-h-[600px]">
      <img src={imgSrc} className="object-cover object-center" alt="Card cap" />
      <div className="flex flex-col text-center justify-center items-center">
        <div className="pt-3 text-2xl font-bold">{title}</div>
        <div className="text-xl text-gray-400"><small>{author}</small></div>
      </div>
    </div>
  </div>
);
export default CardItem