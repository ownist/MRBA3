import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
