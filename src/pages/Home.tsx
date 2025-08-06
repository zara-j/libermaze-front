import BestSellers from "../components/book/BestSellers";
import HomeTitle from "../components/homeContents/HomeTitle";

const Home = () => {
  return (
    <>
      <div className="my-container flex-col justify-center items-center bg-gray-100">
       <HomeTitle />
       <BestSellers />
      </div>
    </>
  );
};

export default Home;
