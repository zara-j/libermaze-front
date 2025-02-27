const HomeTitle = () => {
  return (
    <div className="w-full overflow-y-hidden flex justify-around items-center bg-teal-700 h-80">
        <img
          src="https://res.cloudinary.com/dxjjsfami/image/upload/v1740464443/pexels-alinevianafoto-2465877_gqrzlx.jpg"
          alt="LiberMaze title"
          className="max-w-1/3 h-auto mx-auto object-cover object-center"
        />
      <article className="flex-col justify-center max-w-1/3 h-auto mx-auto">
        <h1 className="text-center hover:text-gray-900 text-5xl p-2">Welcome to LiberMaze</h1>
        <h2 className="text-center">Explore your beloved books</h2>
      </article>
    </div>
  );
};
export default HomeTitle;
