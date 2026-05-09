import React from 'react'
import Hero from '../section/Hero'
import { getAnimals } from '../lib/animal'
import FeaturedAnimals from '../section/FeaturedAnimals';

const Home = async() => {
  const animals=await getAnimals();
  return (
    <div>
      <Hero></Hero>
      <FeaturedAnimals animals={animals} ></FeaturedAnimals>
    </div>
  )
}

export default Home