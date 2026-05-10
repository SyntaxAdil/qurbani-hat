"use client";

import React, { useState } from "react";
import AnimalCard from "./AnimalCard";
import {
  MotionDiv,
  staggerContainerVariants,
  staggerItemVariants,
} from "../ui/MotionDiv";
import Wrapper from "../../utils/Wrapper";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const AnimalContainer = ({ animals }) => {
  const [sortType, setSortType] = useState("");

  // sorted animals
  const sortedAnimals = [...animals].sort((a, b) => {
    if (sortType === "high") {
      return b.price - a.price;
    }

    if (sortType === "low") {
      return a.price - b.price;
    }

    return 0;
  });

  return (
    <Wrapper>
      {/* Header */}
      <MotionDiv
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-16"
      >
        <MotionDiv variants={staggerItemVariants}>
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{
              color: "#16a34a",
              backgroundColor: "#dcfce7",
              letterSpacing: "0.15em",
            }}
          >
            পশু
          </span>
        </MotionDiv>

        <MotionDiv variants={staggerItemVariants}>
          <h2 className="text-4xl md:text-4xl font-black mb-4 text-primary">
            সকল কোরবানি পশু
          </h2>
        </MotionDiv>

        <MotionDiv variants={staggerItemVariants}>
          <p className="text-muted-foreground text-base md:text-sm max-w-xl mx-auto leading-relaxed">
            আপনার পছন্দের কোরবানির পশু বেছে নিন সহজেই
          </p>
        </MotionDiv>

        {/* Decorative line */}
        <MotionDiv
          variants={staggerItemVariants}
          className="flex items-center justify-center gap-2 mt-5"
        >
          <div
            className="h-px w-12 rounded-full"
            style={{ backgroundColor: "#86efac" }}
          />
          <div
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "#16a34a" }}
          />
          <div
            className="h-px w-12 rounded-full"
            style={{ backgroundColor: "#86efac" }}
          />
        </MotionDiv>
      </MotionDiv>

      {/* Filter */}
      <div className="flex justify-end mb-16">
        <Select value={sortType} onValueChange={setSortType}>
          <SelectTrigger className="w-full max-w-56">
            <SelectValue placeholder="দাম অনুযায়ী সাজান" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectLabel>দাম</SelectLabel>

              <SelectItem value="high">
                বেশি → কম
              </SelectItem>

              <SelectItem value="low">
                কম → বেশি
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Animals */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </Wrapper>
  );
};

export default AnimalContainer;