import React, { useState } from 'react';
import { SERVICE_AREAS } from '../data/serviceAreasData';
import { 
  MapPin, 
  CheckCircle2, 
  Search, 
  Clock, 
  Navigation, 
  PhoneCall, 
  ArrowRight 
} from 'lucide-react';

interface ServiceAreaCheckerProps {
  onScheduleForArea: (zip: string) => void;
}

export const ServiceAreaChecker: React.FC<ServiceAreaCheckerProps> = ({
  onScheduleForArea
}) => {
  const [query, setQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState<any>(SERVICE_AREAS[0]);

  const matches = SERVICE_AREAS.filter(area => 
    area.city.toLowerCase().includes(query.toLowerCase()) || 
    area.zip.includes(query) ||
    area.county.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="service-area" className="py-16 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#1D3B8B] text-xs font-black uppercase tracking-wider mb-3 border border-blue-200">
            <Navigation className="w-3.5 h-3.5 text-[#D9252A]" />
            <span>25-Mile Decatur Dispatch Radius</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Check Your Neighborhood Coverage & Dispatch Time
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Headquartered in Decatur, GA (30030), our licensed exterminators provide same-day 
            and next-day priority dispatch across DeKalb, Fulton, Gwinnett, and Rockdale counties.
          </p>
        </div>

        {/* Search & Results Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Search & Interactive List */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Enter Decatur or Atlanta ZIP (e.g. 30030, 30084, 30303) or city name..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#1D3B8B]"
              />
            </div>

            {/* Coverage List */}
            <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto pr-1">
              {matches.length > 0 ? (
                matches.map((area) => (
                  <div
                    key={area.zip}
                    onClick={() => setSelectedArea(area)}
                    className={`p-3 rounded-xl flex items-center justify-between cursor-pointer transition-all ${
                      selectedArea.zip === area.zip 
                        ? 'bg-blue-50 border-2 border-[#1D3B8B]' 
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#1D3B8B] text-white flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                        GA
                      </div>
                      <div>
                        <span className="text-sm font-extrabold text-slate-900 block">{area.city}</span>
                        <span className="text-xs text-slate-500 font-medium">{area.county} • ZIP: {area.zip}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-xs font-black text-[#D9252A]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Active Zone</span>
                      </span>
                      <span className="block text-[11px] text-slate-500 font-medium">{area.dispatchTime}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center text-slate-500 text-xs">
                  <p className="font-bold text-slate-700">Can't find your specific ZIP?</p>
                  <p className="mt-1">
                    If you are within 25 miles of Decatur, GA, our field units can almost certainly service your property!
                  </p>
                  <a href="tel:7704827322" className="mt-2 inline-block font-black text-[#D9252A] underline">
                    Call (770) 482-7322 to confirm immediate route
                  </a>
                </div>
              )}
            </div>

            {/* Quick Links for major cities */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5 text-xs">
              <span className="text-slate-400 py-1 font-bold">Quick Select:</span>
              {['Decatur', 'Atlanta', 'Tucker', 'Stone Mountain', 'Brookhaven', 'Dunwoody'].map(c => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setQuery(c)}
                  className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-[#1D3B8B] font-bold cursor-pointer"
                >
                  {c}
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Local Response Confirmation Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#10234E] to-[#0A1633] text-white rounded-2xl border-2 border-blue-900 p-6 sm:p-7 shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-blue-900">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D9252A] animate-ping"></span>
                <span className="text-xs font-black uppercase text-blue-200">Technicians In Area</span>
              </div>
              <span className="text-xs text-blue-300 font-bold">Decatur HQ Zone</span>
            </div>

            {selectedArea && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-black text-white">
                    {selectedArea.city}
                  </h3>
                  <p className="text-xs text-[#F87171] font-black mt-0.5 uppercase tracking-wider">
                    {selectedArea.county} • Active Zone ({selectedArea.zip})
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-blue-950/80 border border-blue-800/80 space-y-2 text-xs">
                  <div className="flex justify-between items-center text-blue-200">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#F87171]" />
                      <span>Estimated Arrival Window:</span>
                    </span>
                    <strong className="text-white font-bold">{selectedArea.dispatchTime}</strong>
                  </div>
                  <div className="flex justify-between items-center text-blue-200">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#F87171]" />
                      <span>Radius From Decatur:</span>
                    </span>
                    <strong className="text-white font-bold">Within 25 Miles</strong>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-blue-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F87171] shrink-0" />
                    <span>Georgia Department of Agriculture Certified Applicator</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F87171] shrink-0" />
                    <span>Free On-Site Assessment & Written Estimate</span>
                  </div>
                </div>

                <div className="pt-2 space-y-2.5">
                  <button
                    type="button"
                    onClick={() => onScheduleForArea(selectedArea.zip)}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#D9252A] hover:bg-[#b81d22] text-white font-black text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Schedule Free Inspection in {selectedArea.city}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="tel:7704827322"
                    className="w-full py-2.5 px-4 rounded-xl bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 border border-blue-800"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#F87171]" />
                    <span>Call Local Dispatch: (770) 482-7322</span>
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
