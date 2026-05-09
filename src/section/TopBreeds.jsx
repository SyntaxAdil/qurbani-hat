"use client";

import React from "react";
import Image from "next/image";
import {
  MotionDiv,
  staggerContainerVariants,
  staggerItemVariants,
  fadeInLeftVariants,
  fadeInRightVariants,
} from "../components/ui/MotionDiv";
import Wrapper from "../utils/Wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Award, DollarSign, MapPin, Weight } from "lucide-react";
const topBreeds = [
  // 🐄 COW SECTION
  {
    id: 1,
    name: "শাহীওয়াল গরু",
    type: "Cow",
    origin: "পাঞ্জাব, পাকিস্তান",
    weight: "600-800 kg",
    price: "1.5-2.5 lakh",
    description:
      "শক্তিশালী শরীর, গরম সহনশীল এবং দুধ-মাংস উভয়ের জন্য বিখ্যাত প্রিমিয়াম কুরবানির গরু।",
    tag: "প্রিমিয়াম",
    image:
      "https://lalteerlivestock.com/wp-content/uploads/2022/09/28.-17SL0025-SAM-1.jpg",
  },
  {
    id: 2,
    name: "ফ্রিজিয়ান গরু",
    type: "Cow",
    origin: "নেদারল্যান্ডস",
    weight: "700-900 kg",
    price: "2-3 lakh",
    description:
      "কালো-সাদা বড় আকৃতির গরু, দুধ উৎপাদনে সেরা এবং কুরবানির জন্যও ব্যবহৃত হয়।",
    tag: "ডেইরি + মাংস",
    image:
      "https://cdn.britannica.com/11/136111-050-174C2796/Holstein-cow.jpg",
  },
  {
    id: 3,
    name: "লাল চট্টগ্রাম গরু",
    type: "Cow",
    origin: "চট্টগ্রাম, বাংলাদেশ",
    weight: "500-700 kg",
    price: "1.2-2 lakh",
    description:
      "দেশি লাল রঙের গরু, শক্তিশালী ও রোগ প্রতিরোধ ক্ষমতা বেশি।",
    tag: "দেশি জাত",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_a9tLJK0_0qLHJUBHGYhGa-LM8V6ijY4Sw&s",
  },
  {
    id: 4,
    name: "অ্যাঙ্গাস গরু",
    type: "Cow",
    origin: "স্কটল্যান্ড / অস্ট্রেলিয়া",
    weight: "800-1000 kg",
    price: "2.5-3.5 lakh",
    description:
      "উচ্চ মানের মাংসের জন্য বিশ্ববিখ্যাত প্রিমিয়াম বিদেশি গরু।",
    tag: "বিদেশি প্রিমিয়াম",
    image:
      "https://cdn.britannica.com/39/76939-050-B787E5BF/bull-Black-Angus.jpg?w=400&h=300&c=crop",
  },

  // 🐐 GOAT SECTION
  {
    id: 5,
    name: "ব্ল্যাক বেঙ্গল ছাগল",
    type: "Goat",
    origin: "বাংলাদেশ",
    weight: "20-40 kg",
    price: "20-50 thousand",
    description:
      "বাংলাদেশের সবচেয়ে জনপ্রিয় কুরবানির ছাগল। মাংস খুবই সুস্বাদু।",
    tag: "দেশি সেরা",
    image:
      "https://media.dailynayadiganta.com/original_images/Black-Bengal-Goat.jpg",
  },
  {
    id: 6,
    name: "জামুনাপারি ছাগল",
    type: "Goat",
    origin: "ভারত / বাংলাদেশ",
    weight: "40-70 kg",
    price: "40-80 thousand",
    description:
      "বড় আকৃতির সুন্দর ছাগল, কুরবানির জন্য খুব জনপ্রিয়।",
    tag: "প্রিমিয়াম ছাগল",
    image:
      "https://tiimg.tistatic.com/fp/1/008/081/white-live-jamunapari-goat-for-farming-purpose-680.jpg",
  },

  // 🐃 BUFFALO
  {
    id: 7,
    name: "দেশি মহিষ",
    type: "Buffalo",
    origin: "বাংলাদেশ",
    weight: "400-800 kg",
    price: "1.8-3 lakh",
    description:
      "শক্তিশালী দেশি মহিষ, বড় আকারের কুরবানির জন্য ব্যবহৃত হয়।",
    tag: "ভারী পশু",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Water_buffalo_at_Rinca.jpg",
  },

  // 🐑 SHEEP / DUMBA
  {
    id: 8,
    name: "দেশি ভেড়া",
    type: "Sheep",
    origin: "বাংলাদেশ",
    weight: "20-35 kg",
    price: "15-35 thousand",
    description:
      "ছোট আকারের কুরবানির পশু, গ্রামীণ এলাকায় খুব জনপ্রিয়।",
    tag: "ছোট পশু",
    image:
      "https://cdn.othoba.com/images/thumbs/0660584_-204kg.webp",
  },
  {
    id: 9,
    name: "দুম্বা",
    type: "Sheep",
    origin: "দক্ষিণ আফ্রিকা",
    weight: "40-60 kg",
    price: "50-90 thousand",
    description:
      "উন্নত জাতের ভেড়া, দ্রুত বৃদ্ধি পায় এবং মাংস খুব ভালো।",
    tag: "প্রিমিয়াম ভেড়া",
    image:
      "https://d4f7y6nbupj5z.cloudfront.net/wp-content/uploads/2022/10/1dorper.jpg",
  },
];
const TopBreeds = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <Wrapper>
        {/* Section Header */}
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
              জনপ্রিয় জাত
            </span>
          </MotionDiv>

          <MotionDiv variants={staggerItemVariants}>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-primary">
              কুরবানির জন্য সেরা জাত
            </h2>
          </MotionDiv>

          <MotionDiv variants={staggerItemVariants}>
            <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
              দেশ-বিদেশের জনপ্রিয় ৯টি গরুর জাত সম্পর্কে জেনে নিন
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

        {/* Swiper Carousel - AnimalCard style */}
        <div className="-mx-4 px-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
          >
            {topBreeds.map((breed) => (
              <SwiperSlide key={breed.id} className="pb-2" >
                <MotionDiv
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full"
                >
                  <Card className="group h-full overflow-hidden  transition-all duration-300 flex flex-col">
                    {/* Image Section */}
                    <div className="relative h-52 overflow-hidden bg-muted">
                      <Image
                        width={600}
                        height={400}
                        src={breed.image}
                        alt={breed.name}
                        className="w-full h-full object-cover "
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                      <Badge
                        className="absolute top-3 right-3"
                        variant="secondary"
                      >
                        {breed.tag}
                      </Badge>
                      <div className="absolute bottom-3 left-3">
                        <div className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-white" />
                          <h3 className="text-white font-bold text-xl">
                            {breed.name}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg line-clamp-1">
                        {breed.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col space-y-3">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4 shrink-0" />
                          <span className="line-clamp-1">{breed.origin}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Weight className="w-4 h-4 shrink-0" />
                          <span>{breed.weight} কেজি</span>
                        </div>
                        <div className="flex items-center gap-2 pt-1">
                          <DollarSign className="w-4 h-4 text-muted-foreground shrink-0" />
                          <span className="font-bold text-primary text-lg">
                            ৳ {breed.price} লাখ
                          </span>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed pt-2 border-t line-clamp-2">
                        {breed.description}
                      </p>
                    </CardContent>
                  </Card>
                </MotionDiv>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Wrapper>
    </section>
  );
};

export default TopBreeds;
