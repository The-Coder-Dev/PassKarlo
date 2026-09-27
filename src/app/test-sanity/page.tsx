import Image from 'next/image'
import { sanityFetch } from '@/sanity/lib/live'
import { INSTITUTES_QUERY, type SanityInstitute } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

export const revalidate = 0

export default async function TestSanityPage() {
  const { data } = await sanityFetch({
    query: INSTITUTES_QUERY,
  })

  const institutes = (data || []) as SanityInstitute[]

  return (
    <div className="max-w-4xl mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-slate-900">
        Sanity Connection Test
      </h1>

      {institutes && institutes.length > 0 ? (
        <div className="space-y-6">
          {institutes.map((institute: SanityInstitute) => {
            const logoUrl = institute.logo ? urlFor(institute.logo).width(200).height(200).url() : null

            return (
              <div
                key={institute._id}
                className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                {logoUrl && (
                  <div className="relative w-24 h-24 flex-shrink-0 bg-slate-100 rounded overflow-hidden border border-slate-200">
                    <Image
                      src={logoUrl}
                      alt={institute.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-semibold text-slate-800">
                      {institute.name}
                    </h2>
                    <span className="inline-block px-2.5 py-0.5 text-xs font-medium uppercase tracking-wider rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {institute.type}
                    </span>
                  </div>

                  {(institute.location?.city || institute.location?.state) && (
                    <p className="text-sm font-medium text-slate-600">
                      Location: {[institute.location?.city, institute.location?.state].filter(Boolean).join(', ')}
                    </p>
                  )}

                  {institute.shortDescription && (
                    <p className="text-sm text-slate-600">
                      {institute.shortDescription}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="p-6 bg-amber-50 border border-amber-200 rounded-lg text-amber-900">
          <p className="font-medium">No published institutes found in Sanity.</p>
          <p className="text-sm mt-1 text-amber-800">
            Please publish an Institute document in Sanity Studio (/studio) and refresh this page.
          </p>
        </div>
      )}
    </div>
  )
}
