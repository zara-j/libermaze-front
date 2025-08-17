import { useEffect, useState } from "react";

const HomeTitle = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="w-full overflow-hidden flex flex-col justify-center items-center min-h-[60vh] relative">      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-90 z-0 pointer-events-none" />
      <article className="z-10 text-center px-4 py-12 md:py-20 space-y-6 max-w-4xl mx-auto">
        <div className="relative inline-block group">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 tracking-tight leading-tight">
            Welcome to <span className="text-green-900">LiberMaze</span>
          </h1>
          <div className="absolute bottom-0 left-0 h-1 bg-indigo-400 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
        </div>
        <h2
          style={{ transitionDelay: "300ms" }}
          className={`text-xl md:text-2xl text-gray-800 font-medium mt-4 transform transition-all duration-8000 ease-out
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          Discover, Explore, and Journey Through Literature
        </h2>
      </article>
    </div>
  );
};

export default HomeTitle;
