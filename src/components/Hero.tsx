import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  PhoneCall, 
  Calendar, 
  Calculator, 
  Star, 
  ArrowRight,
  Sparkles,
  MapPin,
  Target,
  FileCheck,
  Layers,
  Award
} from 'lucide-react';
import { LOGO_PRIMARY_URL, LOGO_FALLBACK_URL } from '../assets/logo';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenQuote: (initialPest?: string) => void;
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenQuote,
  onOpenAudit
}) => {
  // Professional service categories with enterprise icons (no random bugs or cartoon pets)
  const quickCategories = [
    { 
      name: 'Termite Defense', 
      icon: ShieldCheck, 
      tag: 'Bait Stations & Warranty', 
      key: 'termites' 
    },
    { 
      name: 'Thermal Bed Bug', 
      icon: Target, 
      tag: '1-Day 100% Heat Kill', 
      key: 'bedbugs' 
    },
    { 
      name: 'Rodent Exclusion', 
      icon: Layers, 
      tag: 'Attic & Crawl Steel Proofing', 
      key: 'rodents' 
    },
    { 
      name: 'Real Estate Letters', 
      icon: FileCheck, 
      tag: 'Georgia Official WDIR-100', 
      key: 'termite-letter' 
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0E1E45] via-[#122659] to-[#0D1C3F] text-white pt-8 pb-16 lg:pt-12 lg:pb-20">
      {/* Dynamic Brand Orbit Accents (reflecting the logo's orbital sweep) */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-4 border-[#D9252A]/20 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border-2 border-blue-400/10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-bold backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-[#D9252A] animate-ping"></span>
            <span>Decatur, GA (30030) • 25+ Years Greater Atlanta Service</span>
          </div>

          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-400/20 hover:bg-amber-400/30 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-extrabold transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Competitor Audit & Gap Matrix</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Logo Highlight Card on Mobile & Desktop */}
            <div className="inline-flex items-center gap-3 bg-white p-2.5 rounded-2xl shadow-xl border border-slate-200">
              <img 
                src={LOGO_PRIMARY_URL} 
                onError={(e) => {
                  e.currentTarget.src = LOGO_FALLBACK_URL;
                }}
                alt="First Choice Pest Control LLC" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <div className="pr-3 border-l border-slate-200 pl-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#D9252A] block">
                  Official Georgia Certified
                </span>
                <span className="text-xs font-black text-[#1D3B8B]">
                  Residential & Commercial Exterminators
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Greater Atlanta’s{' '}
              <span className="text-[#F87171] underline decoration-[#D9252A] decoration-4 underline-offset-8">
                First Choice
              </span>{' '}
              for Termite & Pest Elimination
            </h1>

            <p className="text-base sm:text-lg text-blue-100 max-w-2xl leading-relaxed">
              Protecting homes, families, and commercial properties across Decatur and the Atlanta Metro for over <strong className="text-white font-black">25+ years</strong>. 
              Subterranean termite bait barriers, single-day thermal bed bug heat remediation, humane wildlife exclusion, and guaranteed 100% re-treatment warranties.
            </p>

            {/* Quick CTAs with First Choice Red & Navy */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#D9252A] hover:bg-[#b81d22] text-white font-black text-base shadow-lg shadow-red-700/30 hover:shadow-xl hover:shadow-red-700/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer uppercase tracking-wider"
              >
                <Calculator className="w-5 h-5" />
                <span>Calculate Instant Price</span>
              </button>

              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white hover:bg-blue-50 text-[#1D3B8B] font-black text-base shadow-md transition-all cursor-pointer uppercase tracking-wide border-2 border-white"
              >
                <Calendar className="w-5 h-5 text-[#D9252A]" />
                <span>Schedule Inspection</span>
              </button>

              <a
                href="tel:7704827322"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-red-950/70 hover:bg-red-900 border border-red-500/50 text-white font-bold text-base transition-all sm:hidden"
              >
                <PhoneCall className="w-5 h-5 text-red-400" />
                <span>(770) 482-7322</span>
              </a>
            </div>

            {/* Professional Service Quick Selectors (Clean & Professional, No Random Bugs/Pets) */}
            <div className="pt-4 border-t border-blue-900/60">
              <p className="text-xs font-black uppercase tracking-wider text-blue-200 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D9252A]" />
                Select specialized treatment division for instant estimation:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {quickCategories.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => onOpenQuote(item.name)}
                      className="flex flex-col items-start p-3 rounded-xl bg-blue-950/60 hover:bg-blue-900/80 border border-blue-700/50 hover:border-[#D9252A] transition-all text-left group cursor-pointer"
                    >
                      <div className="flex items-center gap-2 text-white group-hover:text-amber-300 font-extrabold text-xs sm:text-sm">
                        <Icon className="w-4 h-4 text-[#D9252A] group-hover:scale-110 transition-transform" />
                        <span>{item.name}</span>
                      </div>
                      <span className="text-[11px] text-blue-300 mt-1 leading-tight">
                        {item.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Trust Proof Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-blue-200 text-xs font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9252A] shrink-0" />
                <span>Georgia Dept of Ag Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9252A] shrink-0" />
                <span>Pet & Family Safe IPM</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9252A] shrink-0" />
                <span>100% Free Re-treatment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9252A] shrink-0" />
                <span>24/7 Priority Dispatch</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-[#0A1633] border-2 border-blue-800/80 p-5 sm:p-6 shadow-2xl">
              
              {/* Image with overlay badge */}
              <div className="relative rounded-xl overflow-hidden mb-5 aspect-4/3 border border-slate-700">
                <img
                  src="https://images.pexels.com/photos/8293678/pexels-photo-8293678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="First Choice Pest Control licensed technician inspecting property foundation"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"></div>

                <div className="absolute top-3 right-3 bg-white/95 px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 text-xs font-black text-[#1D3B8B]">
                  <ShieldCheck className="w-4 h-4 text-[#D9252A]" />
                  <span>Licensed Structural Applicator</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white bg-slate-950/80 backdrop-blur-md p-2.5 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#D9252A]" />
                    <span className="font-bold">Decatur HQ (30030)</span>
                  </div>
                  <span className="text-amber-300 font-extrabold">Active Technicians Nearby</span>
                </div>
              </div>

              {/* Service Highlights Box */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between pb-3 border-b border-blue-900">
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="font-black text-sm text-white">4.9 / 5.0</span>
                  </div>
                  <span className="text-xs text-blue-200 font-semibold">25+ Years in DeKalb & Atlanta</span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-blue-100">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[#D9252A] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Same-Day Emergency Dispatch</strong> available for structural wood-destroying infestations and acute incursions.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <FileCheck className="w-4 h-4 text-[#D9252A] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Official GA Closing Clearance Letter:</strong> Guaranteed 24-hr turnaround for mortgage closings.
                    </span>
                  </div>
                </div>

                {/* Instant Call Card */}
                <div className="pt-2">
                  <a
                    href="tel:7704827322"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#D9252A] hover:bg-[#c21e23] text-white transition-all shadow-md group"
                  >
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-red-100">
                        Speak With Senior Decatur Inspector
                      </p>
                      <p className="text-lg font-black text-white tracking-tight">
                        (770) 482-7322
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white text-[#D9252A] flex items-center justify-center font-bold shadow-xs group-hover:scale-110 transition-transform">
                      <PhoneCall className="w-5 h-5 fill-[#D9252A]" />
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
