import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { HeroVideo } from "./components/HeroVideo/HeroVideo";
import { CategoriesSection } from "./components/CategoriesSection/CategoriesSection";
import { useData } from "../../contexts/DataProvider";

export const Home = () => {
  const { loading } = useData();
  return (
    !loading && (
      <div className="home-page">
        <div className="hero">
          <HeroVideo />
          {/* <CategoriesSection /> */}
          <Footer />
        </div>
      </div>
    )
  );
};
