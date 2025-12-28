import { Button } from "@/components/ui/button";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  // Determine which nav item is active
  const isActive = (path: string) => {
    return location === path;
  };

  // Get the display name for the current page
  const getNavLinkClass = (path: string) => {
    const baseClass = "text-sm font-medium transition-colors";
    if (isActive(path)) {
      return `${baseClass} text-primary font-bold`;
    }
    return `${baseClass} text-foreground hover:text-primary`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={APP_LOGO} alt={APP_TITLE} className="h-12 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={getNavLinkClass("/")}>
              Home
            </Link>
            <Link href="/about" className={getNavLinkClass("/about")}>
              About
            </Link>
            <Link href="/problem" className={getNavLinkClass("/problem")}>
              The Problem
            </Link>
            <Link href="/our-mission" className={getNavLinkClass("/our-mission")}>
              Our Mission
            </Link>
            <Link href="/impact" className={getNavLinkClass("/impact")}>
              Impact
            </Link>
            <Link href="/about-us" className={getNavLinkClass("/about-us")}>
              About Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <Link href="/" className={`block px-4 py-2 text-sm font-medium rounded-md ${isActive("/") ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`}>
              Home
            </Link>
            <Link href="/about" className={`block px-4 py-2 text-sm font-medium rounded-md ${isActive("/about") ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`}>
              About
            </Link>
            <Link href="/problem" className={`block px-4 py-2 text-sm font-medium rounded-md ${isActive("/problem") ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`}>
              The Problem
            </Link>
            <Link href="/our-mission" className={`block px-4 py-2 text-sm font-medium rounded-md ${isActive("/our-mission") ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`}>
              Our Mission
            </Link>
            <Link href="/impact" className={`block px-4 py-2 text-sm font-medium rounded-md ${isActive("/impact") ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`}>
              Impact
            </Link>
            <Link href="/about-us" className={`block px-4 py-2 text-sm font-medium rounded-md ${isActive("/about-us") ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`}>
              About Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
