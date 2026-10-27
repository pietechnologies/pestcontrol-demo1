import React from 'react';
import { 
  PhoneCall, 
  Clock, 
  MapPin, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { LOGO_PRIMARY_URL, LOGO_FALLBACK_URL } from '../assets/logo';

interface FooterProps {
  onOpenAudit: () => void;
  onOpenQuote?: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAudit,
  onOpenBooking
}) => {
  return (
    <footer className="bg-[#081024] text-slate-300 pt-16 pb-24 sm:pb-16 border-t-2 border-[#1D3B8B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Mission with Official Logo */}
          <div className="space-y-4">
            <div className="inline-block bg-white p-2.5 rounded-xl shadow-md border border-slate-200">
              <img 
                src={LOGO_PRIMARY_URL} 
                onError={(e) => {
                  e.currentTarget.src = LOGO_FALLBACK_URL;
                }}
                alt="First Choice Pest Control LLC" 
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-blue-200 leading-relaxed font-medium">
              Serving Decatur, DeKalb County, Fulton County, and Greater Atlanta for over 25+ years. 
              Specializing in subterranean termite bait barriers, 1-day bed bug thermal remediation, 
              structural rodent exclusion, and official Georgia closing clearance letters (WDIR).
            </p>

            <div className="pt-1">
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 border border-amber-400/40 text-xs font-black transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Competitor Gap Audit Report</span>
              </button>
            </div>
          </div>

          {/* Service Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase text-white tracking-wider">
              Specialized Divisions
            </h4>
            <ul className="text-xs space-y-2 text-blue-200 font-medium">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Subterranean Termite Bait Systems
                </a>
              </li>
              <li>
                <a href="#bedbug-heat" className="hover:text-white transition-colors">
                  Bed Bug 1-Day Thermal Heat Remediation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Rodent Removal & Heavy-Gauge Steel Exclusion
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Humane Wildlife Trapping & Relocation
                </a>
              </li>
              <li>
                <a href="#termite-letter" className="hover:text-white transition-colors">
                  Georgia Real Estate Termite Letter (WDIR-100)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Quarterly Residential Perimeter Shield
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Interactive Price Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase text-white tracking-wider">
              Operating Schedule & Dispatch
            </h4>
            
            <div className="space-y-2 text-xs text-blue-200">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#D9252A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Standard Field Hours:</strong>
                  <span>Mon – Fri: 8:30 AM – 6:30 PM</span>
                  <br />
                  <span>Saturday: 8:30 AM – 3:00 PM</span>
                  <br />
                  <span className="text-[#F87171] font-bold">24/7 Priority Emergency On-Call</span>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2">
                <MapPin className="w-4 h-4 text-[#D9252A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Decatur Headquarters:</strong>
                  <span>Decatur, GA 30030</span>
                  <br />
                  <span className="text-[11px] text-blue-300">Active Service Within 25-Mile Radius</span>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Contact & Payments */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase text-white tracking-wider">
              Direct Phone Dispatch
            </h4>

            <div className="p-4 rounded-xl bg-blue-950/80 border border-blue-800 space-y-2">
              <a
                href="tel:7704827322"
                className="text-lg font-black text-white hover:text-amber-300 transition-colors flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#D9252A]" />
                <span>(770) 482-7322</span>
              </a>
              <p className="text-[11px] text-blue-300">
                Alt Office: (770) 593-8921
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#D9252A] hover:bg-[#b81d22] text-white font-black text-xs uppercase tracking-wider transition-all text-center cursor-pointer shadow-xs"
                >
                  Book Free Inspection
                </button>
              </div>
            </div>

            {/* Payment methods */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 block mb-1.5">
                Accepted Payment Methods:
              </span>
              <div className="flex flex-wrap gap-1 text-[10px] font-black uppercase text-blue-200">
                <span className="px-2 py-0.5 rounded bg-blue-950 border border-blue-800">Visa</span>
                <span className="px-2 py-0.5 rounded bg-blue-950 border border-blue-800">Mastercard</span>
                <span className="px-2 py-0.5 rounded bg-blue-950 border border-blue-800">Amex</span>
                <span className="px-2 py-0.5 rounded bg-blue-950 border border-blue-800">Discover</span>
                <span className="px-2 py-0.5 rounded bg-blue-950 border border-blue-800">Check</span>
                <span className="px-2 py-0.5 rounded bg-blue-950 border border-blue-800">Cash</span>
              </div>
            </div>
          </div>

        </div>

        {/* GitHub Pages & Regulatory Disclosures Bar */}
        <div className="pt-8 border-t border-blue-950 text-xs text-slate-400 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p>
              © {new Date().getFullYear()} First Choice Termite And Pest Control LLC. All rights reserved. 
              Decatur, GA 30030. Georgia Structural Pest Control Applicator Certified.
            </p>

            <div className="flex items-center gap-3 text-blue-300">
              <span className="inline-flex items-center gap-1 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F87171]" />
                <span>GitHub Pages Ready</span>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F87171]" />
                <span>Single-Page Static Build</span>
              </span>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 leading-relaxed">
            Privacy Policy: Customer contact information submitted through this website is exclusively 
            utilized for pest control inspection dispatch and pricing estimates. It is never sold, shared, 
            or rented to third-party marketing entities.
          </p>
        </div>

      </div>
    </footer>
  );
};
