import React from "react";
import AnimalCard from "../components/animal/AnimalCard";
import Wrapper from "./../utils/Wrapper";
import { Button } from "../components/ui/button";
import Link from "next/link";

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
    <section className="pt-24 ">
      <Wrapper>

        {/* Header */}
        <MotionDiv
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center gap-6 mb-14"
        >
          {/*  title block */}
          <div className="space-y-4 text-center">
            <MotionDiv variants={staggerItemVariants}>
              <span className="inline-block text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full text-primary bg-primary/10">
                যাচাইকৃত পশু
              </span>
            </MotionDiv>

            <MotionDiv variants={fadeInLeftVariants}>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight text-primary">
                সেরা পশুসমূহ
              </h2>
            </MotionDiv>

            <MotionDiv variants={fadeInRightVariants}>
              <p className="text-muted-foreground max-w-lg text-sm sm:text-base leading-relaxed">
                আমাদের সবচেয়ে জনপ্রিয় ও যাচাইকৃত কুরবানির পশুগুলো এখানে
                দেখুন। স্বাস্থ্যবান, নিরাপদ এবং বিশ্বস্ত খামার থেকে সংগ্রহ করা।
              </p>
            </MotionDiv>

            {/* Decorative line */}
            <MotionDiv variants={staggerItemVariants} className="flex items-center justify-center gap-2">
              <div className="h-px w-12 rounded-full bg-primary/30" />
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <div className="h-px w-12 rounded-full bg-primary/30" />
            </MotionDiv>
          </div>

      
        </MotionDiv>

        {/* Animal Cards Grid */}
        <MotionDiv
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {featured_animals.map((animal, index) => (
            <MotionDiv
              key={animal.id}
              variants={staggerItemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative"
            >
              
              <AnimalCard animal={animal} />
            </MotionDiv>
          ))}
        </MotionDiv>

        {/* Bottom CTA */}
        <MotionDiv
          variants={staggerItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            className="rounded-full px-8 py-3 text-base font-bold text-white bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Link href="/animals">
              সকল পশু দেখুন →
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground mt-3">
            আরও {animals.length - 3}টি পশু পাওয়া যাচ্ছে
          </p>
        </MotionDiv>

      </Wrapper>
    </section>
  );
};

export default FeaturedAnimals;