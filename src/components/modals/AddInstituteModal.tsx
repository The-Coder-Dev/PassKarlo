"use client";

import React, { useState, useEffect } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Mail, Phone } from "lucide-react";

export function openAddInstituteModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("open-add-institute"));
  }
}

export function AddInstituteLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => openAddInstituteModal()}
      className={className}
    >
      {children}
    </button>
  );
}

import { buttonVariants, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AddInstituteButton({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type="button"
      className={cn(buttonVariants({ variant, size, className }))}
      onClick={() => openAddInstituteModal()}
    >
      {children}
    </button>
  );
}

export function AddInstituteModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleHash = () => {
      if (window.location.hash === "#add-institute") {
        setIsOpen(true);
      }
    };

    window.addEventListener("open-add-institute", handleOpen);
    window.addEventListener("hashchange", handleHash);
    handleHash();

    return () => {
      window.removeEventListener("open-add-institute", handleOpen);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (window.location.hash === "#add-institute") {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  };

  const steps = [
    {
      step: "01",
      title: "External Listing Payment",
      desc: "Complete the institute listing fee payment through our official PassK  arlo relationship manager or designated payment link.",
    },
    {
      step: "02",
      title: "Share Institute Profile Data",
      desc: "Provide verified details including institute name, accreditation, courses, fee structure, facilities, logo, and cover media.",
    },
    {
      step: "03",
      title: "PassKarlo Team Verification",
      desc: "Our quality & compliance team verifies the affiliation, accreditation, and administrative details for student trust.",
    },
    {
      step: "04",
      title: "Admin Panel Creation",
      desc: "Authorized PassKarlo administrators curate and construct your official institute profile page within our secure environment.",
    },
    {
      step: "05",
      title: "Official Publication",
      desc: "Your profile goes live on PassKarlo (`passkarlo.com`), making your institute discoverable to lakhs of aspiring students across India.",
    },
  ];

  return (
    <Dialog
      isOpen={isOpen}
      onClose={handleClose}
      title="Add Your Institute to PassKarlo"
      description="Learn how schools, colleges, coaching centers & universities get listed on India's trusted education discovery platform."
    >
      <div className="space-y-4">
        
        {/* Info Banner */}
        <div className="rounded-xl bg-emerald-50 border border-emerald-200/80 p-3 flex items-start gap-3">
          <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-xs text-emerald-900 leading-relaxed font-medium">
            <span className="font-bold text-emerald-950 block text-xs mb-0.5">Admin-Managed Listing Policy</span>
            To maintain high data integrity, PassKarlo profiles are strictly curated by our team after external verification. No public unverified submissions are permitted.
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-2">
          <h3 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
            Listing Onboarding Workflow
          </h3>
          <div className="grid gap-2">
            {steps.map((s) => (
              <div
                key={s.step}
                className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100/60 transition-all"
              >
                <div className="h-6 w-6 rounded-lg bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {s.step}
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-900">
                    {s.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-snug">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info Box */}
        <div className="rounded-xl bg-slate-900 text-white p-4 space-y-2 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-emerald-400 uppercase tracking-wider">
              Get Started with Our Team
            </span>
            <Badge variant="emerald" className="text-[10px] px-2 py-0.5">
              Direct Assistance
            </Badge>
          </div>
          <p className="text-xs text-slate-300">
            Have questions about listing fees, placement, or profile updates? Contact our team:
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold pt-1">
            <a href="mailto:institutes@passkarlo.com" className="flex items-center gap-1.5 text-white hover:text-emerald-300 transition-colors">
              <Mail className="h-3.5 w-3.5 text-emerald-400" />
              <span>institutes@passkarlo.com</span>
            </a>
            <a href="tel:+9105657277527" className="flex items-center gap-1.5 text-white hover:text-emerald-300 transition-colors">
              <Phone className="h-3.5 w-3.5 text-emerald-400" />
              <span>+91 (0565) PASS-KARLO</span>
            </a>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
