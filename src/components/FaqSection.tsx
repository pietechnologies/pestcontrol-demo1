import React, { useState } from 'react';
import { FAQS_DATA } from '../data/faqsData';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  PhoneCall 
} from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Safety', 'Termites', 'Bed Bugs', 'Pricing', 'General'];

  const filteredFaqs = FAQS_DATA.filter(faq => {
    if (activeCategory === 'All') return true;
    return faq.category === activeCategory;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#1D3B8B] text-xs font-black uppercase tracking-wider mb-3 border border-blue-200">
            <HelpCircle className="w-3.5 h-3.5 text-[#D9252A]" />
            <span>Clear Answers & Guarantees</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Essential information regarding treatment protocols, family safety standards, 
            Georgia real estate termite bonds, and emergency scheduling.
          </p>

          {/* Category Tabs */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1D3B8B] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border-2 border-slate-200 bg-slate-50 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-black text-slate-900 text-sm sm:text-base hover:text-[#1D3B8B] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase bg-blue-100 text-[#1D3B8B]">
                      {faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <span className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#D9252A]" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 p-6 rounded-2xl bg-blue-50 border-2 border-blue-200 text-center sm:flex sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="text-left">
            <h4 className="text-base font-black text-[#1D3B8B]">Have a specific infestation or closing question?</h4>
            <p className="text-xs text-blue-900 mt-0.5 font-medium">
              Speak directly with a licensed Decatur field technician. No call center delays.
            </p>
          </div>
          <a
            href="tel:7704827322"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D9252A] hover:bg-[#b81d22] text-white font-black text-xs uppercase tracking-wider shadow-md shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call (770) 482-7322</span>
          </a>
        </div>

      </div>
    </section>
  );
};
