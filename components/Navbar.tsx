"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import logoLetters from "../public/logo_letters.png";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-background/50 border-border fixed top-0 right-0 left-0 z-50 border-b shadow-md shadow-black backdrop-blur-md">
      <nav className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 sm:space-x-10">
            <Image
              src={logoLetters}
              alt="Logo Letters"
              height={40}
              className="h-auto w-auto"
            />

            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground/80 hover:text-primary flex cursor-pointer items-center text-2xl font-bold transition-colors"
            >
              Sule Abraham
            </button>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink asChild>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`cursor-pointer rounded-md px-6 py-3 text-base font-normal transition-all ${
                        activeSection === item.id
                          ? "text-primary bg-accent"
                          : "hover:text-primary hover:bg-accent/50 text-gray-200"
                      }`}
                    >
                      {item.label}
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground hover:text-primary transition-colors md:hidden"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-8 w-8" strokeWidth={1.5} />
            ) : (
              <Menu className="h-8 w-8" strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <NavigationMenu className="bg-card mt-6 rounded-lg p-6 md:hidden">
            <NavigationMenuList className="flex w-full flex-col gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id} className="w-full">
                  <NavigationMenuLink asChild>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full cursor-pointer ${activeSection != item.id && "active:translate-y-2 active:scale-80"} rounded-md px-6 py-4 text-left text-base font-normal transition-all ${
                        activeSection === item.id
                          ? "text-primary bg-accent"
                          : "hover:text-primary hover:bg-accent/50 text-gray-200"
                      }`}
                    >
                      {item.label}
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        )}
      </nav>
    </header>
  );
}
