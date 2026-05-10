"use client";

import { Share2 } from "lucide-react";

const Share = ({animal}) => {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: animal.name,
        text: `${animal.name} - কুরবানির জন্য সুন্দর পশু দেখুন`,
        url: window.location.href,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
    >
      <Share2 className="w-3.5 h-3.5" />
      বন্ধুদের সাথে শেয়ার করুন
    </button>
  );
};

export default Share;
