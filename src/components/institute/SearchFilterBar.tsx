"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Filter,
  X,
  RotateCcw,
  School,
  GraduationCap,
  SlidersHorizontal,
  Star,
  MapPin,
  Building2,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchFilterBarProps {
  cities: string[];
  states: string[];
  affiliations: string[];
  currentParams: {
    q: string;
    type: string;
    city: string;
    state: string;
    affiliation: string;
    featured: boolean;
  };
  totalResults: number;
}

export function SearchFilterBar({
  cities,
  states,
  affiliations,
  currentParams,
  totalResults,
}: SearchFilterBarProps) {
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const { q, type, city, state, affiliation, featured } = currentParams;

  const hasActiveFilters = Boolean(type || city || state || affiliation || featured);

  const activeFilterCount = [type, city, state, affiliation, featured ? "featured" : ""].filter(
    Boolean
  ).length;

  const updateFilters = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams();

    if (q) params.set("q", q);
    if (type) params.set("type", type);
    if (city) params.set("city", city);
    if (state) params.set("state", state);
    if (affiliation) params.set("affiliation", affiliation);
    if (featured) params.set("featured", "true");

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === "") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    const queryString = params.toString();
    router.push(queryString ? `/search?${queryString}` : "/search");
  };

  const handleClearFilters = () => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    const queryString = params.toString();
    router.push(queryString ? `/search?${queryString}` : "/search");
  };

  return (
    <div className="w-full space-y-4">
      {/* Top Type Tab Bar & Mobile Toggle */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => updateFilters({ type: null })}
            className={cn(
              "text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer",
              !type
                ? "bg-royal-blue text-white shadow-xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            All Categories
          </button>

          <button
            type="button"
            onClick={() => updateFilters({ type: "school" })}
            className={cn(
              "text-xs font-bold px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer",
              type === "school"
                ? "bg-royal-blue text-white shadow-xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            <School className="h-3.5 w-3.5" />
            Schools
          </button>

          <button
            type="button"
            onClick={() => updateFilters({ type: "college" })}
            className={cn(
              "text-xs font-bold px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer",
              type === "college"
                ? "bg-royal-blue text-white shadow-xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            <GraduationCap className="h-3.5 w-3.5" />
            Colleges
          </button>
        </div>

        {/* Action Controls: Mobile Expand Toggle & Count */}
        <div className="flex items-center justify-between md:justify-end gap-3 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100">
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer"
          >
            <SlidersHorizontal className="h-3.5 w-3.5 text-royal-blue" />
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span className="bg-royal-blue text-white text-[10px] h-4 w-4 rounded-full flex items-center justify-center font-bold">
                {activeFilterCount}
              </span>
            )}
          </button>

          <span className="text-xs font-semibold text-slate-600">
            Showing <strong className="text-slate-900">{totalResults}</strong>{" "}
            {totalResults === 1 ? "institute" : "institutes"}
          </span>
        </div>
      </div>

      {/* Filter Controls Panel (Visible on Desktop or when Mobile Toggle is open) */}
      <div
        className={cn(
          "bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-4",
          isMobileOpen ? "block" : "hidden md:block"
        )}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2 text-slate-800 font-extrabold text-sm tracking-tight">
            <Filter className="h-4 w-4 text-royal-blue" />
            <span>Filter Institutes</span>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleClearFilters}
              className="text-xs font-bold text-slate-500 hover:text-red-600 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Clear Filters</span>
            </button>
          )}
        </div>

        {/* Filter Dropdowns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* City Filter */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1">
              <MapPin className="h-3 w-3 text-royal-blue" /> City
            </label>
            <select
              value={city}
              onChange={(e) => updateFilters({ city: e.target.value || null })}
              className="w-full text-xs font-medium bg-slate-50 text-slate-800 border border-slate-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-royal-blue/20 cursor-pointer"
            >
              <option value="">All Cities ({cities.length})</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* State Filter */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1">
              <Building2 className="h-3 w-3 text-royal-blue" /> State
            </label>
            <select
              value={state}
              onChange={(e) => updateFilters({ state: e.target.value || null })}
              className="w-full text-xs font-medium bg-slate-50 text-slate-800 border border-slate-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-royal-blue/20 cursor-pointer"
            >
              <option value="">All States ({states.length})</option>
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Affiliation / Board Filter */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1">
              <Award className="h-3 w-3 text-royal-blue" /> Affiliation / Board
            </label>
            <select
              value={affiliation}
              onChange={(e) => updateFilters({ affiliation: e.target.value || null })}
              className="w-full text-xs font-medium bg-slate-50 text-slate-800 border border-slate-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-royal-blue/20 cursor-pointer"
            >
              <option value="">All Affiliations ({affiliations.length})</option>
              {affiliations.map((aff) => (
                <option key={aff} value={aff}>
                  {aff}
                </option>
              ))}
            </select>
          </div>

          {/* Featured Only Filter */}
          <div className="space-y-1.5 flex flex-col justify-end">
            <label
              className={cn(
                "flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700 cursor-pointer transition-colors",
                featured ? "border-amber-300 bg-amber-50/60 text-amber-900" : "hover:bg-slate-100"
              )}
            >
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => updateFilters({ featured: e.target.checked ? "true" : null })}
                className="h-4 w-4 rounded text-royal-blue focus:ring-royal-blue cursor-pointer"
              />
              <Star
                className={cn(
                  "h-4 w-4",
                  featured ? "fill-amber-500 text-amber-500" : "text-slate-400"
                )}
              />
              <span>Featured Only</span>
            </label>
          </div>
        </div>
      </div>

      {/* Active Filter Badges / Chips */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs font-bold text-slate-500 mr-1">Active filters:</span>

          {type && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold bg-blue-50 text-royal-blue border border-blue-200 px-3 py-1 rounded-xl">
              Category: {type === "school" ? "Schools" : "Colleges"}
              <button
                type="button"
                onClick={() => updateFilters({ type: null })}
                className="hover:text-blue-900 cursor-pointer ml-1"
                aria-label="Remove category filter"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </span>
          )}

          {city && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 rounded-xl">
              City: {city}
              <button
                type="button"
                onClick={() => updateFilters({ city: null })}
                className="hover:text-slate-900 cursor-pointer ml-1"
                aria-label="Remove city filter"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </span>
          )}

          {state && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 rounded-xl">
              State: {state}
              <button
                type="button"
                onClick={() => updateFilters({ state: null })}
                className="hover:text-slate-900 cursor-pointer ml-1"
                aria-label="Remove state filter"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </span>
          )}

          {affiliation && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 rounded-xl">
              Affiliation: {affiliation}
              <button
                type="button"
                onClick={() => updateFilters({ affiliation: null })}
                className="hover:text-slate-900 cursor-pointer ml-1"
                aria-label="Remove affiliation filter"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </span>
          )}

          {featured && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-xl">
              Featured Only
              <button
                type="button"
                onClick={() => updateFilters({ featured: null })}
                className="hover:text-amber-950 cursor-pointer ml-1"
                aria-label="Remove featured filter"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </span>
          )}

          <button
            type="button"
            onClick={handleClearFilters}
            className="text-xs font-bold text-slate-500 hover:text-royal-blue underline ml-2 cursor-pointer"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
}
