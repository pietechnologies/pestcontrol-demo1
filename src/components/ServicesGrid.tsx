import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceInfo } from '../types';
import { 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  FileCheck,
  Home,
  Thermometer
} from 'lucide-react';

interface ServicesGridProps {
  onSelectServiceForBooking: (serviceName: string) => void;
  onSelectServiceForQuote?: (serviceName: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onSelectServiceForBooking
}) => {
  const [activeModalService, setActiveModalService] = useState<ServiceInfo | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldCheck className="w-6 h-6 text-[#D9252A]" />;
      case 'Flame':
        return <Thermometer className="w-6 h-6 text-[#D9252A]" />;
      case 'Sparkles':
        return <Layers className="w-6 h-6 text-[#1D3B8B]" />;
      case 'Trees':
        return <Award className="w-6 h-6 text-[#1D3B8B]" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-[#D9252A]" />;
      default:
        return <Home className="w-6 h-6 text-[#1D3B8B]" />;
    }
  };

  return (
    <section id="services" className="py-16 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#1D3B8B] text-xs font-black uppercase tracking-wider mb-3 border border-blue-200">
            <Award className="w-3.5 h-3.5 text-[#D9252A]" />
            <span>25+ Years of Decatur Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Complete Termite, Pest & Structural Defense
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            From single-family homes and historic Decatur residences to commercial properties, 
            our certified technicians deploy targeted treatments backed by our 100% satisfaction guarantee.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl border-2 border-slate-200 hover:border-[#1D3B8B] p-6 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Header row */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-red-50 flex items-center justify-center transition-colors border border-blue-100">
                    {getIcon(srv.iconName)}
                  </div>
                  {srv.badge && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-red-100 text-[#D9252A] border border-red-200">
                      {srv.badge}
                    </span>
                  )}
                </div>

                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#1D3B8B]">
                    {srv.tag}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 mt-0.5 group-hover:text-[#1D3B8B] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {srv.shortDesc}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {srv.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D9252A] shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Response / Warranty pill */}
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-semibold">Dispatch Window:</span>
                    <strong className="text-slate-900">{srv.responseTime}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-semibold">Warranty:</span>
                    <strong className="text-[#1D3B8B] font-bold">{srv.warranty}</strong>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onSelectServiceForBooking(srv.title)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#D9252A] hover:bg-[#b81d22] text-white font-black text-xs uppercase tracking-wider shadow-xs transition-all text-center cursor-pointer"
                >
                  Schedule Inspection
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModalService(srv)}
                  className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#1D3B8B] font-bold text-xs transition-all cursor-pointer"
                  title="View full service protocol"
                >
                  Details
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for In-Depth Service Details */}
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-5 border border-slate-200">
              <div className="flex items-start justify-between pb-4 border-b border-slate-200">
                <div>
                  <span className="text-xs font-black uppercase text-[#D9252A]">
                    {activeModalService.tag}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-0.5">
                    {activeModalService.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalService(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer text-lg font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>{activeModalService.fullDesc}</p>
                
                <div className="pt-2">
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-2">
                    Service Protocols & Standards:
                  </h4>
                  <ul className="space-y-1.5">
                    {activeModalService.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D9252A] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Service Guarantee:</span>
                    <strong className="text-[#1D3B8B] font-bold">{activeModalService.warranty}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Starting Price:</span>
                    <strong className="text-slate-900 font-bold">{activeModalService.startingPrice}</strong>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = activeModalService.title;
                    setActiveModalService(null);
                    onSelectServiceForBooking(title);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#D9252A] hover:bg-[#b81d22] text-white font-black text-xs uppercase tracking-wide shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Free Inspection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
