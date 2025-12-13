"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-8 bg-neutral border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-gray-400 text-base">
            © {new Date().getFullYear()} Software Engineer Portfolio. All rights
            reserved.
          </p>

          <Button
            onClick={scrollToTop}
            variant="ghost"
            className="bg-transparent text-gray-300 hover:bg-accent hover:text-accent-foreground font-normal"
          >
            <ArrowUp className="mr-2 h-5 w-5" strokeWidth={1.5} />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
