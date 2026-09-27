import React from "react";
import Image from "next/image";
import { MapPin, Calendar, Award, ExternalLink, FileText, Star } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import type { SanityInstitute } from "@/sanity/lib/queries";
import { cn } from "@/lib/utils";

interface InstituteCardProps {
  institute: SanityInstitute;
}

export function InstituteCard({ institute }: InstituteCardProps) {
  const logoUrl = institute.logo ? urlFor(institute.logo).width(120).height(120).url() : null;
  const websiteUrl = institute.contact?.website;
  const admissionUrl = institute.admissionFormUrl || institute.contact?.admissionFormUrl;

  return (
    <Card className="group relative flex flex-col justify-between hover:border-slate-300 transition-all duration-300 bg-white border border-slate-200/80 shadow-xs rounded-2xl">
      <CardHeader className="space-y-3">
        {/* Top Header Row: Badges & Logo */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-wider bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-100">
              {institute.type}
            </span>
            {institute.isFeatured && (
              <Badge variant="amber" className="text-[10px] uppercase gap-1">
                <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                Featured
              </Badge>
            )}
            {institute.academicInfo?.affiliation && (
              <Badge variant="secondary" className="text-[11px] font-semibold text-slate-700 bg-slate-100">
                {institute.academicInfo.affiliation}
              </Badge>
            )}
          </div>

          {logoUrl && (
            <div className="relative w-14 h-14 shrink-0 rounded-xl bg-slate-50 border border-slate-200/80 p-1 overflow-hidden flex items-center justify-center">
              <Image
                src={logoUrl}
                alt={institute.name}
                width={56}
                height={56}
                className="object-contain max-h-full"
              />
            </div>
          )}
        </div>

        {/* Name */}
        <CardTitle className="text-xl font-extrabold text-slate-900 group-hover:text-royal-blue transition-colors">
          {institute.name}
        </CardTitle>

        {/* Location & Concise Meta */}
        <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs font-medium text-slate-600">
          {(institute.location?.city || institute.location?.state) && (
            <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
              <MapPin className="h-3.5 w-3.5 text-royal-blue shrink-0" />
              <span>
                {[institute.location?.city, institute.location?.state].filter(Boolean).join(", ")}
                {institute.location?.pincode ? ` - ${institute.location.pincode}` : ""}
              </span>
            </div>
          )}

          {institute.academicInfo?.establishedYear && (
            <div className="flex items-center gap-1 text-slate-500">
              <Calendar className="h-3.5 w-3.5 text-slate-400" />
              <span>Estd. {institute.academicInfo.establishedYear}</span>
            </div>
          )}

          {institute.academicInfo?.accreditation && (
            <div className="flex items-center gap-1 text-slate-500">
              <Award className="h-3.5 w-3.5 text-amber-600" />
              <span>{institute.academicInfo.accreditation}</span>
            </div>
          )}
        </div>

        {/* Short Description */}
        {institute.shortDescription && (
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
            {institute.shortDescription}
          </p>
        )}
      </CardHeader>

      <CardContent className="pt-0 space-y-3">
        {/* Facilities / Tags if present */}
        {institute.academicInfo?.facilities && institute.academicInfo.facilities.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {institute.academicInfo.facilities.slice(0, 4).map((facility) => (
              <span
                key={facility}
                className="text-[10px] font-semibold bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200/60"
              >
                {facility}
              </span>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        {/* Action 1: External Admission Form */}
        {admissionUrl ? (
          <a
            href={admissionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "gap-1.5 text-xs font-bold shrink-0 bg-royal-blue hover:bg-royal-blue-dark text-white rounded-xl"
            )}
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Admission Form</span>
          </a>
        ) : (
          <button
            disabled
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "gap-1.5 text-xs font-medium text-slate-400 bg-slate-50 border-slate-200 cursor-not-allowed shrink-0 rounded-xl"
            )}
          >
            <FileText className="h-3.5 w-3.5 opacity-50" />
            <span>Form Unavailable</span>
          </button>
        )}

        {/* Action 2: External View Website */}
        {websiteUrl ? (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 border-slate-200 bg-white hover:bg-slate-50 shrink-0 rounded-xl"
            )}
          >
            <span>View Website</span>
            <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
          </a>
        ) : (
          <span className="text-[11px] text-slate-400 font-medium">Website unavailable</span>
        )}
      </CardFooter>
    </Card>
  );
}
