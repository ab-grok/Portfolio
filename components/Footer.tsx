"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral border-border border-t px-8 py-12">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-x-[40%] md:flex-row md:justify-center">
          <p className="text-base text-gray-400">
            © {new Date().getFullYear()} Ab.Grok. All rights reserved.
          </p>

          <Button
            onClick={scrollToTop}
            variant="ghost"
            className="hover:bg-accent hover:text-accent-foreground bg-transparent font-normal text-gray-300"
          >
            <ArrowUp className="mr-2 h-5 w-5" strokeWidth={1.5} />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
