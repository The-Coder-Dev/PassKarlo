import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Search, AlertCircle, RotateCcw } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/live";
import {
  SEARCH_INSTITUTES_QUERY,
  GET_FILTER_OPTIONS_QUERY,
  type SanityInstitute,
  type SanityFilterOptions,
} from "@/sanity/lib/queries";
import { InstituteCard } from "@/components/institute/InstituteCard";
import { SearchFilterBar } from "@/components/institute/SearchFilterBar";

export const revalidate = 0;

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
    type?: string;
    city?: string;
    state?: string;
    affiliation?: string;
    featured?: string;
  }>;
};

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const params = await searchParams;
  const q = params.q?.trim() || "";

  if (q) {
    return {
      title: `Search results for "${q}" | PassKarlo`,
      description: `Explore schools and colleges matching "${q}" on PassKarlo.`,
    };
  }

  return {
    title: "Search Schools & Colleges | PassKarlo",
    description: "Find top schools and colleges by city, state, board, or name on PassKarlo.",
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const rawQuery = params.q || "";
  const trimmedQuery = rawQuery.trim();
  const rawType = params.type?.trim().toLowerCase() || "";
  const typeFilter = rawType === "school" || rawType === "college" ? rawType : "";
  const cityFilter = params.city?.trim() || "";
  const stateFilter = params.state?.trim() || "";
  const affiliationFilter = params.affiliation?.trim() || "";
  const featuredFilter = params.featured === "true";

  const hasAnyFilterOrQuery = Boolean(
    trimmedQuery || typeFilter || cityFilter || stateFilter || affiliationFilter || featuredFilter
  );

  // 1. Fetch Dynamic Filter Options (cities, states, affiliations)
  const { data: rawFilterOptionsData } = await sanityFetch({
    query: GET_FILTER_OPTIONS_QUERY,
  });
  const rawFilterOptions = (rawFilterOptionsData || {}) as SanityFilterOptions;

  const cities = (rawFilterOptions.cities || [])
    .filter((c: string | null): c is string => Boolean(c && typeof c === "string" && c.trim()))
    .sort((a: string, b: string) => a.localeCompare(b));

  const states = (rawFilterOptions.states || [])
    .filter((s: string | null): s is string => Boolean(s && typeof s === "string" && s.trim()))
    .sort((a: string, b: string) => a.localeCompare(b));

  const affiliations = (rawFilterOptions.affiliations || [])
    .filter((a: string | null): a is string => Boolean(a && typeof a === "string" && a.trim()))
    .sort((a: string, b: string) => a.localeCompare(b));


  // 2. Prepare GROQ Search Term with Token Wildcards
  let formattedSearchTerm = "";
  if (trimmedQuery) {
    const tokens = trimmedQuery.split(/\s+/).filter(Boolean);
    formattedSearchTerm = tokens.map((token) => `${token}*`).join(" ");
  }

  // 3. Fetch Matching Institutes from Sanity
  let institutes: SanityInstitute[] = [];

  if (hasAnyFilterOrQuery) {
    const { data } = await sanityFetch({
      query: SEARCH_INSTITUTES_QUERY,
      params: {
        searchTerm: formattedSearchTerm,
        instituteType: typeFilter,
        city: cityFilter,
        state: stateFilter,
        affiliation: affiliationFilter,
        featured: featuredFilter,
      },
    });

    institutes = (data || []) as SanityInstitute[];
  }

  // Clear Filter URL (retains q if present)
  const clearFilterUrl = trimmedQuery
    ? `/search?q=${encodeURIComponent(trimmedQuery)}`
    : "/search";

  return (
    <main className="min-h-screen bg-[#F0F4F8] text-slate-900 pb-20 font-sans">
      {/* Search Header Banner */}
      <section className="w-full pt-4 pb-4">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-5">
          <div className="rounded-3xl bg-linear-to-l from-royal-blue to-royal-blue-dark text-white p-8 sm:p-12 shadow-lg space-y-5">
            <div className="flex items-center gap-2">
              <span className="bg-[#002273] text-slate-200 text-xs px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 font-medium tracking-wide">
                <Search className="h-3.5 w-3.5 text-blue-300" />
                PassKarlo Institute Search
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {trimmedQuery ? (
                <>
                  Search results for{" "}
                  <span className="text-blue-200">&ldquo;{trimmedQuery}&rdquo;</span>
                </>
              ) : (
                "Search Schools & Colleges"
              )}
            </h1>

            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl leading-relaxed">
              Find verified schools and colleges by name, city, state, pincode, board affiliation,
              or available facilities.
            </p>

            {/* Search Input Bar */}
            <div className="pt-2 max-w-2xl">
              <form
                method="GET"
                action="/search"
                className="flex items-center gap-2 bg-white rounded-2xl p-2 shadow-md border border-slate-100"
              >
                <div className="flex-1 flex items-center gap-2 px-3">
                  <Search className="h-4 w-4 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    name="q"
                    defaultValue={trimmedQuery}
                    placeholder="Search by city, pincode, school or college name (e.g. BSA College, Mathura, CBSE)..."
                    className="w-full text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none"
                  />
                  {typeFilter && <input type="hidden" name="type" value={typeFilter} />}
                  {cityFilter && <input type="hidden" name="city" value={cityFilter} />}
                  {stateFilter && <input type="hidden" name="state" value={stateFilter} />}
                  {affiliationFilter && (
                    <input type="hidden" name="affiliation" value={affiliationFilter} />
                  )}
                  {featuredFilter && <input type="hidden" name="featured" value="true" />}
                </div>
                <button
                  type="submit"
                  className="bg-royal-blue hover:bg-royal-blue-dark text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl transition-all shadow-sm shrink-0 cursor-pointer"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Main Filter & Results Section */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-5 pt-6 space-y-6">
        {/* Interactive Filter Control Bar */}
        <SearchFilterBar
          cities={cities}
          states={states}
          affiliations={affiliations}
          currentParams={{
            q: trimmedQuery,
            type: typeFilter,
            city: cityFilter,
            state: stateFilter,
            affiliation: affiliationFilter,
            featured: featuredFilter,
          }}
          totalResults={institutes.length}
        />

        {/* Display Logic */}
        {!hasAnyFilterOrQuery ? (
          /* Missing / Empty Search Prompt */
          <div className="p-12 bg-white border border-slate-200/80 rounded-3xl text-center space-y-4 shadow-xs max-w-2xl mx-auto my-8">
            <div className="h-14 w-14 rounded-2xl bg-blue-50 text-royal-blue flex items-center justify-center mx-auto border border-blue-100">
              <Search className="h-7 w-7" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-extrabold text-slate-900">
                Discover Institutes Across India
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Type an institute name, city, state, board affiliation, or filter by your preferred
                location above.
              </p>
            </div>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs text-slate-500 font-medium">Popular searches:</span>
              {["Mathura", "CBSE", "BSA College", "Uttar Pradesh"].map((example) => (
                <Link
                  key={example}
                  href={`/search?q=${encodeURIComponent(example)}`}
                  className="text-xs font-bold text-royal-blue bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-lg border border-blue-100 transition-colors"
                >
                  {example}
                </Link>
              ))}
            </div>
          </div>
        ) : institutes.length > 0 ? (
          /* Results Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutes.map((institute) => (
              <InstituteCard key={institute._id} institute={institute} />
            ))}
          </div>
        ) : (
          /* Empty Search Results State */
          <div className="p-10 bg-white border border-slate-200/80 rounded-3xl text-center space-y-5 shadow-xs max-w-2xl mx-auto my-8">
            <div className="h-14 w-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-100">
              <AlertCircle className="h-7 w-7" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-extrabold text-slate-900">
                {trimmedQuery
                  ? `No institutes found for "${trimmedQuery}"`
                  : "No institutes match your selected filters"}
              </h2>
              <div className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed text-left bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <p className="font-semibold text-slate-800 mb-2">Try adjusting your search:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Check spelling or try a shorter search keyword</li>
                  <li>Try searching for a broader city or state</li>
                  <li>Clear specific filters like affiliation or featured status</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href={clearFilterUrl}
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-royal-blue hover:bg-royal-blue-dark text-white px-5 py-2.5 rounded-xl transition-all shadow-xs"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Clear Active Filters
              </Link>
              <Link
                href="/schools"
                className="text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2.5 rounded-xl transition-colors"
              >
                Browse All Schools
              </Link>
              <Link
                href="/colleges"
                className="text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2.5 rounded-xl transition-colors"
              >
                Browse All Colleges
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
