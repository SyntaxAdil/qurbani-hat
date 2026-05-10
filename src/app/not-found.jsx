import Link from "next/link";

import { FileQuestion, Home, Search } from "lucide-react";
import Wrapper from "../utils/Wrapper";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-72px)] flex items-center bg-primary/3">
      <Wrapper>
        <div className="flex flex-col items-center text-center py-20 max-w-lg mx-auto">

          {/* Big 404 */}
          <div className="relative mb-6">
            <p className="text-[9rem] font-black text-primary/8 leading-none select-none">
              ৪০৪
            </p>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center shadow-sm">
                <FileQuestion className="w-10 h-10 text-primary" />
              </div>
            </div>
          </div>

          {/* Text */}
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full text-primary bg-primary/10 mb-4">
            পেজ পাওয়া যায়নি
          </span>

          <h1 className="text-3xl font-black text-primary mb-3 leading-tight">
            এই পেজটি বিদ্যমান নেই
          </h1>

          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-2">
            আপনি যে লিংকে এসেছেন সেটি হয়তো ভুল, মুছে ফেলা হয়েছে অথবা পরিবর্তন করা হয়েছে।
          </p>

          {/* Decorative line */}
          <div className="flex items-center gap-2 my-6">
            <div className="h-px w-10 rounded-full bg-primary/25" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <div className="h-px w-10 rounded-full bg-primary/25" />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
            <Button
              asChild
              className="flex-1 h-11 rounded-xl font-bold bg-primary hover:bg-primary/90 text-white gap-2"
            >
              <Link href="/">
                <Home className="w-4 h-4" />
                হোমে যান
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex-1 h-11 rounded-xl font-bold border-2 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all gap-2"
            >
              <Link href="/animals">
                <Search className="w-4 h-4" />
                পশু খুঁজুন
              </Link>
            </Button>
          </div>

        </div>
      </Wrapper>
    </main>
  );
}