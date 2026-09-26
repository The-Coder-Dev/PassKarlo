"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { openAddInstituteModal } from "@/components/modals/AddInstituteModal";

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
}

export function MobileMenu({ navItems }: MobileMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenAddInstitute = () => {
    setMobileMenuOpen(false);
    openAddInstituteModal();
  };

  return (
    <>
      <div className="flex lg:hidden items-center gap-3">
        <button
          type="button"
          onClick={handleOpenAddInstitute}
          className="text-xs font-bold text-royal-blue hover:underline"
        >
          Add Institute
        </button>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden absolute top-[calc(100%+8px)] left-0 right-0 bg-white rounded-2xl border border-slate-100/90 p-4 space-y-3 shadow-xl z-50"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-royal-blue rounded-xl transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="pt-2.5 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="https://books.passkarlo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full bg-royal-blue hover:bg-royal-blue-dark text-white font-bold rounded-xl py-3 justify-center shadow-xs">
                  Donate Book
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

