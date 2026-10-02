import React from 'react'

export default function SearchLoading() {
  return (
    <main className="min-h-screen bg-[#F0F4F8] text-slate-900 pb-20 font-sans">
      {/* Search Header Banner Loading */}
      <section className="w-full pt-4 pb-4">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-5">
          <div className="rounded-3xl bg-linear-to-l from-royal-blue to-royal-blue-dark text-white p-8 sm:p-12 shadow-lg space-y-5 animate-pulse">
            <div className="h-6 w-48 bg-blue-900/60 rounded-full" />
            <div className="h-10 w-80 bg-blue-900/60 rounded-xl" />
            <div className="h-4 w-96 bg-blue-900/40 rounded-lg" />
            <div className="h-12 w-full max-w-2xl bg-white/20 rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Grid Loading Skeletons */}
      <section className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-5 pt-6 space-y-6">
        <div className="h-14 w-full bg-white rounded-2xl border border-slate-200/80 animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 space-y-4 shadow-xs animate-pulse h-64"
            >
              <div className="flex items-center justify-between">
                <div className="h-5 w-24 bg-slate-200 rounded-md" />
                <div className="h-12 w-12 bg-slate-200 rounded-xl" />
              </div>
              <div className="h-6 w-3/4 bg-slate-200 rounded-md" />
              <div className="h-4 w-1/2 bg-slate-200 rounded-md" />
              <div className="h-12 w-full bg-slate-100 rounded-xl" />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
