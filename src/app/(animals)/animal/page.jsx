import React from "react";
import AnimalContainer from "../../../components/animal/AnimalContainer";
import { getAnimals } from "../../../lib/animal";

const AnimalPage = async () => {
  const animals = await getAnimals();

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="py-16">
        <AnimalContainer animals={animals} />
      </section>
    </main>
  );
};

export default AnimalPage;