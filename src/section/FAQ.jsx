import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  MotionDiv,
  staggerContainerVariants,
  staggerItemVariants,
} from "../components/ui/MotionDiv";
import Wrapper from "../utils/Wrapper";

const faqs = [
  {
    id: "item-1",
    q: "কুরবানির জন্য কোন পশু ভালো?",
    a: "সুস্থ, শক্তিশালী এবং নির্দিষ্ট বয়সের (গরু ২+ বছর, ছাগল ১+ বছর) পশু কুরবানির জন্য সবচেয়ে ভালো। আমাদের লিস্টে থাকা প্রতিটি পশু ভেটেরিনারি ডাক্তার দ্বারা পরীক্ষিত।",
  },
  {
    id: "item-2",
    q: "অনলাইনে কি পশু বুক করা যায়?",
    a: "হ্যাঁ, আমাদের প্ল্যাটফর্মে সহজেই অনলাইনে পশু বুক করতে পারবেন। বুকিংয়ের জন্য শুধু পশু সিলেক্ট করে অগ্রিম ৫,০০০ টাকা জমা দিতে হবে। বাকি টাকা ডেলিভারির সময় পরিশোধ করতে পারবেন।",
  },
  {
    id: "item-3",
    q: "ডেলিভারি কি দেয়া হয়?",
    a: "হ্যাঁ, ঢাকার ভিতরে এবং বাইরে ডেলিভারি সুবিধা রয়েছে। ঢাকার ভিতরে ফ্রি ডেলিভারি, ঢাকার বাইরে অতিরিক্ত ৫০০-১০০০ টাকা চার্জযোগ্য।",
  },
  {
    id: "item-4",
    q: "পশু দেখে কিনতে পারবো?",
    a: "অবশ্যই! আপনি চাইলে আমাদের ফার্মে এসে লাইভ পশু দেখে কিনতে পারবেন। এছাড়া ভিডিও কলের মাধ্যমেও পশু দেখিয়ে দেওয়া হবে।",
  },
  {
    id: "item-5",
    q: "পশু অসুস্থ হলে কি করবেন?",
    a: "আমরা স্বাস্থ্যবান পশুই সরবরাহ করি। ডেলিভারির সময় নিজেরা চেক করে নিতে পারেন। কোনো সমস্যা পেলে সাথে সাথে রিপ্লেস বা রিফান্ডের ব্যবস্থা আছে।",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <Wrapper>
        {/* -header- */}
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
              FAQ
            </span>
          </MotionDiv>

          <MotionDiv variants={staggerItemVariants}>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-primary">
              সাধারণ জিজ্ঞাসা
            </h2>
          </MotionDiv>

          <MotionDiv variants={staggerItemVariants}>
            <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
              এখানে আপনার সাধারণ প্রশ্নগুলোর উত্তর দেওয়া আছে। আরও কোনো প্রশ্ন
              থাকলে আমাদের সাথে যোগাযোগ করুন।
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

        <MotionDiv
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <MotionDiv
                key={faq.id}
                variants={staggerItemVariants}
                custom={index}
              >
                <AccordionItem
                  value={faq.id}
                  className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </MotionDiv>
            ))}
          </Accordion>
        </MotionDiv>
      </Wrapper>
    </section>
  );
};

export default FAQ;
