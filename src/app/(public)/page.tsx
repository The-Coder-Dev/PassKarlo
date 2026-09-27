import { Hero } from "@/components/home/Hero";
import { SearchBar } from "@/components/home/SearchBar";
import { ScholarshipCard, sampleScholarships } from "@/components/home/ScholarshipCard";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { CareerCard, sampleCareerCategories } from "@/components/career/CareerCard";
import { AddInstituteModal, AddInstituteButton } from "@/components/modals/AddInstituteModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Compass, ArrowRight, Building2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F0F4F8] font-sans text-slate-900 overflow-x-hidden">
      <main className="w-full flex-1">
        <section className="w-full relative">
          <Hero />
          <SearchBar />
        </section>

        {/* 3. Four Main Homepage Feature Cards (Server Component) */}
        <section id="scholarships" className="w-full pt-10 pb-12">
          <div className="w-full max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sampleScholarships.map((item) => (
                <ScholarshipCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* 4. Key Platform Benefits Grid (Server Component) */}
        <section id="features" className="w-full py-8">
          <div className="w-full max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
            <FeaturesGrid />
          </div>
        </section>

        {/* 5. Popular Disciplines & Career Guidance (Server Component) */}
        <section id="careers" className="w-full py-12">
          <div className="w-full max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-white p-8 sm:p-12 border border-slate-200/80 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs uppercase font-extrabold tracking-wider">
                      <Compass className="h-3.5 w-3.5 mr-1 inline text-royal-blue" /> Career Guidance
                    </Badge>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002D80] tracking-tight">
                  e  Explore Popular Carer
                  </h2>
                  <p className="text-sm text-slate-500 mt-1 max-w-xl">
                    Find the right academic stream based on your interests, salary prospects, and career goals.
                  </p>
                </div>
                <Button variant="ghost" className="font-bold text-royal-blue hover:text-[#001F5C] gap-1 self-start md:self-auto">
                  Explore All Career &rarr;
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleCareerCategories.map((category) => (
                  <CareerCard key={category.id} category={category} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Institutional Onboarding Callout Banner (Server Component with Client Trigger) */}
        <section className="w-full py-12">
          <div className="w-full max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-royal-blue text-white p-8 sm:p-12 relative overflow-hidden shadow-xl border border-[#002275]">
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="space-y-3 max-w-2xl text-center lg:text-left">
                  <Badge variant="secondary" className="text-xs font-bold px-3 py-1 bg-blue-900/60 text-blue-200 border-0">
                    <Building2 className="h-3.5 w-3.5 mr-1 inline text-blue-300" /> For School & College Administrators
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                    Represent an Institute? Get Listed on PassKarlo.
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                    Join verified educational institutions connecting with prospective students across Uttar Pradesh and India. Admin-managed onboarding.
                  </p>
                </div>
                <div className="shrink-0">
                  <AddInstituteButton
                    className="bg-white text-royal-blue hover:bg-slate-100 font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all"
                  >
                    Learn How to Add Institute
                    <ArrowRight className="h-4 w-4 ml-1 inline" />
                  </AddInstituteButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 8. Add Your Institute Informational Modal (Client Component Boundary) */}
      <AddInstituteModal />

    </div>
  );
}
