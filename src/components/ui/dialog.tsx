"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export function Dialog({ isOpen, onClose, title, description, children }: DialogProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div
        className={cn(
          "relative z-50 w-full max-w-2xl max-h-[85vh] flex flex-col rounded-3xl bg-white p-5 sm:p-7 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200 my-auto"
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "dialog-title" : undefined}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 sm:right-5 sm:top-5 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="shrink-0 pr-8">
          {title && (
            <h2 id="dialog-title" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="mt-4 sm:mt-5 overflow-y-auto pr-1 min-h-0 flex-1 space-y-4">{children}</div>
      </div>
    </div>
  );
}
