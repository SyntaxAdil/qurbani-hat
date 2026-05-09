import React from "react";
import AnimalCard from "../components/animal/AnimalCard";
import Wrapper from "./../utils/Wrapper";

import {
  MotionDiv,
  fadeInLeftVariants,
  fadeInRightVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "../components/ui/MotionDiv";

const FeaturedAnimals = ({ animals }) => {
  const featured_animals = animals.slice(0, 3);

  return (
    <section className="my-24">
      <Wrapper>

        {/* Header */}
        <MotionDiv
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 space-y-3"
        >
          <MotionDiv variants={fadeInLeftVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight mb-4">
              সেরা পশুসমূহ
            </h2>
          </MotionDiv>

          <MotionDiv variants={fadeInRightVariants}>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              আমাদের সবচেয়ে জনপ্রিয় ও যাচাইকৃত কুরবানির পশুগুলো এখানে দেখুন।
              স্বাস্থ্যবান, নিরাপদ এবং বিশ্বস্ত খামার থেকে সংগ্রহ করা।
            </p>
          </MotionDiv>

          {/* Accent line */}
          <MotionDiv
            variants={staggerItemVariants}
            className="flex justify-center"
          >
            <div className="h-1 w-24 rounded-full bg-primary/70" />
          </MotionDiv>
        </MotionDiv>

        {/* Grid */}
        <MotionDiv
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {featured_animals.map((animal) => (
            <MotionDiv
              key={animal.id}
              variants={staggerItemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <AnimalCard animal={animal} />
            </MotionDiv>
          ))}
        </MotionDiv>

      </Wrapper>
    </section>
  );
};

export default FeaturedAnimals;