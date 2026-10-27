import React, { useState } from 'react';
import { 
  PhoneCall, 
  Calendar, 
  Calculator, 
  Menu, 
  X, 
  Sparkles
} from 'lucide-react';
import { LOGO_PRIMARY_URL, LOGO_FALLBACK_URL } from '../assets/logo';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenQuote: () => void;
  onOpenAudit?: () => void;
  isAuditActive: boolean;
  onToggleAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenQuote,
  isAuditActive,
  onToggleAudit
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top Professional Notification Bar */}
      <div className="bg-[#102A6B] text-white px-4 py-2 text-xs md:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-[#D9252A] text-white shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping mr-1.5 inline-block"></span>
              25-Mile Radius Active Dispatch
            </span>
            <span className="hidden md:inline text-blue-100 font-medium">
              Decatur (30030) & Greater Atlanta Metro • 25+ Years Experience
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onToggleAudit}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                isAuditActive 
                  ? 'bg-amber-400 text-slate-950 font-black' 
                  : 'bg-white/15 hover:bg-white/25 text-white border border-white/25'
              }`}
              title="Click to view competitor gap analysis and website audit"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{isAuditActive ? 'Return to Live Website' : 'Competitor Gap Audit'}</span>
            </button>

            <a
              href="tel:7704827322"
              className="inline-flex items-center gap-1.5 text-white hover:text-amber-300 font-extrabold tracking-tight"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#E53E3E]" />
              <span>(770) 482-7322</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with official image */}
          <a href="#" className="flex items-center gap-3 py-2 group">
            <div className="relative flex items-center">
              <img 
                src={LOGO_PRIMARY_URL} 
                onError={(e) => {
                  e.currentTarget.src = LOGO_FALLBACK_URL;
                }}
                alt="First Choice Pest Control LLC Logo" 
                className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </div>
            <div className="hidden xl:block border-l border-slate-200 pl-3">
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#1D3B8B]">
                Licensed & Insured Exterminators
              </p>
              <p className="text-[10px] font-semibold text-slate-500">
                Decatur, GA • DeKalb & Fulton Counties
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-slate-700">
            <a href="#services" className="hover:text-[#1D3B8B] transition-colors">
              Services
            </a>
            <a href="#calculator" className="hover:text-[#1D3B8B] transition-colors flex items-center gap-1">
              <span>Price Calculator</span>
              <span className="bg-red-50 text-[#D9252A] text-[10px] px-1.5 py-0.5 rounded font-black border border-red-200">
                Instant
              </span>
            </a>
            <a href="#pest-id" className="hover:text-[#1D3B8B] transition-colors">
              Pest Diagnostic Guide
            </a>
            <a href="#bedbug-heat" className="hover:text-[#1D3B8B] transition-colors">
              Thermal Bed Bug
            </a>
            <a href="#termite-letter" className="hover:text-[#1D3B8B] transition-colors">
              GA Closing Letters
            </a>
            <a href="#service-area" className="hover:text-[#1D3B8B] transition-colors">
              Service Area
            </a>
            <a href="#pricing" className="hover:text-[#1D3B8B] transition-colors">
              Plans & Pricing
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 border-[#1D3B8B] bg-white hover:bg-blue-50 text-[#1D3B8B] text-xs font-black shadow-xs transition-all cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#D9252A]" />
              <span>Instant Quote</span>
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#D9252A] hover:bg-[#b81d22] text-white text-xs font-black uppercase tracking-wide shadow-md shadow-red-700/20 hover:shadow-lg hover:shadow-red-700/30 transition-all transform active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Inspection</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 mb-3 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-black text-[#1D3B8B] uppercase tracking-wider">
                Direct Dispatch Hotline
              </p>
              <a href="tel:7704827322" className="text-base font-black text-[#D9252A]">
                (770) 482-7322
              </a>
            </div>
            <a
              href="tel:7704827322"
              className="px-3.5 py-1.5 rounded bg-[#D9252A] text-white text-xs font-black uppercase tracking-wide"
            >
              Call Tech
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2 pb-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#1D3B8B] text-xs font-extrabold border border-slate-200"
            >
              <Calculator className="w-4 h-4 text-[#D9252A]" />
              <span>Price Calculator</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-[#D9252A] text-white text-xs font-black uppercase tracking-wide shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Free Inspection</span>
            </button>
          </div>

          <nav className="flex flex-col space-y-2 text-sm font-bold text-slate-800 pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onToggleAudit();
              }}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-amber-50 text-amber-950 font-black border border-amber-300 text-left cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>{isAuditActive ? 'Return to Live Website' : 'View Competitor Audit'}</span>
              </span>
              <span className="text-xs bg-amber-200 text-amber-900 px-2 py-0.5 rounded font-black">
                8 Gaps
              </span>
            </button>

            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100"
            >
              All Pest & Termite Services
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Instant Cost Estimator
            </a>
            <a
              href="#pest-id"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Pest Diagnostic Guide
            </a>
            <a
              href="#bedbug-heat"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Thermal Bed Bug Treatment
            </a>
            <a
              href="#termite-letter"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Georgia Termite Letter (WDIR)
            </a>
            <a
              href="#service-area"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100"
            >
              ZIP Code Service Area (25-Mile)
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Treatment Plans & Pricing
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100"
            >
              Client Testimonials
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-100"
            >
              FAQ & Guarantees
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
