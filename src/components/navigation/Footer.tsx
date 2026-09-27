import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, MapPin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.webp"
                alt="PassKarlo"
                width={160}
                height={44}
                className="h-10 w-auto object-contain brightness-125"
              />
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              India&apos;s premier education discovery platform. Discover leading institutes, explore rewarding career pathways, and connect with quality guidance.
            </p>
            <div className="flex items-center gap-3 pt-2 text-slate-400 text-xs">
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700">
                <MapPin className="h-3.5 w-3.5 text-emerald-400" /> Mathura & PAN India
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700">
                <Globe className="h-3.5 w-3.5 text-emerald-400" /> passkarlo.com
              </span>
            </div>
          </div>

          {/* Nav Col 1 */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#exam-prep" className="hover:text-emerald-400 transition-colors">Exam Preparation</a></li>
              <li><a href="#entrance-exam" className="hover:text-emerald-400 transition-colors">Entrance Exams</a></li>
              <li><a href="#careers" className="hover:text-emerald-400 transition-colors">Career Pathways</a></li>
              <li><a href="#institutes" className="hover:text-emerald-400 transition-colors">Featured Institutes</a></li>
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Popular Disciplines</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#careers" className="hover:text-emerald-400 transition-colors">Engineering & Tech</a></li>
              <li><a href="#careers" className="hover:text-emerald-400 transition-colors">Management & BBA</a></li>
              <li><a href="#careers" className="hover:text-emerald-400 transition-colors">Computer Applications (BCA)</a></li>
              <li><a href="#careers" className="hover:text-emerald-400 transition-colors">Basic & Medical Sciences</a></li>
              <li><a href="#careers" className="hover:text-emerald-400 transition-colors">Arts & Media</a></li>
            </ul>
          </div>

          {/* External Platform Col */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">PassKarlo Ecosystem</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://books.passkarlo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                >
                  books.passkarlo.com &rarr;
                </a>
                <p className="text-xs text-slate-400 mt-0.5">Used books selling, donations & student support.</p>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact Support</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} PassKarlo. All rights reserved. TargetStudy is an IA reference only.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500 inline" /> for Indian Students & Educators
          </p>
        </div>
      </div>
    </footer>
  );
}
