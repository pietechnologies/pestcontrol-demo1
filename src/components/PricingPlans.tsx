import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/pricingData';
import { 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  PhoneCall,
  Award
} from 'lucide-react';

interface PricingPlansProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingPlans: React.FC<PricingPlansProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'quarterly' | 'monthly'>('monthly');

  return (
    <section id="pricing" className="py-16 bg-slate-100 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#1D3B8B] text-xs font-black uppercase tracking-wider mb-3 border border-blue-200">
            <Award className="w-3.5 h-3.5 text-[#D9252A]" />
            <span>Guaranteed Year-Round Defense</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Transparent Treatment Plans & Pricing
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Eliminating corporate sales friction. Honest, upfront pricing for Decatur and Greater Atlanta property owners.
          </p>

          {/* Billing Switcher */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-slate-200 border border-slate-300">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-white text-[#1D3B8B] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 font-bold'
              }`}
            >
              Monthly Billing ($/mo)
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                billingCycle === 'quarterly'
                  ? 'bg-white text-[#1D3B8B] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 font-bold'
              }`}
            >
              Quarterly Billing ($/qtr)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                plan.isPopular
                  ? 'bg-white border-2 border-[#D9252A] shadow-xl lg:-translate-y-2'
                  : 'bg-white border-2 border-slate-200 shadow-xs hover:shadow-md'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D9252A] text-white shadow-md flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    <span>{plan.badge}</span>
                  </span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-black text-slate-900">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">{plan.description}</p>
                </div>

                {/* Price Display */}
                <div className="py-3 border-y border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-[#1D3B8B]">
                      ${billingCycle === 'monthly' ? plan.priceMonthly : plan.priceQuarterly}
                    </span>
                    <span className="text-xs text-slate-500 font-bold">
                      /{billingCycle === 'monthly' ? 'month' : 'quarter'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 font-medium">
                    Initial setup from ${plan.initialVisitFee} • Less $50 web special
                  </p>
                </div>

                {/* Inclusions */}
                <div className="space-y-2.5 pt-1">
                  <p className="text-xs font-black text-slate-800 uppercase tracking-wider">
                    Plan Specifications:
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {plan.coverage.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D9252A] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
                <div className="text-[11px] text-[#1D3B8B] font-bold bg-blue-50 p-2.5 rounded-lg text-center border border-blue-100">
                  Guarantee: {plan.warranty}
                </div>
                <button
                  type="button"
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.isPopular
                      ? 'bg-[#D9252A] hover:bg-[#b81d22] text-white shadow-md'
                      : 'bg-[#1D3B8B] hover:bg-blue-900 text-white'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Free Call Back Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border-2 border-blue-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1D3B8B] flex items-center justify-center shrink-0 border border-blue-100">
              <ShieldCheck className="w-7 h-7 text-[#D9252A]" />
            </div>
            <div>
              <h4 className="text-base font-black text-slate-900">
                The First Choice 100% Satisfaction & Re-Treatment Guarantee
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                If target pests reappear in between your scheduled quarterly treatments, your Decatur field technician will return and re-treat your home at zero additional charge.
              </p>
            </div>
          </div>

          <a
            href="tel:7704827322"
            className="px-5 py-2.5 rounded-xl bg-[#1D3B8B] hover:bg-blue-900 text-white font-black text-xs uppercase tracking-wider shrink-0 flex items-center gap-2 shadow-xs"
          >
            <PhoneCall className="w-4 h-4 text-[#F87171]" />
            <span>(770) 482-7322</span>
          </a>
        </div>

      </div>
    </section>
  );
};
