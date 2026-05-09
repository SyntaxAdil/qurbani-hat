import React from "react";
import Hero from "../section/Hero";
import { getAnimals } from "../lib/animal";
import FeaturedAnimals from "../section/FeaturedAnimals";
import QurbaniTips from "./../section/QurbaniTips";
import TopBreeds from "./../section/TopBreeds";
import FAQ from "./../section/FAQ";

const Home = async () => {
  const animals = await getAnimals();
  return (
    <div>
      <Hero></Hero>
      <FeaturedAnimals animals={animals}></FeaturedAnimals>
      <QurbaniTips></QurbaniTips>
      <TopBreeds></TopBreeds>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
