"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  defaultValue?: string;
}

export function SearchBar({ defaultValue = "" }: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  return (
    <div className="w-full relative -mt-14 sm:-mt-16 z-30 px-4 sm:px-6">
      <div className="w-full max-w-[960px] mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100/90 space-y-4">
          
          {/* Card Title matching Figma */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002D80] tracking-tight">
            Find Best School or Institute
          </h2>

          {/* Search Bar Input Container matching Figma */}
          <form
            action="/search"
            method="GET"
            onSubmit={handleSubmit}
            className="bg-[#EEF2F9] rounded-2xl p-2 flex flex-col sm:flex-row items-center gap-2 border border-slate-200/60"
          >
            <div className="flex items-center gap-3 w-full flex-1 px-3">
              <Search className="h-5 w-5 text-[#5B73A0] shrink-0" />
              <input
                type="text"
                name="q"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by City and Pincode (e.g., Mathura, 281001)"
                className="w-full h-11 bg-transparent text-[#1E293B] placeholder:text-[#889BBD] text-sm sm:text-base font-normal focus:outline-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full sm:w-auto bg-[#002D80] hover:bg-[#001F5C] text-white px-8 py-3 h-11 rounded-xl font-bold text-sm transition-all shrink-0 shadow-sm cursor-pointer"
            >
              Search
            </Button>
          </form>

        </div>
      </div>
    </div>
  );
}

