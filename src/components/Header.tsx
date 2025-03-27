import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { cn } from '@/lib/utils';
export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', scrolled ? 'glass py-3 shadow-sm' : 'py-5 bg-transparent')}>
      

      {/* Mobile Menu */}
      <div className={cn('fixed inset-0 top-[60px] z-40 bg-background md:hidden overflow-hidden transition-all duration-300 ease-in-out', mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full')}>
        <div className="container mx-auto px-6 py-8 flex flex-col space-y-8">
          <nav className="flex flex-col space-y-6">
            <a href="#features" className="text-foreground text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
              Features
            </a>
            <a href="#pricing" className="text-foreground text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </a>
            <a href="#faq" className="text-foreground text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </a>
          </nav>
          <div className="flex flex-col space-y-4">
            <Button variant="outline" onClick={() => setMobileMenuOpen(false)}>
              Sign in
            </Button>
            <Button onClick={() => setMobileMenuOpen(false)}>
              Try for free
            </Button>
          </div>
        </div>
      </div>
    </header>;
};