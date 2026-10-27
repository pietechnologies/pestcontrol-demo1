import React, { useState } from 'react';
import { REVIEWS_DATA } from '../data/reviewsData';
import { 
  Star, 
  CheckCircle2,
  Award
} from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'termite' | 'bedbug' | 'wildlife'>('all');

  const filteredReviews = REVIEWS_DATA.filter(rev => {
    if (filter === 'all') return true;
    if (filter === 'termite') return rev.service.toLowerCase().includes('termite');
    if (filter === 'bedbug') return rev.service.toLowerCase().includes('bed bug');
    if (filter === 'wildlife') return rev.service.toLowerCase().includes('wildlife') || rev.service.toLowerCase().includes('rodent');
    return true;
  });

  return (
    <section id="reviews" className="py-16 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-100 text-[#D9252A] text-xs font-black uppercase tracking-wider mb-3 border border-red-200">
            <Award className="w-3.5 h-3.5 text-[#D9252A]" />
            <span>4.9 Star Verified Reputation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Trusted by Hundreds of Decatur Families & Realtors
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Read authentic feedback from property owners and real estate professionals throughout Decatur and Greater Atlanta.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'termite', label: 'Termite & Closing Letters' },
              { id: 'bedbug', label: 'Thermal Bed Bug' },
              { id: 'wildlife', label: 'Rodent & Exclusion' },
            ].map(pill => (
              <button
                key={pill.id}
                onClick={() => setFilter(pill.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  filter === pill.id
                    ? 'bg-[#1D3B8B] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border-2 border-slate-200 hover:border-[#1D3B8B] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Rating & Verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-black text-[#1D3B8B] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                      <CheckCircle2 className="w-3 h-3 text-[#D9252A]" />
                      <span>Verified Client</span>
                    </span>
                  )}
                </div>

                {/* Service Tag */}
                <span className="inline-block text-[11px] font-black uppercase tracking-wide text-[#D9252A] bg-red-50 px-2.5 py-1 rounded">
                  {rev.service}
                </span>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-black text-slate-900 block">{rev.name}</span>
                  <span className="text-slate-500 text-[11px] font-medium">{rev.city}</span>
                </div>
                <span className="text-slate-400 text-[11px] font-medium">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
