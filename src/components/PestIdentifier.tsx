import React, { useState } from 'react';
import { PEST_DATABASE } from '../data/pestData';
import { PestCategory, PestInfo } from '../types';
import { 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Search, 
  Activity, 
  FileText 
} from 'lucide-react';

interface PestIdentifierProps {
  onSelectPestForService: (pestName: string) => void;
}

export const PestIdentifier: React.FC<PestIdentifierProps> = ({
  onSelectPestForService
}) => {
  const [selectedCategory, setSelectedCategory] = useState<PestCategory | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPestModal, setSelectedPestModal] = useState<PestInfo | null>(null);

  const categories = [
    { id: 'all', label: 'All Diagnostic Profiles' },
    { id: 'wood-destroying', label: 'Structural Wood-Destroying Organisms' },
    { id: 'health-hazard', label: 'Health & Allergen Parasites' },
    { id: 'wildlife-rodents', label: 'Attic & Crawlspace Structural Infiltrators' },
    { id: 'outdoor-yard', label: 'Perimeter & Stinging Species' }
  ];

  const filteredPests = PEST_DATABASE.filter(pest => {
    const matchesCategory = selectedCategory === 'all' || pest.category === selectedCategory;
    const matchesSearch = pest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pest.symptoms.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
      pest.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDangerBadge = (danger: string) => {
    switch (danger) {
      case 'Critical':
        return 'bg-red-100 text-[#D9252A] border-red-300 font-black';
      case 'High':
        return 'bg-amber-100 text-amber-900 border-amber-300 font-bold';
      default:
        return 'bg-blue-100 text-[#1D3B8B] border-blue-300 font-bold';
    }
  };

  return (
    <section id="pest-id" className="py-16 bg-slate-100 text-slate-900 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#1D3B8B] text-xs font-black uppercase tracking-wider mb-3 border border-blue-200">
            <Activity className="w-3.5 h-3.5 text-[#D9252A]" />
            <span>Technical Diagnostic Authority</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Property Infestation Diagnostic Guide
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Distinguish between subterranean termites vs carpenter ants, or bed bug welts vs dermatitis. 
            Identify evidence patterns with our Decatur field diagnostic index and learn why retail grocery store sprays fail to eliminate root colonies.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search symptom (e.g. frass, mud tubes, attic scurrying)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-[#1D3B8B]"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#1D3B8B] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Diagnostic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPests.map((pest) => (
            <div
              key={pest.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col group hover:border-[#1D3B8B]"
            >
              {/* Image Box */}
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={pest.imageUrl}
                  alt={pest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 right-2.5">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] border ${getDangerBadge(pest.dangerLevel)}`}>
                    {pest.dangerLevel} Threat Level
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#1D3B8B] transition-colors">
                    {pest.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 font-medium">
                    {pest.tagline}
                  </p>

                  {/* Symptoms quick list */}
                  <div className="mt-3 space-y-1.5">
                    <p className="text-[11px] font-black text-slate-700 uppercase tracking-wider">
                      Physical Evidence:
                    </p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {pest.symptoms.slice(0, 2).map((symp, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D9252A] mt-1.5 shrink-0"></span>
                          <span className="line-clamp-1">{symp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedPestModal(pest)}
                    className="flex-1 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#1D3B8B] text-xs font-bold transition-all text-center cursor-pointer"
                  >
                    View Diagnostic
                  </button>
                  <button
                    onClick={() => onSelectPestForService(pest.name)}
                    className="py-2 px-3.5 rounded-lg bg-[#D9252A] hover:bg-[#b81d22] text-white text-xs font-black uppercase tracking-wide transition-all cursor-pointer shadow-xs"
                    title="Book inspection for this condition"
                  >
                    Treat
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for In-Depth Diagnostic Profile */}
        {selectedPestModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-7 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-5 border border-slate-200">
              <div className="flex items-start justify-between pb-4 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs border ${getDangerBadge(selectedPestModal.dangerLevel)}`}>
                      {selectedPestModal.dangerLevel} Threat Level
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">Decatur & Greater Atlanta Region</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">
                    {selectedPestModal.name}
                  </h3>
                  <p className="text-xs text-[#1D3B8B] font-bold">{selectedPestModal.tagline}</p>
                </div>
                <button
                  onClick={() => setSelectedPestModal(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer text-lg font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Symptoms Checklist */}
              <div>
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#1D3B8B]" />
                  <span>Documented Structural Evidence & Indicators</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedPestModal.symptoms.map((s, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#1D3B8B] shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Identification Tips */}
              <div>
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-1.5">
                  Morphological & Activity Identification:
                </h4>
                <ul className="text-xs text-slate-600 space-y-1">
                  {selectedPestModal.identificationTips.map((tip, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* DIY Warning */}
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-950">
                <div className="flex items-center gap-1.5 font-black mb-1 text-[#D9252A]">
                  <AlertTriangle className="w-4 h-4 text-[#D9252A]" />
                  <span>Why Over-the-Counter Retail Sprays Exacerbate the Problem:</span>
                </div>
                <p>{selectedPestModal.diyWarning}</p>
              </div>

              {/* Treatment Protocol */}
              <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950">
                <span className="font-black block text-[#1D3B8B] mb-1">
                  First Choice Certified Treatment Protocol:
                </span>
                <p>{selectedPestModal.treatmentSummary}</p>
              </div>

              {/* Footer CTA */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedPestModal(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const pestName = selectedPestModal.name;
                    setSelectedPestModal(null);
                    onSelectPestForService(pestName);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#D9252A] hover:bg-[#b81d22] text-white font-black text-xs uppercase tracking-wide shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Targeted Protocol</span>
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
