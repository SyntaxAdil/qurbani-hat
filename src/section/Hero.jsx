"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Button } from "@/components/ui/button";

import {
  MotionDiv,
  fadeInLeftVariants,
  fadeInRightVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/ui/MotionDiv";

import heroBg from "@/assets/hero-bg.png";
import heroBg2 from "@/assets/hero-bg-2.png";
import heroBg3 from "@/assets/hero-bg-3.png";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: heroBg,
    title: "আপনার কুরবানির জন্য সেরা পশু খুঁজুন",
    subtitle:
      "বিশ্বস্ত খামারি ও অনলাইন হাট থেকে সহজেই বুক করুন সুস্থ গরু ও ছাগল।",
  },
  {
    id: 2,
    image: heroBg2,
    title: "ঘরে বসেই কুরবানির পশু বুকিং",
    subtitle: "আধুনিক ও নিরাপদ অনলাইন কুরবানির হাট এখন আপনার হাতের মুঠোয়।",
  },
  {
    id: 3,
    image: heroBg3,
    title: "বিশ্বাসের অনলাইন কুরবানির হাট",
    subtitle: "দেখুন বিভিন্ন জাতের পশু, তুলনা করুন দাম এবং বুক করুন মুহূর্তেই।",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden  ">
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        loop
        speed={1200}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="h-[80vh] min-h-150"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[80vh] min-h-150 w-full overflow-hidden">
              {/* Background */}
              <MotionDiv
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 10,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt="Qurbani Hat Banner"
                  fill
                  priority
                  className="object-cover"
                />
              </MotionDiv>

              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20" />

              {/* glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(16,185,129,0.14),transparent_55%)]" />

              {/* CONTENT WRAPPER (90% FEEL CENTERED) */}
              <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-2 sm:px-6 lg:px-12">
                <MotionDiv
                  variants={staggerContainerVariants}
                  initial={{ opacity: 0, scale: 0.97, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl space-y-2"
                >
                  {/* Badge */}
                  <MotionDiv variants={staggerItemVariants} className="mb-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-medium text-primary backdrop-blur-md">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                      বাংলাদেশের বিশ্বস্ত কুরবানির হাট
                    </div>
                  </MotionDiv>

                  {/* Title */}
                  <MotionDiv variants={fadeInLeftVariants}>
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-[1.15] tracking-tight text-foreground">
                      {slide.title}
                    </h1>
                  </MotionDiv>

                  {/* Subtitle */}
                  <MotionDiv variants={fadeInRightVariants} className="mt-6">
                    <p className="max-w-xl text-base sm:text-lg lg:text-xl leading-[1.8] text-muted-foreground">
                      {slide.subtitle}
                    </p>
                  </MotionDiv>

                  {/* Buttons */}
                  <MotionDiv
                    variants={staggerItemVariants}
                    className="mt-10 flex flex-wrap gap-5"
                  >
                    <MotionDiv
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        className="h-12 rounded-full px-8 text-base shadow-lg shadow-primary/20"
                      >
                        <Link href={"/animals"}>পশু দেখুন</Link>
                      </Button>
                    </MotionDiv>

                    <MotionDiv
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="h-12 rounded-full border-primary/20 bg-white/70 px-8 text-base backdrop-blur-md"
                      >
                        <Link href={"/animals"}>বিস্তারিত জানুন</Link>
                      </Button>
                    </MotionDiv>
                  </MotionDiv>

                  {/* Stats */}
                  <MotionDiv
                    variants={staggerItemVariants}
                    className="mt-12 flex flex-wrap gap-10"
                  >
                    <div>
                      <h3 className="text-3xl font-black text-primary">৫০০+</h3>
                      <p className="text-sm text-muted-foreground">
                        পশু তালিকাভুক্ত
                      </p>
                    </div>

                    <div>
                      <h3 className="text-3xl font-black text-primary">২০০+</h3>
                      <p className="text-sm text-muted-foreground">
                        বিশ্বস্ত খামারি
                      </p>
                    </div>

                    <div>
                      <h3 className="text-3xl font-black text-primary">
                        ৫০০০+
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        সন্তুষ্ট গ্রাহক
                      </p>
                    </div>
                  </MotionDiv>
                </MotionDiv>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
