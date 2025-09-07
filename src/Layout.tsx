import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="pt-4 px-8 min-h-screen bg-gray-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
