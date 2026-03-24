import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Root;
