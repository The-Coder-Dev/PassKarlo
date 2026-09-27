"use client";

import Link from "next/link";
import { ChevronDown, GraduationCap, School } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export interface NavDropdownOption {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavDropdownOption[];
}

interface HeaderNavProps {
  items: NavItem[];
}

export function HeaderNav({ items }: HeaderNavProps) {
  return (
    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
      {items.map((item) => {
        if (item.children && item.children.length > 0) {
          return (
            <DropdownMenu key={item.label}>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="group flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-royal-blue transition-colors focus:outline-none cursor-pointer py-1 select-none"
                >
                  <span>{item.label}</span>
                  <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-royal-blue group-data-[state=open]:rotate-180 transition-transform duration-200" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="start" className="w-48 p-1.5 shadow-xl border-slate-200/80">
                {item.children.map((child) => {
                  const isCollege = child.href.includes("colleges");
                  const IconComponent = isCollege ? GraduationCap : School;

                  return (
                    <DropdownMenuItem key={child.label} asChild>
                      <Link
                        href={child.href}
                        className="flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold text-slate-700 hover:text-royal-blue hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
                      >
                        <IconComponent className="h-4 w-4 text-royal-blue shrink-0" />
                        <span>{child.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href || "#"}
            className="text-sm font-semibold text-slate-700 hover:text-royal-blue transition-colors"
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
