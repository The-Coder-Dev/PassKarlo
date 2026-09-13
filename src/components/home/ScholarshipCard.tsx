import React from "react";
import { Briefcase } from "lucide-react";

export interface ScholarshipItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  actionText: string;
  theme: "mint" | "sky" | "orange" | "blue";
}

export const sampleScholarships: ScholarshipItem[] = [
  {
    id: "1",
    title: "BBA • BCA • B.Com\nScholarships",
    badge: "SCHOLARSHIPS UP TO 30%",
    description: "Merit-linked Scholarships and loan support for India's leading BBA, BCA & B.Com Colleges.",
    actionText: "Register Now",
    theme: "mint",
  },
  {
    id: "2",
    title: "MBA & MCA\nScholarships",
    badge: "SCHOLARSHIPS UP TO 30%",
    description: "Merit-linked Scholarships and loan support for India's leading MBA, & MCA Colleges.",
    actionText: "Register Now",
    theme: "sky",
  },
  {
    id: "3",
    title: "Win Prizes worth\n₹6 Lakh+",
    badge: "REWARDS & RECOGNITION",
    description: "Win cash prizes and gift vouchers, leading up to a national felicitation stage",
    actionText: "Register Now",
    theme: "orange",
  },
  {
    id: "4",
    title: "Search or\nHire a Teacher",
    badge: "",
    description: "Find best teacher for your child to give best education.",
    actionText: "Hire a Teacher",
    theme: "blue",
  },
];

interface ScholarshipCardProps {
  item: ScholarshipItem;
}

export function ScholarshipCard({ item }: ScholarshipCardProps) {
  if (item.theme === "blue") {
    return (
      <div className="rounded-3xl bg-[#003096] text-white p-7 border border-[#002575] flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
        <div>
          <div className="h-12 w-12 rounded-2xl bg-[#2563EB] text-white flex items-center justify-center mb-6 shadow-xs">
            <Briefcase className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-extrabold text-white leading-snug whitespace-pre-line mb-4">
            {item.title}
          </h3>
          <p className="text-xs text-blue-100 font-normal leading-relaxed mb-6">
            {item.description}
          </p>
        </div>
        <div>
          <button className="text-xs font-extrabold text-white hover:underline transition-all">
            {item.actionText}
          </button>
        </div>
      </div>
    );
  }

  const themeStyles = {
    mint: {
      cardBg: "bg-gradient-to-b from-[#E6F7F0] via-[#F2FAF6] to-[#F8FCFA] border-[#D0F0E4]",
      iconBg: "bg-[#28B473]",
      badgeText: "text-[#24A166]",
      titleText: "text-[#0D291C]",
      bodyText: "text-[#527063]",
      linkText: "text-[#24A166]",
    },
    sky: {
      cardBg: "bg-gradient-to-b from-[#E6F3FA] via-[#F2F8FC] to-[#F8FCFE] border-[#D0E6F5]",
      iconBg: "bg-[#1CA0F2]",
      badgeText: "text-[#1990DA]",
      titleText: "text-[#0D2235]",
      bodyText: "text-[#526B7E]",
      linkText: "text-[#1990DA]",
    },
    orange: {
      cardBg: "bg-gradient-to-b from-[#FFF5E6] via-[#FFF9F0] to-[#FFFDF9] border-[#FFE8CC]",
      iconBg: "bg-[#F28B1E]",
      badgeText: "text-[#D97706]",
      titleText: "text-[#38220B]",
      bodyText: "text-[#7A5B3D]",
      linkText: "text-[#D97706]",
    },
  };

  const style = themeStyles[item.theme as keyof typeof themeStyles] || themeStyles.mint;

  return (
    <div className={`rounded-3xl p-7 border flex flex-col justify-between shadow-xs hover:shadow-md transition-all ${style.cardBg}`}>
      <div>
        <div className={`h-12 w-12 rounded-2xl ${style.iconBg} text-white flex items-center justify-center mb-6 shadow-xs`}>
          <Briefcase className="h-6 w-6" />
        </div>
        <h3 className={`text-xl font-extrabold ${style.titleText} leading-snug whitespace-pre-line mb-3`}>
          {item.title}
        </h3>
        {item.badge && (
          <span className={`text-[11px] font-extrabold ${style.badgeText} uppercase tracking-wider mb-2 block`}>
            {item.badge}
          </span>
        )}
        <p className={`text-xs ${style.bodyText} font-normal leading-relaxed mb-6`}>
          {item.description}
        </p>
      </div>
      <div>
        <button className={`text-xs font-extrabold ${style.linkText} hover:underline transition-all`}>
          {item.actionText}
        </button>
      </div>
    </div>
  );
}
