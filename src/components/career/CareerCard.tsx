import React from "react";
import {
  Code,
  Building2,
  Stethoscope,
  Palette,
  Scale,
  Cpu,
  GraduationCap,
  Sparkles,
  ChevronRight,
  LucideIcon
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface CareerCategory {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  iconName: string;
  trendingPaths: string[];
}

export const sampleCareerCategories: CareerCategory[] = [
  {
    id: "cs-it",
    title: "Computer Science & IT",
    subTitle: "Software & AI Careers",
    description: "Software engineering, Data Science, AI/ML development, Cybersecurity & Cloud Computing.",
    iconName: "Code",
    trendingPaths: ["B.Tech CSE", "BCA", "MCA", "Data Science"],
  },
  {
    id: "management",
    title: "Management & Business",
    subTitle: "Leadership & Administration",
    description: "Business Administration, Marketing, Finance, HR, Entrepreneurship & Operations.",
    iconName: "Building2",
    trendingPaths: ["BBA", "MBA", "PGDM", "Finance"],
  },
  {
    id: "medicine",
    title: "Medicine & Healthcare",
    subTitle: "Clinical & Life Sciences",
    description: "Clinical Practice, Dental Care, Pharmacy, Biotechnology & Allied Healthcare.",
    iconName: "Stethoscope",
    trendingPaths: ["MBBS", "BDS", "B.Pharm", "Biotech"],
  },
  {
    id: "engineering",
    title: "Engineering & Tech",
    subTitle: "Core & Applied Engineering",
    description: "Mechanical, Civil, Electrical, Robotics, Electronics & Aerospace Engineering.",
    iconName: "Cpu",
    trendingPaths: ["B.Tech Mechanical", "B.Tech Civil", "Robotics"],
  },
  {
    id: "design",
    title: "Design & Creative Arts",
    subTitle: "Visual & Digital Design",
    description: "UI/UX Design, Fashion Design, Industrial Design, Animation & Game Development.",
    iconName: "Palette",
    trendingPaths: ["B.Des", "B.Sc Animation", "Fashion Design"],
  },
  {
    id: "law",
    title: "Law & Legal Studies",
    subTitle: "Corporate & Constitutional Law",
    description: "Corporate Counsel, Litigation, Intellectual Property & International Business Law.",
    iconName: "Scale",
    trendingPaths: ["BA LLB", "BBA LLB", "LLM"],
  },
];

const iconMap: Record<string, LucideIcon> = {
  Code,
  Building2,
  Stethoscope,
  Cpu,
  Palette,
  Scale,
};

interface CareerCardProps {
  category: CareerCategory;
}

export function CareerCard({ category }: CareerCardProps) {
  const IconComponent = iconMap[category.iconName] || GraduationCap;

  return (
    <Card className="group relative flex flex-col justify-between hover:border-slate-300 transition-all duration-300">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-11 w-11 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
            <IconComponent className="h-5 w-5" />
          </div>
          <Badge variant="secondary" className="text-[11px] font-semibold">
            {category.subTitle}
          </Badge>
        </div>

        <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
          {category.title}
        </CardTitle>

        <CardDescription className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
          {category.description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="pt-2 border-t border-slate-100 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {category.trendingPaths.slice(0, 2).map((path) => (
            <span key={path} className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
              {path}
            </span>
          ))}
        </div>
        <Button variant="ghost" size="sm" className="gap-1 text-slate-700 font-bold group-hover:text-emerald-600">
          Explore
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
