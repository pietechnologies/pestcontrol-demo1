import React, { useState } from 'react';
import { 
  MapPin, 
  Award 
} from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  location: string;
  service: string;
  problem: string;
  solution: string;
  result: string;
  imageUrlBefore: string;
  imageUrlAfter: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'Historic Decatur Craftsman Crawl Space Termite Recovery',
    location: 'Decatur, GA (Great Lakes neighborhood)',
    service: 'Subterranean Termite Baiting & Barrier',
    problem: 'Active subterranean mud tubes scaling concrete crawl space piers beneath historic hardwood living room flooring.',
    solution: 'Installed Termidor® precision injection soil barrier and 18 perimeter bait monitoring stations around the foundation.',
    result: 'Zero live colony activity at 30-day follow-up. 1-Year Structural Re-treatment Bond issued.',
    imageUrlBefore: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
    imageUrlAfter: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cs-2',
    title: 'Attic Structural Rodent & Wildlife Exclusion Proofing',
    location: 'Atlanta / Oakhurst, GA',
    service: 'Heavy-Gauge Steel Mesh Exclusion & Sanitation',
    problem: 'Roofline fascia gaps chewed through by rodents, contaminating blown-in attic insulation with droppings.',
    solution: 'Humane live-trapping and relocation 18 miles into state forest. Sealed 14 entry points with galvanized steel cloth and high-temp silicone sealant.',
    result: '100% rodent-free attic confirmed by motion sensors for 12 months running.',
    imageUrlBefore: 'https://images.unsplash.com/photo-1504006833117-8886a355efbf?auto=format&fit=crop&w=600&q=80',
    imageUrlAfter: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cs-3',
    title: 'Multi-Room Bed Bug Thermal Eradication',
    location: 'Tucker, GA',
    service: 'Thermal Heat Remediation Protocol (1-Day)',
    problem: 'Infestation in 3 bedrooms that failed 4 successive chemical treatments from a competing franchise.',
    solution: 'Deployed 4 industrial thermal heaters, raising ambient room temperature to 132°F for 7 consecutive hours.',
    result: 'Complete 100% kill of all nymphs, adults, and eggs in a single day. Family slept in their beds that evening.',
    imageUrlBefore: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=600&q=80',
    imageUrlAfter: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80'
  }
];

export const BeforeAfterShowcase: React.FC = () => {
  const [activeStudy, setActiveStudy] = useState<CaseStudy>(CASE_STUDIES[0]);

  return (
    <section className="py-16 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#1D3B8B] text-xs font-black uppercase tracking-wider mb-3 border border-blue-200">
            <Award className="w-3.5 h-3.5 text-[#D9252A]" />
            <span>Proven Real-World Field Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Case Studies & Structural Proof
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            See how First Choice protects Decatur & Atlanta properties from catastrophic termite damage, 
            persistent bed bug infestations, and structural attic infiltrations.
          </p>
        </div>

        {/* Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {CASE_STUDIES.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveStudy(study)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activeStudy.id === study.id
                  ? 'bg-[#1D3B8B] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {study.title.split(' ')[0]} {study.title.split(' ')[1]} ({study.location.split(',')[0]})
            </button>
          ))}
        </div>

        {/* Active Showcase Card */}
        <div className="bg-slate-50 rounded-2xl border-2 border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-black text-[#1D3B8B]">
                <MapPin className="w-3.5 h-3.5 text-[#D9252A]" />
                <span>{activeStudy.location}</span>
                <span>•</span>
                <span className="uppercase text-slate-500">{activeStudy.service}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {activeStudy.title}
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200">
                  <strong className="text-[#D9252A] block font-black mb-0.5">Identified Threat:</strong>
                  <span>{activeStudy.problem}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200">
                  <strong className="text-[#1D3B8B] block font-black mb-0.5">First Choice Treatment:</strong>
                  <span>{activeStudy.solution}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200">
                  <strong className="text-[#1D3B8B] block font-black mb-0.5">Verified Final Clearance:</strong>
                  <span>{activeStudy.result}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Preview */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <span className="text-[11px] font-black uppercase text-[#D9252A] tracking-wider">
                  Initial Evidence
                </span>
                <div className="rounded-xl overflow-hidden aspect-4/3 border-2 border-red-200">
                  <img
                    src={activeStudy.imageUrlBefore}
                    alt="Infestation area before treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-black uppercase text-[#1D3B8B] tracking-wider">
                  Post-Treatment Clearance
                </span>
                <div className="rounded-xl overflow-hidden aspect-4/3 border-2 border-blue-200">
                  <img
                    src={activeStudy.imageUrlAfter}
                    alt="Property protected after treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
