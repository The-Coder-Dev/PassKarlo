import React from 'react'
import Link from 'next/link'
import { School, Search } from 'lucide-react'
import { sanityFetch } from '@/sanity/lib/live'
import { SCHOOLS_QUERY, type SanityInstitute } from '@/sanity/lib/queries'
import { InstituteCard } from '@/components/institute/InstituteCard'

export const revalidate = 0

export default async function SchoolsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; city?: string }>
}) {
  const params = await searchParams
  const queryParam = params.q?.toLowerCase().trim() || ''
  const cityParam = params.city?.toLowerCase().trim() || ''

  const { data } = await sanityFetch({
    query: SCHOOLS_QUERY,
  })

  let schools = (data || []) as SanityInstitute[]

  if (queryParam) {
    schools = schools.filter((s) => {
      const nameMatch = s.name?.toLowerCase().includes(queryParam)
      const cityMatch = s.location?.city?.toLowerCase().includes(queryParam)
      const stateMatch = s.location?.state?.toLowerCase().includes(queryParam)
      const affMatch = s.academicInfo?.affiliation?.toLowerCase().includes(queryParam)
      return nameMatch || cityMatch || stateMatch || affMatch
    })
  }

  if (cityParam) {
    schools = schools.filter((s) => s.location?.city?.toLowerCase().includes(cityParam))
  }

  return (
    <main className="min-h-screen bg-[#F0F4F8] text-slate-900 pb-20 font-sans">
      {/* Hero Header Section matching Homepage Deep Royal Blue Theme */}
      <section className="w-full pt-4 pb-4">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-5">
          <div className="rounded-3xl bg-linear-to-l from-royal-blue to-royal-blue-dark text-white p-8 sm:p-12 shadow-lg space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-[#002273] text-slate-200 text-xs px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 font-medium tracking-wide">
                <School className="h-3.5 w-3.5 text-blue-300" />
                PassKarlo School Discovery
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Discover Top Schools Across India
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl leading-relaxed">
              Browse verified CBSE, ICSE, State Board, and International schools. Compare affiliations, locations, and access direct official admission links.
            </p>

            {/* Search Bar */}
            <div className="pt-2 max-w-2xl">
              <form method="GET" action="/schools" className="flex items-center gap-2 bg-white rounded-2xl p-2 shadow-md border border-slate-100">
                <div className="flex-1 flex items-center gap-2 px-3">
                  <Search className="h-4 w-4 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    name="q"
                    defaultValue={params.q || ''}
                    placeholder="Search by school name, city, state, or board (e.g. CBSE)..."
                    className="w-full text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-royal-blue hover:bg-royal-blue-dark text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl transition-all shadow-sm shrink-0"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-5 pt-8">
        <div className="flex items-center justify-between w-full mb-6">
          <div className="flex items-center justify-between w-full gap-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#002D80]">
              Published Schools
            </h2>
            <span className="text-xs font-bold bg-slate-200/80 text-slate-700 px-3 py-1 rounded-full">
              {schools.length} {schools.length === 1 ? 'school' : 'schools'} found
            </span>
          </div>
        </div>

        {schools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schools.map((school) => (
              <InstituteCard key={school._id} institute={school} />
            ))}
          </div>
        ) : (
          <div className="p-10 bg-white border border-slate-200/80 rounded-3xl text-center space-y-4 shadow-xs max-w-2xl mx-auto my-8">
            <div className="h-12 w-12 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center mx-auto">
              <School className="h-6 w-6 text-royal-blue" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">No schools matching your search</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                {queryParam
                  ? `No school documents match "${queryParam}". Try searching for another city or school name.`
                  : 'No published school records were found in Sanity Studio. Create and publish a school document in Sanity Studio to see it listed here.'}
              </p>
            </div>
            {queryParam && (
              <Link
                href="/schools"
                className="inline-block text-xs font-bold text-royal-blue hover:text-royal-blue-dark underline pt-2"
              >
                Clear Search Filter
              </Link>
            )}
          </div>
        )}
      </section>
    </main>
  )
}
