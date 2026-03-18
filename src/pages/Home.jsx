import { useLoaderData } from "react-router";
import Hero from "../components/Hero";
import TrendingApps from "../components/TrendingApps";
import TrustedBy from "../components/TrustedBy";

const Home = () => {
  const appsData = useLoaderData();

  return (
    <>
      <Hero />
      <TrustedBy />
      <TrendingApps appsData={appsData} />
    </>
  );
};

export default Home;
