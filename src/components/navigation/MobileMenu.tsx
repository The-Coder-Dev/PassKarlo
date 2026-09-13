"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
      <div className="flex md:hidden items-center gap-3">
        <button
          type="button"
          onClick={handleOpenAddInstitute}
          className="text-xs font-bold text-[#003096]"
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

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white mt-2 rounded-2xl border border-slate-100 p-4 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#003096] rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="https://books.passkarlo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-[#003096] hover:bg-[#002266] text-white font-bold rounded-xl py-3 justify-center">
                Donate Book
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
