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
      desc: "Complete the institute listing fee payment through our official PassKarlo relationship manager or designated payment link.",
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
      <div className="space-y-6">
        
        {/* Info Banner */}
        <div className="rounded-2xl bg-emerald-50 border border-emerald-200/80 p-4 flex items-start gap-3">
          <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-xs text-emerald-900 leading-relaxed font-medium">
            <span className="font-bold block text-sm mb-0.5">Admin-Managed Listing Policy</span>
            To maintain high data integrity, PassKarlo profiles are strictly curated by our team after external verification. No public unverified submissions are permitted.
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Listing Onboarding Workflow
          </h3>
          <div className="grid gap-3">
            {steps.map((s) => (
              <div
                key={s.step}
                className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xs hover:border-slate-200 transition-all"
              >
                <div className="h-8 w-8 rounded-xl bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {s.step}
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    {s.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info Box */}
        <div className="rounded-2xl bg-slate-900 text-white p-5 space-y-3 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Get Started with Our Team
            </span>
            <Badge variant="emerald" className="text-[10px]">
              Direct Assistance
            </Badge>
          </div>
          <p className="text-xs text-slate-300">
            Have questions about listing fees, featured placement, or profile updates? Reach out to our institutional onboarding team directly:
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold pt-1">
            <div className="flex items-center gap-1.5 text-white">
              <Mail className="h-4 w-4 text-emerald-400" />
              <span>institutes@passkarlo.com</span>
            </div>
            <div className="flex items-center gap-1.5 text-white">
              <Phone className="h-4 w-4 text-emerald-400" />
              <span>+91 (0565) PASS-KARLO</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={handleClose}
            className={cn(buttonVariants({ variant: "emerald" }), "px-6 font-bold")}
          >
            Got It
          </button>
        </div>

      </div>
    </Dialog>
  );
}
