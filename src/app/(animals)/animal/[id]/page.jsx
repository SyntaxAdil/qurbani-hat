import Image from "next/image";
import Link from "next/link";

import {
  MapPin,
  Weight,
  Calendar,
  Tag,
  ChevronLeft,
  Phone,
  MessageCircle,
  ShieldCheck,
  Beef,
  Award,
  Info,
  Badge,
} from "lucide-react";

import { Button } from "../../../../components/ui/button";
import Wrapper from "../../../../utils/Wrapper";
import Share from "../../../../utils/Share";
import { getAnimalsById } from "../../../../lib/animal";

import {
  MotionDiv,
  fadeInLeftVariants,
  fadeInRightVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "../../../../components/ui/MotionDiv";

import NotFound from "./../../../../components/animal/NotFound";

const InfoRow = ({ icon: Icon, label, value }) => (
  <MotionDiv
    variants={staggerItemVariants}
    className="flex items-center justify-between py-3 border-b border-primary/8 last:border-0"
  >
    <div className="flex items-center gap-2 text-muted-foreground text-sm">
      <Icon className="w-4 h-4 text-primary/60" />
      {label}
    </div>

    <span className="font-semibold text-sm text-foreground">{value}</span>
  </MotionDiv>
);

const FeaturePill = ({ text }) => (
  <MotionDiv
    variants={staggerItemVariants}
    whileHover={{ scale: 1.05 }}
    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-primary/8 text-primary border border-primary/15"
  >
    <ShieldCheck className="w-3 h-3" />
    {text}
  </MotionDiv>
);

export async function generateMetadata({ params }) {
  const { id } = await params;

  const animal = await getAnimalsById(id);
  return {
    title: animal.name,
    description: animal.description,
    author:process.env.NEXT_PUBLIC_BASE_URL
  };
}

export default async function AnimalDetailPage({ params }) {
  const { id } = await params;
  const animal = await getAnimalsById(id);
  if (!animal) return NotFound();

  const features = [
    "স্বাস্থ্য পরীক্ষিত",
    "টিকা দেওয়া",
    "বিশ্বস্ত খামার",
    "কুরবানি উপযুক্ত",
  ];

  return (
    <main className="min-h-screen bg-primary/3 pb-20 overflow-hidden">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-primary/10">
        <Wrapper>
          <MotionDiv
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 py-3 text-sm text-muted-foreground"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              হোম
            </Link>

            <span>/</span>

            <Link
              href="/animals"
              className="hover:text-primary transition-colors"
            >
              সব পশু
            </Link>

            <span>/</span>

            <span className="text-primary font-medium truncate">
              {animal.name}
            </span>
          </MotionDiv>
        </Wrapper>
      </div>

      <Wrapper>
        <div className="py-8">
          {/* Back button */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/animals"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              পশুর তালিকায় ফিরুন
            </Link>
          </MotionDiv>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* LEFT */}
            <MotionDiv
              variants={fadeInLeftVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-muted shadow-sm border border-primary/10">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/90 text-primary border border-primary/20 backdrop-blur-md">
                    {animal.category}
                  </span>
                </div>
              </div>

              {/* Features */}
              <MotionDiv
                variants={staggerContainerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-2 pt-1"
              >
                {features.map((f) => (
                  <FeaturePill key={f} text={f} />
                ))}
              </MotionDiv>

              {/* Share */}
              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Share animal={animal} />
              </MotionDiv>
            </MotionDiv>

            {/* RIGHT */}
            <MotionDiv
              variants={fadeInRightVariants}
              initial="hidden"
              animate="visible"
              className="space-y-5"
            >
              {/* Title */}
              <MotionDiv
                variants={staggerContainerVariants}
                initial="hidden"
                animate="visible"
              >
                <MotionDiv
                  variants={staggerItemVariants}
                  className="flex items-start justify-between gap-3 mb-2"
                >
                  <h1 className="text-3xl md:text-4xl font-black text-primary leading-tight">
                    {animal.name}
                  </h1>

                  <Badge
                    variant="outline"
                    className="border-primary/30 text-primary text-xs shrink-0 mt-1"
                  >
                    #{animal.id}
                  </Badge>
                </MotionDiv>

                <MotionDiv
                  variants={staggerItemVariants}
                  className="flex items-baseline gap-2 mb-3"
                >
                  <span className="text-4xl font-black text-primary">
                    ৳ {animal.price.toLocaleString("bn-BD")}
                  </span>
                </MotionDiv>

                <MotionDiv
                  variants={staggerItemVariants}
                  className="flex items-center gap-2"
                >
                  <div className="h-px w-10 rounded-full bg-primary/30" />
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <div className="h-px w-10 rounded-full bg-primary/30" />
                </MotionDiv>
              </MotionDiv>

              {/* Description */}
              <MotionDiv
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {animal.description}
                </p>
              </MotionDiv>

              {/* Info Card */}
              <MotionDiv
                variants={staggerContainerVariants}
                initial="hidden"
                animate="visible"
                className="rounded-2xl border border-primary/15 bg-white p-5 shadow-sm"
              >
                <MotionDiv
                  variants={staggerItemVariants}
                  className="text-xs font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-1.5"
                >
                  <Info className="w-3.5 h-3.5" />
                  পশুর বিবরণ
                </MotionDiv>

                <InfoRow icon={Beef} label="জাত" value={animal.breed} />

                <InfoRow
                  icon={Weight}
                  label="ওজন"
                  value={`${animal.weight} কেজি`}
                />

                <InfoRow
                  icon={Calendar}
                  label="বয়স"
                  value={`${animal.age} বছর`}
                />

                <InfoRow
                  icon={MapPin}
                  label="অবস্থান"
                  value={animal.location}
                />

                <InfoRow icon={Tag} label="ক্যাটাগরি" value={animal.category} />

                <InfoRow icon={Award} label="ধরন" value={animal.type} />
              </MotionDiv>

              {/* Buttons */}
              <MotionDiv
                variants={staggerContainerVariants}
                initial="hidden"
                animate="visible"
                className="pt-1"
              >
                <MotionDiv variants={staggerItemVariants}>
                  <a
                    href="tel:+8801406490781"
                    className="inline-block w-full mb-4"
                  >
                    <Button className="w-full h-12 rounded-xl font-bold text-base bg-primary hover:bg-primary/90 text-white shadow-sm">
                      <Phone className="w-4 h-4 mr-2" />
                      যোগাযোগ করুন
                    </Button>
                  </a>
                </MotionDiv>

                <MotionDiv variants={staggerItemVariants}>
                  <a
                    href="https://wa.me/8801406490781"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full h-12 rounded-xl font-bold text-base border-2 border-primary/25 text-primary hover:bg-primary hover:text-white transition-all"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp এ বার্তা দিন
                    </Button>
                  </a>
                </MotionDiv>
              </MotionDiv>

              {/* Trust Note */}
              <MotionDiv
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 rounded-xl bg-primary/5 border border-primary/10 px-4 py-3"
              >
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />

                <p className="text-xs text-muted-foreground leading-relaxed">
                  এই পশুটি আমাদের বিশেষজ্ঞ দল কর্তৃক{" "}
                  <span className="font-semibold text-primary">যাচাইকৃত</span>{" "}
                  এবং সম্পূর্ণ স্বাস্থ্যবান।
                </p>
              </MotionDiv>
            </MotionDiv>
          </div>
        </div>
      </Wrapper>
    </main>
  );
}
