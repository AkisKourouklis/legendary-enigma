import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Articles from "./Articles";

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <Articles />
      <Footer />
    </>
  );
};

export default Home;
