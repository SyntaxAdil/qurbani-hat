import React from "react";
import {
  MotionDiv,
  staggerContainerVariants,
  staggerItemVariants,
} from "../components/ui/MotionDiv";
import Wrapper from "../utils/Wrapper";

const faqs = [
  {
    id: 1,
    q: "কুরবানির জন্য কোন পশু ভালো?",
    a: "সুস্থ, শক্তিশালী এবং নির্দিষ্ট বয়সের গরু বা ছাগল সবচেয়ে ভালো।",
  },
  {
    id: 2,
    q: "অনলাইনে কি পশু বুক করা যায়?",
    a: "হ্যাঁ, আমাদের প্ল্যাটফর্মে সহজেই অনলাইনে বুক করতে পারবেন।",
  },
  {
    id: 3,
    q: "ডেলিভারি কি দেয়া হয়?",
    a: "হ্যাঁ, ঢাকার ভিতরে এবং বাইরে ডেলিভারি সুবিধা রয়েছে।",
  },
];

const FAQ = () => {
  return (
    <section className="py-20">
      <Wrapper>

        <MotionDiv
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-black">
            সাধারণ প্রশ্ন
          </h2>
        </MotionDiv>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((item) => (
            <MotionDiv
              key={item.id}
              variants={staggerItemVariants}
              className="p-5 border rounded-xl bg-white shadow-sm"
            >
              <h3 className="font-semibold mb-2">
                {item.q}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.a}
              </p>
            </MotionDiv>
          ))}
        </div>

      </Wrapper>
    </section>
  );
};

export default FAQ;