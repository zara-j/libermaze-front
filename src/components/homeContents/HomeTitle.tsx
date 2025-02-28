const HomeTitle = () => {
  return (
    <div className="w-full overflow-y-hidden flex flex-col lg:flex-row justify-around items-center bg-teal-700 max-h-[800px]">
        <img
          src="https://res.cloudinary.com/dxjjsfami/image/upload/v1740464443/pexels-alinevianafoto-2465877_gqrzlx.jpg"
          alt="LiberMaze title"
          className="lg:max-w-1/3 max-w-full h-auto mx-auto object-cover object-center"
        />
      <article className="flex-col justify-center lg:max-w-1/3 h-auto mx-auto py-6">
        <h1 className="text-center hover:text-gray-900 text-3xl md:text-4xl lg:text-5xl p-2">Welcome to LiberMaze</h1>
        <h2 className="text-center text-xl ">Explore your beloved books</h2>
      </article>
    </div>
  );
};
export default HomeTitle;
