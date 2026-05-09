import React from "react";
import {
  MotionDiv,
  staggerContainerVariants,
  staggerItemVariants,
} from "../components/ui/MotionDiv";
import Wrapper from "../utils/Wrapper";

const breeds = [
  { id: 1, name: "Black Bengal Goat", type: "Goat" },
  { id: 2, name: "Jamunapari Goat", type: "Goat" },
  { id: 3, name: "Deshi Cow", type: "Cow" },
  { id: 4, name: "Sindhi Cow", type: "Cow" },
  { id: 5, name: "Buffalo Local", type: "Buffalo" },
];

const TopBreeds = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Wrapper>

        <MotionDiv
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-black">
            সেরা জাতের পশু
          </h2>
        </MotionDiv>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {breeds.map((item) => (
            <MotionDiv
              key={item.id}
              variants={staggerItemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-5 rounded-xl bg-white shadow border text-center"
            >
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-muted-foreground">
                {item.type}
              </p>
            </MotionDiv>
          ))}
        </div>

      </Wrapper>
    </section>
  );
};

export default TopBreeds;