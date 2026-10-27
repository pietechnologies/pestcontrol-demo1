import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  PhoneCall, 
  ArrowRight, 
  Thermometer, 
  Award 
} from 'lucide-react';

interface BedBugHeatSectionProps {
  onBookBedBugService: () => void;
}

export const BedBugHeatSection: React.FC<BedBugHeatSectionProps> = ({
  onBookBedBugService
}) => {
  const [roomCount, setRoomCount] = useState<number>(2);

  const comparisons = [
    {
      metric: 'Treatment Duration',
      heat: '1 Single Day (6–8 hours total)',
      heatGood: true,
      chemical: '3 to 6 Weeks with repeated visits',
      chemicalGood: false,
    },
    {
      metric: 'Egg Stage Eradication',
      heat: '100% Lethal (Penetrates egg chorion shells)',
      heatGood: true,
      chemical: '0% (Insecticide formulas cannot penetrate eggs)',
      chemicalGood: false,
    },
    {
      metric: 'Furniture & Mattress Preservation',
      heat: 'Keep mattresses and upholstered furniture intact',
      heatGood: true,
      chemical: 'Frequently forced to dispose of costly mattresses',
      chemicalGood: false,
    },
    {
      metric: 'Chemical Toxicity & Indoor Residues',
      heat: 'Zero Toxic Residues (Pure elevated temperature)',
      heatGood: true,
      chemical: 'Pesticide liquid sprays on beds, baseboards & carpets',
      chemicalGood: false,
    },
    {
      metric: 'Pesticide Genetic Resistance',
      heat: 'Impossible to mutate resistance to 125°F+ heat',
      heatGood: true,
      chemical: 'Documented widespread pyrethroid resistance',
      chemicalGood: false,
    },
    {
      metric: 'Sleep in your bed tonight?',
      heat: 'Yes, that very same evening!',
      heatGood: true,
      chemical: 'No, prolonged chemical retreats required',
      chemicalGood: false,
    }
  ];

  return (
    <section id="bedbug-heat" className="py-16 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-100 text-[#D9252A] text-xs font-black uppercase tracking-wider mb-3 border border-red-200">
            <Thermometer className="w-3.5 h-3.5 text-[#D9252A]" />
            <span>Specialized High-Performance Thermal Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            1-Day Bed Bug Thermal Heat Remediation
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Eliminate infestation anxiety in 24 hours. While standard chemical treatments require weeks of disruptive spraying, 
            our specialized industrial thermal heating units eradicate 100% of adults, nymphs, and eggs in a single visit.
          </p>
        </div>

        {/* Interactive Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Comparison Table */}
          <div className="lg:col-span-8 bg-slate-50 rounded-2xl border-2 border-slate-200 p-5 sm:p-7 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
              <span className="text-xs font-black uppercase tracking-wider text-slate-500">Protocol Comparison</span>
              <span className="text-xs font-black text-[#1D3B8B] bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
                Decatur Thermal Standard
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[11px]">
                    <th className="pb-3 font-black">Evaluation Criteria</th>
                    <th className="pb-3 font-black text-[#D9252A] flex items-center gap-1">
                      <Thermometer className="w-3.5 h-3.5" />
                      <span>First Choice Thermal Heat</span>
                    </th>
                    <th className="pb-3 font-bold text-slate-600">
                      Standard Chemical Spray
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80">
                  {comparisons.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-100/60 transition-colors">
                      <td className="py-3.5 pr-3 font-bold text-slate-800">
                        {row.metric}
                      </td>
                      <td className="py-3.5 pr-3 font-bold text-[#1D3B8B]">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-[#D9252A] shrink-0" />
                          <span>{row.heat}</span>
                        </div>
                      </td>
                      <td className="py-3.5 text-slate-600">
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <XCircle className="w-4 h-4 text-slate-400 shrink-0" />
                          <span>{row.chemical}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-[#1D3B8B] flex items-start gap-2.5">
              <Award className="w-4 h-4 text-[#D9252A] shrink-0 mt-0.5" />
              <span>
                <strong>Field Proven Fact:</strong> Modern Georgia strains exhibit high genetic resistance to pyrethroid sprays. Thermal remediation operates purely through thermal denaturation at 122°F–135°F, penetrating deep into wall voids and mattress seams.
              </span>
            </div>
          </div>

          {/* Quick Bed Bug Relief Card in First Choice Brand Colors */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#10234E] to-[#0A1633] text-white rounded-2xl border-2 border-[#1D3B8B] p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-blue-900">
              <span className="text-xs font-black uppercase text-[#F87171]">Priority Dispatch</span>
              <span className="text-[11px] font-bold text-blue-200">Decatur & Metro Atlanta</span>
            </div>

            <div>
              <h3 className="text-xl font-black text-white">How many rooms require remediation?</h3>
              <p className="text-xs text-blue-200 mt-1">
                We calibrate specialized thermal ducting and wireless heat sensors per zone.
              </p>
            </div>

            {/* Room Selector */}
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setRoomCount(count)}
                  className={`flex-1 py-2 rounded-lg text-xs font-black transition-all cursor-pointer ${
                    roomCount === count
                      ? 'bg-[#D9252A] text-white shadow-sm ring-2 ring-red-400'
                      : 'bg-blue-950 text-blue-200 hover:bg-blue-900 border border-blue-800'
                  }`}
                >
                  {count} {count === 1 ? 'Rm' : 'Rms'}
                </button>
              ))}
            </div>

            {/* Room Estimation Note */}
            <div className="p-3.5 rounded-xl bg-[#071026] border border-blue-800/60 text-xs space-y-1.5">
              <div className="flex justify-between text-blue-200">
                <span>Thermal Deployment Cycle:</span>
                <span className="font-bold text-white">6 – 8 Hours (Single Day)</span>
              </div>
              <div className="flex justify-between text-blue-200">
                <span>Warranty Period:</span>
                <span className="font-bold text-amber-300">60-Day Pest-Free Guarantee</span>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={onBookBedBugService}
                className="w-full py-3.5 px-4 rounded-xl bg-[#D9252A] hover:bg-[#b81d22] text-white font-black text-sm uppercase tracking-wide shadow-lg shadow-red-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Thermal Heat Inspection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:7704827322"
                className="w-full py-3 px-4 rounded-xl bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 border border-blue-700"
              >
                <PhoneCall className="w-4 h-4 text-[#F87171]" />
                <span>Call Hotline: (770) 482-7322</span>
              </a>
            </div>

            <p className="text-[11px] text-blue-300 text-center">
              Discreet unmarked service vehicles available upon client request.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
