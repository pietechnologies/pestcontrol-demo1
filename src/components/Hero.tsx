import React from 'react';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import heroImage from '../assets/pest-control-hero.jpg';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenQuote: () => void;
}

const serviceLinks = [
  { label: 'Termite control', id: 'services' },
  { label: 'Bed bug treatment', id: 'bedbug-heat' },
  { label: 'Rodent control', id: 'services' },
  { label: 'Termite letters', id: 'termite-letter' },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenQuote }) => {
  return (
    <section aria-labelledby="hero-heading" className="overflow-hidden bg-[#f4f6f8] text-[#10264d]">
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div className="max-w-xl">
            <p className="flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.17em] text-[#b72029] sm:text-xs">
              <span className="h-px w-7 bg-[#c9232b]" aria-hidden="true" />
              Local pest control experts
            </p>
            <h1 id="hero-heading" className="mt-5 text-[2.25rem] font-bold leading-[1.08] tracking-[-0.04em] text-[#10264d] min-[360px]:text-[2.5rem] min-[390px]:text-[2.8rem] sm:text-6xl lg:text-[3.25rem] xl:text-[4.25rem]">
              Pest control. <span className="block text-[#c9232b]">Peace of mind.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#526176] sm:text-lg sm:leading-relaxed">
              From termites to unwanted pests, we help protect the places that matter most. Proudly serving Decatur and greater Atlanta for over 25 years.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex cursor-pointer items-center justify-center gap-3 whitespace-nowrap rounded-lg bg-[#c9232b] px-6 py-4 text-sm font-bold text-white shadow-[0_8px_20px_rgba(185,32,40,0.18)] transition-colors hover:bg-[#a91d24] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9232b] lg:px-4 lg:text-[13px] xl:px-6 xl:text-sm"
              >
                Book a free inspection
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={onOpenQuote}
                className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-[#cad2dd] bg-white px-6 py-4 text-sm font-bold text-[#17315d] transition-colors hover:border-[#17315d] hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D3B8B] lg:px-4 lg:text-[13px] xl:px-6 xl:text-sm"
              >
                Get an instant quote
              </button>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#dce2e9] pt-6 text-xs font-semibold text-[#526176] sm:text-sm">
              <span className="flex items-center gap-2"><Check aria-hidden="true" className="h-4 w-4 text-[#c9232b]" /> Licensed & insured</span>
              <span className="flex items-center gap-2"><Check aria-hidden="true" className="h-4 w-4 text-[#c9232b]" /> 25+ years of local experience</span>
            </div>
          </div>

          <div className="relative pb-3 pr-3 sm:pb-4 sm:pr-4">
            <div aria-hidden="true" className="absolute bottom-0 right-0 h-3/4 w-3/4 rounded-[1.5rem] bg-[#1b3970]" />
            <div className="relative overflow-hidden rounded-[1.25rem] bg-[#d9e0e6] shadow-[0_20px_45px_rgba(15,35,75,0.14)]">
              <img
                src={heroImage}
                alt="Pest control technician inspecting the exterior of a home"
                className="aspect-[1.14/1] w-full object-cover object-[58%_center]"
                fetchPriority="high"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl bg-white p-3.5 shadow-lg sm:bottom-6 sm:left-6 sm:right-auto sm:min-w-[260px]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fdf0f0] text-[#c9232b]">
                  <ShieldCheck aria-hidden="true" className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm font-extrabold text-[#10264d]">Local care. Lasting protection.</span>
                  <span className="mt-0.5 block text-xs text-slate-500">Here for your home and family.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-[#e2e7ed] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:gap-10 lg:px-8">
          <p className="shrink-0 text-[11px] font-extrabold uppercase tracking-[0.15em] text-slate-400">Explore our services</p>
          <div className="grid flex-1 grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4">
            {serviceLinks.map((link) => (
              <a key={link.label} href={`#${link.id}`} className="group inline-flex items-center gap-2 text-[13px] font-bold text-[#263753] transition-colors hover:text-[#c9232b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D3B8B]">
                {link.label}
                <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#c9232b] transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
