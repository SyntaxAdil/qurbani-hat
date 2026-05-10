import Link from "next/link";

import { SearchX } from "lucide-react";
import Wrapper from "../../utils/Wrapper";
import { Button } from "../ui/button";

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-72px)] flex items-center bg-primary/3">
      <Wrapper>
        <div className="flex flex-col items-center text-center py-20 max-w-md mx-auto">

          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
            <SearchX className="w-10 h-10 text-primary" />
          </div>

          {/* 404 */}
          <p className="text-sm font-semibold tracking-widest uppercase text-primary/60 mb-2">
            ৪০৪ — পাওয়া যায়নি
          </p>

          <h1 className="text-3xl font-black text-primary mb-3 leading-tight">
            পশুটি খুঁজে পাওয়া যাচ্ছে না
          </h1>

          <p className="text-muted-foreground text-sm leading-relaxed mb-2">
            আপনি যে পশুটি খুঁজছেন সেটি হয়তো বিক্রি হয়ে গেছে অথবা তালিকা থেকে সরিয়ে নেওয়া হয়েছে।
          </p>

          {/* Decorative line */}
          <div className="flex items-center gap-2 my-6">
            <div className="h-px w-10 rounded-full bg-primary/20" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
            <div className="h-px w-10 rounded-full bg-primary/20" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button
              asChild
              className="flex-1 h-11 rounded-xl font-bold bg-primary hover:bg-primary/90 text-white"
            >
              <Link href="/animals">সব পশু দেখুন</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex-1 h-11 rounded-xl font-bold border-2 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all"
            >
              <Link href="/">হোমে ফিরুন</Link>
            </Button>
          </div>

        </div>
      </Wrapper>
    </main>
  );
}