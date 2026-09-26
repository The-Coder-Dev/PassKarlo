
import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { AddInstituteLink } from "@/components/modals/AddInstituteModal";
import { MobileMenu } from "@/components/navigation/MobileMenu";

export function Header() {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Exam Preparation", href: "#exam-prep" },
    { label: "Entrance Exam", href: "#entrance-exam" },
    { label: "Career Options", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full pt-4 pb-2">
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
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-semibold text-slate-700 hover:text-royal-blue transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Action Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <AddInstituteLink className={buttonVariants({ variant: "outline" })}>
                Add Your Institute
              </AddInstituteLink>
              <Link
                href="https://books.passkarlo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className={buttonVariants({ variant: "secondary" })}>
                  Donate Book
                </Button>
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
