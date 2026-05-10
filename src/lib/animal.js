import animals from "../assets/data.json";

export const getAnimals = async () => {
  return animals;
};
export const getAnimalsById = async (id) => {
  console.log("id:",id)
  return animals.find((i) => i.id === Number(id));
};
