import React from "react";
import { Building, MapPin, Star, Award, CheckCircle, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface InstituteItem {
  id: string;
  name: string;
  type: string;
  location: string;
  pincode: string;
  rating: number;
  featuredBadge?: string;
  courses: string[];
  accreditation: string;
}

export const sampleInstitutes: InstituteItem[] = [
  {
    id: "inst-1",
    name: "GLA University",
    type: "Private University",
    location: "Mathura, Uttar Pradesh",
    pincode: "281406",
    rating: 4.8,
    featuredBadge: "TOP RANKED",
    courses: ["B.Tech CSE", "BBA", "BCA", "MBA", "B.Pharm"],
    accreditation: "NAAC A+ Grade",
  },
  {
    id: "inst-2",
    name: "BSA College of Engineering & Technology",
    type: "Engineering College",
    location: "Mathura, Uttar Pradesh",
    pincode: "281001",
    rating: 4.5,
    featuredBadge: "AKTU AFFILIATED",
    courses: ["B.Tech CSE", "B.Tech ME", "MCA", "MBA"],
    accreditation: "AICTE Approved",
  },
  {
    id: "inst-3",
    name: "Sanskriti University",
    type: "Private University",
    location: "Chhata, Mathura",
    pincode: "281401",
    rating: 4.6,
    featuredBadge: "PROMOTED",
    courses: ["B.Sc Agriculture", "BAMS", "B.Tech", "B.Des"],
    accreditation: "UGC Recognized",
  },
  {
    id: "inst-4",
    name: "R.C. Institute of Technology",
    type: "Degree & Technical College",
    location: "Mathura City, Uttar Pradesh",
    pincode: "281003",
    rating: 4.4,
    courses: ["BCA", "BBA", "B.Com", "B.Sc IT"],
    accreditation: "State Govt. Approved",
  },
];

interface InstituteCardProps {
  institute: InstituteItem;
  onSelect?: (institute: InstituteItem) => void;
}

export function InstituteCard({ institute, onSelect }: InstituteCardProps) {
  return (
    <Card className="group relative flex flex-col justify-between hover:border-slate-300 transition-all duration-300">
      
      <CardHeader className="space-y-3">
        {/* Header Row: Type and Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md">
              {institute.type}
            </span>
            {institute.featuredBadge && (
              <Badge variant="amber" className="text-[10px] uppercase">
                {institute.featuredBadge}
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-1 bg-amber-50 text-amber-800 text-xs font-bold px-2 py-1 rounded-lg border border-amber-200/60">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span>{institute.rating}</span>
          </div>
        </div>

        {/* Name */}
        <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
          {institute.name}
        </CardTitle>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
          <MapPin className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>{institute.location} ({institute.pincode})</span>
        </div>

        {/* Accreditation */}
        <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold bg-emerald-50/70 p-2 rounded-lg text-emerald-900 border border-emerald-100/60">
          <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>{institute.accreditation}</span>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="text-xs font-semibold text-slate-400 mb-2">Offered Programs:</div>
        <div className="flex flex-wrap gap-1.5">
          {institute.courses.map((c) => (
            <span
              key={c}
              className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
            >
              {c}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-400 font-medium">PassKarlo Verified</span>
        <Button
          variant="outline"
          size="sm"
          className="gap-1.5 text-xs font-bold text-slate-800 hover:text-slate-900 shadow-2xs"
        >
          View Profile
          <ExternalLink className="h-3.5 w-3.5 text-emerald-600" />
        </Button>
      </CardFooter>
    </Card>
  );
}
