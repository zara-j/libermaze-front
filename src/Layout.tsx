import { Outlet } from "react-router";
import Header from "./components/header/Header";

const Layout = () => {
  console.log("✅ Layout rendered");

  return (
    <>
      <Header />
      <main className="pt-40 px-8 min-h-screen bg-gray-100">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
