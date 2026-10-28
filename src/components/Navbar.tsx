import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  MapPin,
  Menu,
  Phone,
  X,
} from 'lucide-react';
import { LOGO_PRIMARY_URL } from '../assets/logo';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenQuote: () => void;
  isAuditActive: boolean;
  onToggleAudit: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

const serviceLinks = [
  { id: 'services', label: 'All pest control services', detail: 'Protection for your home or business' },
  { id: 'bedbug-heat', label: 'Bed bug treatment', detail: 'Learn about our heat treatment' },
  { id: 'termite-letter', label: 'Georgia termite letters', detail: 'Inspections for real estate closings' },
  { id: 'pest-id', label: 'Pest identification guide', detail: 'Find out what you are dealing with' },
];

const mobileLinks = [
  { id: 'services', label: 'All services' },
  { id: 'bedbug-heat', label: 'Bed bug treatment' },
  { id: 'termite-letter', label: 'Georgia termite letters' },
  { id: 'pest-id', label: 'Pest identification guide' },
  { id: 'pricing', label: 'Plans & pricing' },
  { id: 'service-area', label: 'Service area' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'Frequently asked questions' },
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenQuote,
  isAuditActive,
  onToggleAudit,
  onNavigateToSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
        setServicesOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (mobileMenuOpen) mobileMenuButtonRef.current?.focus();
        if (servicesOpen) servicesButtonRef.current?.focus();
        setMobileMenuOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen, servicesOpen]);

  const navigate = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    setMobileMenuOpen(false);
    setServicesOpen(false);
    onNavigateToSection(sectionId);
  };

  const toggleAudit = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    onToggleAudit();
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-40 bg-white shadow-[0_1px_10px_rgba(15,35,75,0.07)]">
      {/* A quiet utility bar keeps location and the demo audit out of the main navigation. */}
      <div className="bg-[#10264d] text-white">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2 text-[11px] font-medium text-blue-100 sm:text-xs">
            <MapPin aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#f18a8a]" />
            <span className="min-[360px]:hidden">Serving Greater Atlanta</span>
            <span className="hidden truncate min-[360px]:inline">Serving Decatur & Greater Atlanta</span>
          </div>
          <div className="flex shrink-0 items-center gap-5 text-xs">
            <span className="hidden text-blue-100/80 md:inline">Licensed & insured <span className="mx-2 text-blue-300/50">|</span> 25+ years of experience</span>
            <button
              type="button"
              onClick={toggleAudit}
              className="cursor-pointer font-semibold text-white/85 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {isAuditActive ? 'Return to website' : 'Website audit'}
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between gap-5 sm:h-[84px]">
          <a
            href="#top"
            onClick={(event) => navigate(event, 'top')}
            aria-label="First Choice Pest Control home"
            className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D3B8B]"
          >
            <img
              src={LOGO_PRIMARY_URL}
              alt="First Choice Pest Control"
              className="h-auto w-[142px] object-contain sm:w-[165px]"
            />
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-6 text-[13px] font-bold text-[#263753] xl:flex">
            <div className="relative">
              <button
                ref={servicesButtonRef}
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="desktop-services-menu"
                onClick={() => setServicesOpen((open) => !open)}
                className="flex cursor-pointer items-center gap-1 py-3 transition-colors hover:text-[#c9232b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D3B8B]"
              >
                Services
                <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div id="desktop-services-menu" className="absolute left-[-18px] top-full z-50 mt-3 w-[300px] rounded-xl border border-slate-200 bg-white p-2 shadow-[0_18px_45px_rgba(15,35,75,0.16)]">
                  <p className="px-3 pb-1 pt-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-400">Explore our services</p>
                  {serviceLinks.map((link) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={(event) => navigate(event, link.id)}
                      className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:outline-2 focus-visible:outline-[#1D3B8B]"
                    >
                      <span className="block text-[13px] font-bold text-[#172b4d]">{link.label}</span>
                      <span className="mt-0.5 block text-xs font-normal text-slate-500">{link.detail}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="#pricing" onClick={(event) => navigate(event, 'pricing')} className="whitespace-nowrap transition-colors hover:text-[#c9232b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D3B8B]">Plans & pricing</a>
            <a href="#service-area" onClick={(event) => navigate(event, 'service-area')} className="whitespace-nowrap transition-colors hover:text-[#c9232b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D3B8B]">Service area</a>
            <a href="#reviews" onClick={(event) => navigate(event, 'reviews')} className="transition-colors hover:text-[#c9232b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D3B8B]">Reviews</a>
            <button type="button" onClick={() => { setServicesOpen(false); onOpenQuote(); }} className="cursor-pointer whitespace-nowrap transition-colors hover:text-[#c9232b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D3B8B]">Instant quote</button>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <a href="tel:7704827322" className="hidden items-center gap-2.5 text-[#172b4d] xl:flex" aria-label="Call First Choice at (770) 482-7322">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2f5fa] text-[#c9232b]"><Phone aria-hidden="true" className="h-4 w-4" /></span>
              <span className="leading-tight">
                <span className="block text-[10px] font-semibold text-slate-500">Call our team</span>
                <span className="block whitespace-nowrap text-[13px] font-extrabold">(770) 482-7322</span>
              </span>
            </a>
            <button
              type="button"
              onClick={() => { setMobileMenuOpen(false); setServicesOpen(false); onOpenBooking(); }}
              className="hidden cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#c9232b] px-4 py-3.5 text-[13px] font-bold text-white transition-colors hover:bg-[#a91d24] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9232b] sm:inline-flex"
            >
              Free inspection <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
            <a
              href="tel:7704827322"
              aria-label="Call First Choice at (770) 482-7322"
              className="flex h-11 w-11 items-center justify-center rounded-lg text-[#c9232b] transition-colors hover:bg-red-50 sm:hidden"
            >
              <Phone aria-hidden="true" className="h-5 w-5" />
            </a>
            <button
              ref={mobileMenuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-[#172b4d] transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D3B8B] xl:hidden"
            >
              {mobileMenuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-navigation" className="max-h-[calc(100dvh-11.5rem)] overflow-y-auto overscroll-contain border-t border-slate-100 bg-white px-4 pb-5 shadow-lg sm:px-6 xl:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl py-2">
            {mobileLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => navigate(event, link.id)}
                className="flex items-center justify-between border-b border-slate-100 py-3 text-sm font-semibold text-[#263753] transition-colors hover:text-[#c9232b] focus-visible:outline-2 focus-visible:outline-[#1D3B8B]"
              >
                {link.label}
                <ArrowRight aria-hidden="true" className="h-4 w-4 text-slate-400" />
              </a>
            ))}
          </nav>
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
              className="cursor-pointer rounded-lg border border-slate-300 px-3 py-3 text-sm font-bold text-[#172b4d] hover:bg-slate-50"
            >
              Instant quote
            </button>
            <button
              type="button"
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="cursor-pointer rounded-lg bg-[#c9232b] px-3 py-3 text-sm font-bold text-white hover:bg-[#a91d24]"
            >
              Free inspection
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
