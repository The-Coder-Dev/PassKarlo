import React from "react";
import Image from "next/image";
import { MapPin, Briefcase, GraduationCap, Languages, Video, Phone, Mail, UserCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import type { SanityTeacher } from "@/sanity/lib/queries";
import { cn } from "@/lib/utils";

interface TeacherCardProps {
  teacher: SanityTeacher;
}

export function TeacherCard({ teacher }: TeacherCardProps) {
  const imageUrl = teacher.profileImage ? urlFor(teacher.profileImage).width(200).height(200).url() : null;
  const contactEmail = teacher.contact?.email;
  const contactPhone = teacher.contact?.phone;

  return (
    <Card className="group relative flex flex-col justify-between hover:border-slate-300 transition-all duration-300 bg-white border border-slate-200/80 shadow-xs rounded-2xl">
      <CardHeader className="space-y-4">
        {/* Top Header Row: Profile photo & Badges */}
        <div className="flex items-start gap-4">
          <div className="relative w-16 h-16 shrink-0 rounded-2xl bg-slate-100 border border-slate-200/80 overflow-hidden flex items-center justify-center">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={teacher.name}
                fill
                className="object-cover"
              />
            ) : (
              <UserCheck className="h-8 w-8 text-slate-400" />
            )}
          </div>

          <div className="flex-1 min-w-0 space-y-1">
            <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-royal-blue transition-colors truncate">
              {teacher.name}
            </CardTitle>

            {teacher.teachingMode && (
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-50/80 text-royal-blue px-2 py-0.5 rounded border border-blue-100 inline-flex items-center gap-1">
                  <Video className="h-3 w-3" />
                  {teacher.teachingMode} Mode
                </span>
              </div>
            )}

            {(teacher.location?.city || teacher.location?.state) && (
              <div className="flex items-center gap-1 text-xs text-slate-600 font-medium pt-0.5">
                <MapPin className="h-3.5 w-3.5 text-royal-blue shrink-0" />
                <span>{[teacher.location?.city, teacher.location?.state].filter(Boolean).join(", ")}</span>
              </div>
            )}
          </div>
        </div>

        {/* Subjects list */}
        {teacher.subjects && teacher.subjects.length > 0 && (
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Subjects Taught
            </span>
            <div className="flex flex-wrap gap-1.5">
              {teacher.subjects.map((subj) => (
                <Badge key={subj} variant="secondary" className="text-xs font-semibold bg-slate-100 text-slate-700">
                  {subj}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Short Introduction */}
        {teacher.shortIntroduction && (
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
            {teacher.shortIntroduction}
          </p>
        )}
      </CardHeader>

      <CardContent className="pt-0 space-y-2 text-xs text-slate-600">
        <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100">
          {teacher.experience !== undefined && (
            <div className="flex items-center gap-1.5">
              <Briefcase className="h-3.5 w-3.5 text-slate-400 shrink-0" />
              <span><strong>{teacher.experience} yrs</strong> Exp.</span>
            </div>
          )}

          {teacher.qualifications && teacher.qualifications.length > 0 && (
            <div className="flex items-center gap-1.5 truncate">
              <GraduationCap className="h-3.5 w-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{teacher.qualifications.join(", ")}</span>
            </div>
          )}

          {teacher.languages && teacher.languages.length > 0 && (
            <div className="flex items-center gap-1.5 col-span-2">
              <Languages className="h-3.5 w-3.5 text-slate-400 shrink-0" />
              <span>Languages: {teacher.languages.join(", ")}</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        {contactEmail ? (
          <a
            href={`mailto:${contactEmail}`}
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "gap-1.5 text-xs font-bold w-full justify-center bg-royal-blue hover:bg-royal-blue-dark text-white rounded-xl"
            )}
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Contact Teacher</span>
          </a>
        ) : contactPhone ? (
          <a
            href={`tel:${contactPhone}`}
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "gap-1.5 text-xs font-bold w-full justify-center bg-royal-blue hover:bg-royal-blue-dark text-white rounded-xl"
            )}
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Contact Teacher</span>
          </a>
        ) : (
          <button
            disabled
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "gap-1.5 text-xs font-medium text-slate-400 bg-slate-50 border-slate-200 cursor-not-allowed w-full justify-center rounded-xl"
            )}
          >
            <Mail className="h-3.5 w-3.5 opacity-50" />
            <span>Contact Unavailable</span>
          </button>
        )}
      </CardFooter>
    </Card>
  );
}
