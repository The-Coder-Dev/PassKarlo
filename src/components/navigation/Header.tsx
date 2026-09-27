import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { AddInstituteLink } from "@/components/modals/AddInstituteModal";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { HeaderNav, type NavItem } from "@/components/navigation/HeaderNav";

export function Header() {
  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Entrance Exams", href: "/#entrance-exam" },
    { label: "Career Options", href: "/#careers" },
    {
      label: "Find Institute",
      children: [
        { label: "Find College", href: "/colleges" },
        { label: "Find School", href: "/schools" },
      ],
    },
  ];

  return (
    <header className="w-full pt-4 pb-2 z-1">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-5">

        <div className="w-full bg-white rounded-lg sm:rounded-xl shadow-2xs border border-slate-100/80 px-4 sm:px-5 py-3.5 flex items-center justify-between relative">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/logo.webp"
              alt="PassKarlo"
              width={160}
              height={44}
              priority
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center justify-center gap-4">
            {/* Desktop Navigation Links */}
            <HeaderNav items={navItems} />

            {/* Desktop CTA Action Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <AddInstituteLink className={buttonVariants({ variant: "default" })}>
                Add Your Institute
              </AddInstituteLink>
              <Link
                href="https://books.passkarlo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
              </Link>
            </div>
          </div>

          {/* Mobile Menu (Client Component Boundary) */}
          <MobileMenu navItems={navItems} />

        </div>

      </div>
    </header>
  );
}
