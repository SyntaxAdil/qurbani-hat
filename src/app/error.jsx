"use client";

import { useEffect } from "react";

import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";
import Wrapper from "../utils/Wrapper";
import { Button } from "../components/ui/button";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[calc(100vh-72px)] flex items-center bg-primary/3">
      <Wrapper>
        <div className="flex flex-col items-center text-center py-20 max-w-md mx-auto">

          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mb-6">
            <AlertTriangle className="w-10 h-10 text-red-500" />
          </div>

          <p className="text-sm font-semibold tracking-widest uppercase text-red-400 mb-2">
            কিছু একটা ভুল হয়েছে
          </p>

          <h1 className="text-3xl font-black text-foreground mb-3 leading-tight">
            তথ্য লোড করা যাচ্ছে না
          </h1>

          <p className="text-muted-foreground text-sm leading-relaxed mb-2">
            সার্ভারের সাথে সংযোগে সমস্যা হচ্ছে। একটু পরে আবার চেষ্টা করুন।
          </p>

          {/* Error message */}
          {error?.message && (
            <div className="w-full mt-2 mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-100 text-xs text-red-500 font-mono text-left break-all">
              {error.message}
            </div>
          )}

          {/* Decorative line */}
          <div className="flex items-center gap-2 my-6">
            <div className="h-px w-10 rounded-full bg-primary/20" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
            <div className="h-px w-10 rounded-full bg-primary/20" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button
              onClick={reset}
              className="flex-1 h-11 rounded-xl font-bold bg-primary hover:bg-primary/90 text-white gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              আবার চেষ্টা করুন
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex-1 h-11 rounded-xl font-bold border-2 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all gap-2"
            >
              <Link href="/">
                <Home className="w-4 h-4" />
                হোমে ফিরুন
              </Link>
            </Button>
          </div>

        </div>
      </Wrapper>
    </main>
  );
}