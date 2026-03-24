import { Outlet, useNavigation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import Preloader from "./Preloader";

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Preloader />}
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
