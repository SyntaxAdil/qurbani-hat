import React from "react";
import {
  MotionDiv,
  staggerContainerVariants,
  staggerItemVariants,
} from "../components/ui/MotionDiv";
import Wrapper from "../utils/Wrapper";
import { Badge } from "../components/ui/badge";

const tips = [
  {
    id: 1,
    number: "০১",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.6}>
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "স্বাস্থ্যবান পশু নির্বাচন করুন",
    desc: "চোখ, দাঁত ও শরীর ভালোভাবে দেখে নিন। অসুস্থ পশু এড়িয়ে চলুন।",
    tag: "স্বাস্থ্য",
    accent: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    id: 2,
    number: "০২",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.6}>
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "বয়স যাচাই করুন",
    desc: "গরুর বয়স কমপক্ষে ২ বছর হওয়া উচিত কুরবানির জন্য।",
    tag: "বয়স",
    accent: "#0d9488",
    bg: "#f0fdfa",
    border: "#99f6e4",
  },
  {
    id: 3,
    number: "০৩",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.6}>
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "বিশ্বস্ত খামার থেকে কিনুন",
    desc: "অনলাইন বা অফলাইন যেখান থেকেই কিনুন যাচাই করা খামার বেছে নিন।",
    tag: "বিশ্বাসযোগ্য",
    accent: "#15803d",
    bg: "#f0fdf4",
    border: "#86efac",
  },
];

const QurbaniTips = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
     
      />

      <Wrapper>
        {/* Section Header */}
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
              গুরুত্বপূর্ণ পরামর্শ
            </span>
          </MotionDiv>

          <MotionDiv variants={staggerItemVariants}>
            <h2
              className="text-4xl md:text-5xl font-black mb-4 text-primary"
              
            >
              কুরবানির টিপস
            </h2>
          </MotionDiv>

          <MotionDiv variants={staggerItemVariants}>
            <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
              সঠিক পশু বাছাইয়ে এই বিষয়গুলো মাথায় রাখুন
            </p>
          </MotionDiv>

          {/* Decorative line */}
          <MotionDiv
            variants={staggerItemVariants}
            className="flex items-center justify-center gap-2 mt-5"
          >
            <div className="h-px w-12 rounded-full" style={{ backgroundColor: "#86efac" }} />
            <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#16a34a" }} />
            <div className="h-px w-12 rounded-full" style={{ backgroundColor: "#86efac" }} />
          </MotionDiv>
        </MotionDiv>

        {/* Cards Grid */}
        <MotionDiv
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {tips.map((item) => (
            <MotionDiv
              key={item.id}
              variants={staggerItemVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative rounded-2xl p-7 border-2 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              style={{ borderColor: item.border }}
            >
              {/* Large background number */}
              <div
                className="absolute -right-3 -top-4 text-8xl font-black select-none pointer-events-none transition-all duration-300 group-hover:scale-110"
                style={{ color: item.border, opacity: 0.6 }}
              >
                {item.number}
              </div>

              {/* Top row: icon + tag */}
              <div className="flex items-start justify-between mb-5 relative z-10">
                <div
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: item.bg, color: item.accent }}
                >
                  {item.icon}
                </div>
                <Badge
                  variant="outline"
                  className="text-xs font-medium px-2.5 py-1 rounded-full border"
                  style={{
                    color: item.accent,
                    borderColor: item.border,
                    backgroundColor: item.bg,
                  }}
                >
                  {item.tag}
                </Badge>
              </div>

              {/* Text content */}
              <div className="relative z-10">
                <h3
                  className="font-bold text-lg mb-2 leading-snug"
                  style={{ color: "#14532d" }}
                >
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom accent bar */}
              <div
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                style={{ backgroundColor: item.accent }}
              />
            </MotionDiv>
          ))}
        </MotionDiv>
      </Wrapper>
    </section>
  );
};

export default QurbaniTips;