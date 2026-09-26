import React from "react";
import { Users, Monitor, TrendingUp, Globe, Brain, Trophy } from "lucide-react";

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  cardBg: string;
  iconBg: string;
  iconColor: string;
}

export const featureItems: FeatureItem[] = [
  {
    id: "faculty",
    title: "Expert Faculty",
    description: "Learn from experienced educators and industry experts who are passionate about student success.",
    icon: Users,
    cardBg: "bg-gradient-to-b from-[#EFF4FF] to-[#F6F8FE] border-blue-100/80",
    iconBg: "bg-blue-100/80",
    iconColor: "text-blue-600",
  },
  {
    id: "learning",
    title: "Modern Learning",
    description: "Access cutting-edge learning resources and interactive content designed for the digital age.",
    icon: Monitor,
    cardBg: "bg-gradient-to-b from-[#F5F3FF] to-[#FBF9FF] border-purple-100/80",
    iconBg: "bg-purple-100/80",
    iconColor: "text-purple-600",
  },
  {
    id: "progress",
    title: "Track Progress",
    description: "Monitor your learning journey with detailed analytics and personalized progress reports.",
    icon: TrendingUp,
    cardBg: "bg-gradient-to-b from-[#ECFDF5] to-[#F4FDF9] border-emerald-100/80",
    iconBg: "bg-emerald-100/80",
    iconColor: "text-emerald-600",
  },
  {
    id: "awareness",
    title: "Global Awareness",
    description: "Cultivate a deep sense of awareness about the world and current affairs.",
    icon: Globe,
    cardBg: "bg-gradient-to-b from-[#FEFCE8] to-[#FFFDF5] border-amber-200/60",
    iconBg: "bg-amber-100/80",
    iconColor: "text-amber-700",
  },
  {
    id: "skills",
    title: "Enhanced Skills",
    description: "Enhance memory, attention, and critical thinking skills through awareness-based learning.",
    icon: Brain,
    cardBg: "bg-gradient-to-b from-[#FFE4E6] to-[#FFF1F3] border-rose-200/60",
    iconBg: "bg-rose-100/80",
    iconColor: "text-rose-600",
  },
  {
    id: "academic",
    title: "Academic Performance",
    description: "Boost performance in school interviews, debates, and group discussions.",
    icon: Trophy,
    cardBg: "bg-gradient-to-b from-[#FEF9C3] to-[#FFFDF0] border-yellow-200/70",
    iconBg: "bg-yellow-100/80",
    iconColor: "text-yellow-700",
  },
];

export function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featureItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <div
            key={item.id}
            className={`rounded-2xl sm:rounded-3xl p-6 sm:p-7 border shadow-2xs hover:shadow-md transition-all duration-300 ${item.cardBg}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`h-10 w-10 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0`}>
                <IconComponent className="h-5 w-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                {item.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
