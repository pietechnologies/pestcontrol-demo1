import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { 
  Calculator, 
  Home, 
  Building2, 
  CheckCircle2, 
  PhoneCall, 
  Calendar, 
  Sparkles, 
  ArrowRight, 
  Info, 
  Award 
} from 'lucide-react';

interface InstantQuoteCalculatorProps {
  onScheduleWithQuote: (quoteData: any) => void;
  preselectedPest?: string;
}

export const InstantQuoteCalculator: React.FC<InstantQuoteCalculatorProps> = ({
  onScheduleWithQuote,
  preselectedPest
}) => {
  const [propertyType, setPropertyType] = useState<'single' | 'townhome' | 'commercial'>('single');
  const [squareFootage, setSquareFootage] = useState<'small' | 'medium' | 'large' | 'xlarge'>('medium');
  const [selectedPest, setSelectedPest] = useState<string>(preselectedPest || 'general');
  const [planType, setPlanType] = useState<'quarterly' | 'onetime' | 'platinum'>('quarterly');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerZip, setCustomerZip] = useState('30030');

  // Dynamic calculation
  const estimate = useMemo(() => {
    let baseQuarterly = 119;
    let baseInitial = 89;
    let oneTimeFee = 249;

    // Size adjustments
    if (squareFootage === 'small') {
      baseQuarterly = 99;
      baseInitial = 79;
      oneTimeFee = 219;
    } else if (squareFootage === 'medium') {
      baseQuarterly = 129;
      baseInitial = 89;
      oneTimeFee = 259;
    } else if (squareFootage === 'large') {
      baseQuarterly = 159;
      baseInitial = 119;
      oneTimeFee = 329;
    } else if (squareFootage === 'xlarge') {
      baseQuarterly = 199;
      baseInitial = 149;
      oneTimeFee = 429;
    }

    // Commercial adjustment
    if (propertyType === 'commercial') {
      baseQuarterly = Math.round(baseQuarterly * 1.4);
      baseInitial = Math.round(baseInitial * 1.5);
      oneTimeFee = Math.round(oneTimeFee * 1.6);
    } else if (propertyType === 'townhome') {
      baseQuarterly = Math.round(baseQuarterly * 0.9);
      baseInitial = Math.round(baseInitial * 0.9);
      oneTimeFee = Math.round(oneTimeFee * 0.9);
    }

    // Professional treatment category adjustments
    let pestName = 'General Perimeter Pest Defense (Crawling Invertebrates)';
    let isSpecialty = false;
    let specialtyNote = '';

    if (selectedPest === 'termites' || selectedPest === 'Termite Defense' || selectedPest === 'Termites') {
      pestName = 'Subterranean Termite Bait Station System & Warranty Bond';
      baseQuarterly = Math.round(baseQuarterly * 1.5);
      baseInitial = 495; // Bait install
      oneTimeFee = 650;
      isSpecialty = true;
      specialtyNote = 'Includes perimeter Sentricon / Termidor bait monitoring stations & 1-Year Structural Re-treatment Bond.';
    } else if (selectedPest === 'bedbugs' || selectedPest === 'Thermal Bed Bug' || selectedPest === 'Bed Bugs') {
      pestName = 'Bed Bug 1-Day Thermal Heat Remediation Protocol';
      oneTimeFee = squareFootage === 'small' ? 750 : squareFootage === 'medium' ? 1150 : squareFootage === 'large' ? 1650 : 2250;
      baseQuarterly = 189;
      baseInitial = 450;
      isSpecialty = true;
      specialtyNote = 'Single-day 100% eradication for adults, nymphs, and eggs using industrial thermal heating units.';
    } else if (selectedPest === 'rodents' || selectedPest === 'Rodent Exclusion' || selectedPest === 'Rats & Mice') {
      pestName = 'Rodent Removal & Heavy-Gauge Structural Exclusion';
      baseQuarterly = Math.round(baseQuarterly * 1.25);
      baseInitial = 195;
      oneTimeFee = 349;
      isSpecialty = true;
      specialtyNote = 'Includes trapping + heavy-gauge steel mesh barrier proofing on roofline, soffits, and crawl space.';
    } else if (selectedPest === 'termite-letter' || selectedPest === 'Real Estate Letters') {
      pestName = 'Official Georgia Real Estate Termite Letter (WDIR-100)';
      oneTimeFee = 125;
      baseQuarterly = 99;
      baseInitial = 125;
      specialtyNote = 'Expedited 24-48 hr certified state closing inspection report for realtors, title companies, and buyers.';
    }

    // Plan logic
    const discount = 50; // $50 promo discount
    let displayPrice = '';
    let billingDetail = '';
    let initialTotal = 0;

    if (planType === 'quarterly') {
      const discountedInitial = Math.max(39, baseInitial - discount);
      displayPrice = `$${baseQuarterly} / quarter`;
      billingDetail = `($${Math.round(baseQuarterly / 3)}/mo equivalent) • Initial Setup: $${discountedInitial} (Reg $${baseInitial})`;
      initialTotal = discountedInitial;
    } else if (planType === 'platinum') {
      const platinumQuarterly = Math.round(baseQuarterly * 1.6);
      const platinumInitial = 199;
      displayPrice = `$${platinumQuarterly} / quarter`;
      billingDetail = `Comprehensive Shield: Termite bait monitoring + quarterly perimeter defense + rodent inspection. Initial: $${platinumInitial}`;
      initialTotal = platinumInitial;
    } else {
      // onetime
      const discountedOneTime = Math.max(99, oneTimeFee - discount);
      displayPrice = `$${discountedOneTime}`;
      billingDetail = `One-Time Targeted Protocol (Saved $50 online special from regular $${oneTimeFee})`;
      initialTotal = discountedOneTime;
    }

    return {
      pestName,
      displayPrice,
      billingDetail,
      initialTotal,
      savings: discount,
      isSpecialty,
      specialtyNote
    };
  }, [propertyType, squareFootage, selectedPest, planType]);

  const handleLockQuote = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.6 }
    });
    setHasSubmitted(true);
  };

  const handleProceedToBooking = () => {
    onScheduleWithQuote({
      propertyType,
      squareFootage,
      selectedPest: estimate.pestName,
      planType,
      customerName,
      customerPhone,
      customerZip,
      priceSummary: estimate.displayPrice
    });
  };

  return (
    <section id="calculator" className="py-16 bg-gradient-to-b from-[#0A1633] via-[#0D1C3F] to-[#0A1633] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D9252A]/20 text-red-200 text-xs font-black uppercase tracking-wider mb-3 border border-[#D9252A]/40">
            <Calculator className="w-3.5 h-3.5 text-[#F87171]" />
            <span>Modern Competitor Advantage: Instant Price Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Interactive Price & Plan Estimator
          </h2>
          <p className="mt-3 text-blue-100 text-sm sm:text-base leading-relaxed">
            Eliminating guesswork for Decatur and Atlanta property owners. Select your specifications 
            below for an immediate, transparent estimate with <strong className="text-white bg-[#D9252A] px-2 py-0.5 rounded font-black">$50 OFF</strong> your initial visit!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#10234E]/90 rounded-2xl border-2 border-blue-900/80 p-6 sm:p-8 space-y-6 shadow-2xl">
            
            {/* Step 1: Property Type */}
            <div>
              <label className="block text-xs font-black text-blue-200 uppercase tracking-wider mb-3">
                1. Property Classification
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'single', label: 'Single Family Home', icon: Home },
                  { id: 'townhome', label: 'Townhome / Condo', icon: Building2 },
                  { id: 'commercial', label: 'Commercial Facility', icon: Building2 },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPropertyType(item.id as any)}
                      className={`flex flex-col items-center justify-center p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                        propertyType === item.id
                          ? 'bg-[#1D3B8B] border-[#D9252A] text-white font-black ring-2 ring-[#D9252A]/40 shadow-md'
                          : 'bg-blue-950/60 border-blue-800/60 text-blue-200 hover:border-blue-600'
                      }`}
                    >
                      <Icon className="w-5 h-5 mb-1.5 text-[#F87171]" />
                      <span className="text-xs">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Approximate Square Footage */}
            <div>
              <label className="block text-xs font-black text-blue-200 uppercase tracking-wider mb-3">
                2. Approximate Size (Square Feet)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'small', label: 'Under 1,500 sq ft', desc: 'Bungalow / Condo' },
                  { id: 'medium', label: '1,500 – 2,500 sq ft', desc: 'Standard Residence' },
                  { id: 'large', label: '2,500 – 3,800 sq ft', desc: 'Executive Property' },
                  { id: 'xlarge', label: '3,800+ sq ft', desc: 'Large Estate / Comm.' },
                ].map((size) => (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => setSquareFootage(size.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      squareFootage === size.id
                        ? 'bg-[#1D3B8B] border-[#D9252A] text-white font-black ring-2 ring-[#D9252A]/40 shadow-md'
                        : 'bg-blue-950/60 border-blue-800/60 text-blue-200 hover:border-blue-600'
                    }`}
                  >
                    <div className="text-xs font-bold">{size.label}</div>
                    <div className="text-[10px] text-blue-300 mt-0.5">{size.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Pest Target (Clean & Professional) */}
            <div>
              <label className="block text-xs font-black text-blue-200 uppercase tracking-wider mb-3">
                3. Primary Treatment Service Required
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'general', label: 'General Perimeter Defense', tag: 'Crawling Insects & Barrier' },
                  { id: 'termites', label: 'Subterranean Termites', tag: 'Bait Stations & Warranty' },
                  { id: 'bedbugs', label: 'Bed Bug Thermal Heat', tag: '1-Day 100% Thermal Kill' },
                  { id: 'rodents', label: 'Rodent Structural Exclusion', tag: 'Attic & Crawl Steel Seal' },
                  { id: 'termite-letter', label: 'Georgia WDIR-100 Letter', tag: 'Official Closing Report' },
                  { id: 'mosquitoes', label: 'Mosquito Yard Shield', tag: 'Foliage Mist Barrier' }
                ].map((pest) => (
                  <button
                    key={pest.id}
                    type="button"
                    onClick={() => setSelectedPest(pest.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedPest === pest.id
                        ? 'bg-[#1D3B8B] border-[#D9252A] text-white font-black ring-2 ring-[#D9252A]/40 shadow-md'
                        : 'bg-blue-950/60 border-blue-800/60 text-blue-200 hover:border-blue-600'
                    }`}
                  >
                    <div className="text-xs font-bold">{pest.label}</div>
                    <div className="text-[10px] text-blue-300 mt-0.5">{pest.tag}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Plan Preference */}
            <div>
              <label className="block text-xs font-black text-blue-200 uppercase tracking-wider mb-3">
                4. Service Plan Frequency
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPlanType('quarterly')}
                  className={`p-3.5 rounded-xl border text-left transition-all relative cursor-pointer ${
                    planType === 'quarterly'
                      ? 'bg-[#1D3B8B] border-[#D9252A] text-white font-black ring-2 ring-[#D9252A]/40 shadow-md'
                      : 'bg-blue-950/60 border-blue-800/60 text-blue-200 hover:border-blue-600'
                  }`}
                >
                  <span className="absolute -top-2.5 right-2 px-2 py-0.5 rounded-full bg-[#D9252A] text-white text-[10px] font-black uppercase tracking-wider">
                    Most Popular
                  </span>
                  <div className="text-xs font-bold">Quarterly Perimeter Shield</div>
                  <div className="text-[11px] text-blue-200 mt-1">
                    Continuous 365-day barrier + free re-treatment callbacks.
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPlanType('platinum')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    planType === 'platinum'
                      ? 'bg-[#1D3B8B] border-[#D9252A] text-white font-black ring-2 ring-[#D9252A]/40 shadow-md'
                      : 'bg-blue-950/60 border-blue-800/60 text-blue-200 hover:border-blue-600'
                  }`}
                >
                  <div className="text-xs font-bold">Platinum Termite + Pest</div>
                  <div className="text-[11px] text-blue-200 mt-1">
                    Termite bait bond + quarterly pest perimeter defense.
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPlanType('onetime')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    planType === 'onetime'
                      ? 'bg-blue-900 border-[#D9252A] text-white font-black ring-2 ring-[#D9252A]/40 shadow-md'
                      : 'bg-blue-950/60 border-blue-800/60 text-blue-200 hover:border-blue-600'
                  }`}
                >
                  <div className="text-xs font-bold">One-Time Treatment</div>
                  <div className="text-[11px] text-blue-200 mt-1">
                    Targeted single protocol for acute situations.
                  </div>
                </button>
              </div>
            </div>

          </div>

          {/* Pricing Summary Card (5 cols) in First Choice Navy & Red */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#10234E] to-[#0A1633] rounded-2xl border-2 border-[#D9252A] p-6 sm:p-7 shadow-2xl relative">
            
            {/* Top Savings Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D9252A] text-white text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Decatur Web Special: $50 OFF Applied</span>
            </div>

            <h3 className="text-xl font-black text-white">Your Treatment Cost Estimate</h3>
            <p className="text-xs text-blue-200 mt-1">
              Target Protocol: <strong className="text-white">{estimate.pestName}</strong>
            </p>

            {/* Price Display */}
            <div className="my-5 p-4 rounded-xl bg-[#071026] border border-blue-800/60">
              <div className="text-3xl sm:text-4xl font-black text-white">
                <span className="text-[#F87171]">{estimate.displayPrice}</span>
              </div>
              <div className="text-xs text-blue-200 mt-1.5 font-medium leading-relaxed">
                {estimate.billingDetail}
              </div>
            </div>

            {/* Specialty Note if applicable */}
            {estimate.isSpecialty && (
              <div className="p-3 rounded-xl bg-blue-950/80 border border-blue-700/60 text-xs text-blue-100 mb-5 flex items-start gap-2">
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-[#F87171]" />
                <span>{estimate.specialtyNote}</span>
              </div>
            )}

            {/* What's Included */}
            <div className="space-y-2 pb-5 border-b border-blue-900/60 text-xs text-blue-100">
              <div className="flex items-center gap-2 font-black text-white mb-1">
                <Award className="w-4 h-4 text-[#D9252A]" />
                <span>Included with this estimate:</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F87171] shrink-0" />
                <span>30-Point Structural Crawl Space & Perimeter Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F87171] shrink-0" />
                <span>EPA-Registered Family & Pet-Safe IPM Formulations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F87171] shrink-0" />
                <span>100% Free Re-treatment Callback Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F87171] shrink-0" />
                <span>Georgia Dept of Agriculture Licensed Field Inspectors</span>
              </div>
            </div>

            {/* Submission Form or Success View */}
            {!hasSubmitted ? (
              <form onSubmit={handleLockQuote} className="pt-4 space-y-3">
                <p className="text-xs font-black text-white uppercase tracking-wider">
                  Lock in this price with code <span className="text-[#F87171]">FIRST25</span> ($50 OFF):
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-blue-950 border border-blue-700 text-white placeholder-blue-300 text-xs focus:ring-2 focus:ring-[#D9252A] focus:outline-hidden"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone: (770) 000-0000"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-blue-950 border border-blue-700 text-white placeholder-blue-300 text-xs focus:ring-2 focus:ring-[#D9252A] focus:outline-hidden"
                  />
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    required
                    placeholder="ZIP Code (30030)"
                    value={customerZip}
                    onChange={(e) => setCustomerZip(e.target.value)}
                    className="w-1/3 px-3 py-2.5 rounded-lg bg-blue-950 border border-blue-700 text-white placeholder-blue-300 text-xs focus:ring-2 focus:ring-[#D9252A] focus:outline-hidden"
                  />
                  <button
                    type="submit"
                    className="w-2/3 px-4 py-2.5 rounded-lg bg-[#D9252A] hover:bg-[#b81d22] text-white font-black text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-wider"
                  >
                    <span>Lock In Price & Save $50</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[11px] text-blue-300 text-center">
                  Zero obligation. We never share customer contact information.
                </p>
              </form>
            ) : (
              <div className="pt-4 space-y-3 text-center">
                <div className="p-4 rounded-xl bg-blue-950 border border-[#D9252A] text-white">
                  <p className="font-black text-sm text-white">Estimate Locked For {customerName}!</p>
                  <p className="text-xs mt-1 text-blue-200">
                    Promo Code <strong className="text-[#F87171]">FIRST25</strong> applied ($50 OFF initial visit).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleProceedToBooking}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#D9252A] hover:bg-[#b81d22] text-white font-black text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Select Inspection Date & Time</span>
                </button>
              </div>
            )}

            {/* Direct Phone Assistance */}
            <div className="mt-4 pt-3 border-t border-blue-900/60 flex items-center justify-between text-xs text-blue-200">
              <span>Prefer to speak with an inspector?</span>
              <a href="tel:7704827322" className="text-white hover:text-amber-300 font-black flex items-center gap-1">
                <PhoneCall className="w-3 h-3 text-[#D9252A]" />
                <span>(770) 482-7322</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
