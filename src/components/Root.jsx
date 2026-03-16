import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Root = () => {
  return (
    <>
      <Header />
      <main className="max-w-360 mx-auto px-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
