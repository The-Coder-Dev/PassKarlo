import React from 'react'
import Link from 'next/link'
import { UserCheck, Search } from 'lucide-react'
import { sanityFetch } from '@/sanity/lib/live'
import { TEACHERS_QUERY, type SanityTeacher } from '@/sanity/lib/queries'
import { TeacherCard } from '@/components/teacher/TeacherCard'

export const revalidate = 0

export default async function TeachersPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; subject?: string }>
}) {
  const params = await searchParams
  const queryParam = params.q?.toLowerCase().trim() || ''

  const { data } = await sanityFetch({
    query: TEACHERS_QUERY,
  })

  let teachers = (data || []) as SanityTeacher[]

  if (queryParam) {
    teachers = teachers.filter((t) => {
      const nameMatch = t.name?.toLowerCase().includes(queryParam)
      const introMatch = t.shortIntroduction?.toLowerCase().includes(queryParam)
      const subjMatch = t.subjects?.some((s) => s.toLowerCase().includes(queryParam))
      const cityMatch = t.location?.city?.toLowerCase().includes(queryParam)
      const qualMatch = t.qualifications?.some((q) => q.toLowerCase().includes(queryParam))
      return nameMatch || introMatch || subjMatch || cityMatch || qualMatch
    })
  }

  return (
    <main className="min-h-screen bg-[#F0F4F8] text-slate-900 pb-20 font-sans">
      {/* Hero Header Section matching Homepage Deep Royal Blue Theme */}
      <section className="w-full pt-4 pb-4">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-5">
          <div className="rounded-3xl bg-linear-to-l from-royal-blue to-royal-blue-dark text-white p-8 sm:p-12 shadow-lg space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-[#002273] text-slate-200 text-xs px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 font-medium tracking-wide">
                <UserCheck className="h-3.5 w-3.5 text-blue-300" />
                PassKarlo Educator & Tutor Discovery
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Connect with Expert Teachers & Tutors
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl leading-relaxed">
              Find qualified educators across subjects, entrance exams, and academic disciplines. Connect for online, offline, or hybrid learning guidance.
            </p>

            {/* Search Bar */}
            <div className="pt-2 max-w-2xl">
              <form method="GET" action="/teachers" className="flex items-center gap-2 bg-white rounded-2xl p-2 shadow-md border border-slate-100">
                <div className="flex-1 flex items-center gap-2 px-3">
                  <Search className="h-4 w-4 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    name="q"
                    defaultValue={params.q || ''}
                    placeholder="Search by teacher name, subject (e.g. Physics), or city..."
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
      <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-5 pt-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#002D80]">
              Verified Educators
            </h2>
            <span className="text-xs font-bold bg-slate-200/80 text-slate-700 px-3 py-1 rounded-full">
              {teachers.length} {teachers.length === 1 ? 'teacher' : 'teachers'} found
            </span>
          </div>
        </div>

        {teachers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher._id} teacher={teacher} />
            ))}
          </div>
        ) : (
          <div className="p-10 bg-white border border-slate-200/80 rounded-3xl text-center space-y-4 shadow-xs max-w-2xl mx-auto my-8">
            <div className="h-12 w-12 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center mx-auto">
              <UserCheck className="h-6 w-6 text-royal-blue" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">No teachers matching your search</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                {queryParam
                  ? `No teacher profiles match "${queryParam}". Try searching for another subject or teacher name.`
                  : 'No published teacher records were found in Sanity Studio. Create and publish a teacher document in Sanity Studio to see it listed here.'}
              </p>
            </div>
            {queryParam && (
              <Link
                href="/teachers"
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
