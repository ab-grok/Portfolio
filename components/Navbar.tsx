"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Portfolio
          </button>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink asChild>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`px-6 py-3 text-base font-normal transition-all cursor-pointer rounded-md ${
                        activeSection === item.id
                          ? "text-primary bg-accent"
                          : "text-gray-200 hover:text-primary hover:bg-accent/50"
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
            className="md:hidden text-foreground hover:text-primary transition-colors"
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
          <NavigationMenu className="md:hidden mt-6 bg-card rounded-lg p-6">
            <NavigationMenuList className="flex flex-col gap-2 w-full">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id} className="w-full">
                  <NavigationMenuLink asChild>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-6 py-4 text-base font-normal transition-all cursor-pointer rounded-md ${
                        activeSection === item.id
                          ? "text-primary bg-accent"
                          : "text-gray-200 hover:text-primary hover:bg-accent/50"
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
