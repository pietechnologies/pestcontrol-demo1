import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  FileCheck, 
  CheckCircle2, 
  Send, 
  PhoneCall, 
  Award 
} from 'lucide-react';

interface TermiteLetterSectionProps {
  onScheduleInspection?: (serviceName: string) => void;
}

export const TermiteLetterSection: React.FC<TermiteLetterSectionProps> = () => {
  const [propertyAddress, setPropertyAddress] = useState('');
  const [closingDate, setClosingDate] = useState('');
  const [agentName, setAgentName] = useState('');
  const [agentPhone, setAgentPhone] = useState('');
  const [clientType, setClientType] = useState<'buyer' | 'seller' | 'realtor' | 'closing_attorney'>('realtor');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });
    setSubmitted(true);
  };

  return (
    <section id="termite-letter" className="py-16 bg-gradient-to-b from-[#0B1736] via-[#10234E] to-[#0A1633] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-900/60 text-blue-200 text-xs font-black uppercase tracking-wider mb-3 border border-blue-500/40">
            <FileCheck className="w-3.5 h-3.5 text-[#F87171]" />
            <span>Georgia Real Estate Closing Clearance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Official Georgia Termite Letters (WDIR-100)
          </h2>
          <p className="mt-3 text-blue-100 text-sm sm:text-base leading-relaxed">
            Closing on a property in Decatur, DeKalb County, or Greater Atlanta? Mortgage underwriters require a certified 
            Georgia Official Wood Infestation Inspection Report. We provide rapid <strong className="text-white bg-[#D9252A] px-2 py-0.5 rounded font-black">24 to 48-hour certified delivery</strong> with zero closing delays.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Why Realtors & Buyers Choose First Choice */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-blue-950/60 border-2 border-blue-800/80 space-y-4">
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-[#D9252A]" />
                <span>The Decatur Realtor Preferred Standard</span>
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
                A delayed inspection report can stall a real estate closing. First Choice conducts comprehensive foundation, crawl space, attic, and perimeter evaluations compliant with all Georgia Department of Agriculture regulations.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-blue-100">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F87171] shrink-0 mt-0.5" />
                  <span>
                    <strong>State-Regulated WDIR-100:</strong> Recognized by all VA, FHA, and Conventional loan underwriters.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F87171] shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed 24-48 Hr Delivery:</strong> Direct digital PDF transmission to closing attorneys and title officers.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F87171] shrink-0 mt-0.5" />
                  <span>
                    <strong>Transparent $125 Flat Fee:</strong> No hidden surprise fees for standard residential closings.
                  </span>
                </div>
              </div>

              {/* Special Note */}
              <div className="p-3.5 rounded-xl bg-blue-900/60 border border-blue-700/60 text-xs text-blue-100">
                <span className="font-black text-white block mb-0.5">Found active infestation during closing?</span>
                We provide immediate expedited spot treatment and transferable warranty bonds to keep closings on schedule.
              </div>
            </div>
          </div>

          {/* Right Column: Expedited Order Portal */}
          <div className="lg:col-span-6 bg-slate-900 rounded-2xl border-2 border-[#D9252A] p-6 sm:p-7 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#F87171]">Expedited Request</span>
                <h4 className="text-lg font-black text-white">Order Closing Clearance Letter</h4>
              </div>
              <span className="text-xs font-black px-3 py-1 rounded-full bg-[#D9252A] text-white">
                $125 Flat Fee
              </span>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Client Type Pills */}
                <div>
                  <label className="block text-xs font-black text-slate-300 uppercase tracking-wider mb-2">
                    Requesting Party:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'realtor', label: 'Realtor' },
                      { id: 'buyer', label: 'Buyer' },
                      { id: 'seller', label: 'Seller' },
                      { id: 'closing_attorney', label: 'Closing Atty' }
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setClientType(type.id as any)}
                        className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all text-center cursor-pointer ${
                          clientType === type.id
                            ? 'bg-[#D9252A] text-white shadow-xs font-black'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Property Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Property Address in GA:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 142 W Court Sq, Decatur, GA 30030"
                    value={propertyAddress}
                    onChange={(e) => setPropertyAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:ring-2 focus:ring-[#D9252A] focus:outline-hidden"
                  />
                </div>

                {/* Closing Date & Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Expected Closing Date:
                    </label>
                    <input
                      type="date"
                      required
                      value={closingDate}
                      onChange={(e) => setClosingDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:ring-2 focus:ring-[#D9252A] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Contact Phone:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(770) 000-0000"
                      value={agentPhone}
                      onChange={(e) => setAgentPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:ring-2 focus:ring-[#D9252A] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Contact / Brokerage Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Agent Name or Closing Title Company"
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:ring-2 focus:ring-[#D9252A] focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#D9252A] hover:bg-[#b81d22] text-white font-black text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request 24-Hr WDIR Inspection Report</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  Invoice can be settled directly at the closing table or via credit card.
                </p>
              </form>
            ) : (
              <div className="py-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center mx-auto border-2 border-white">
                  <CheckCircle2 className="w-7 h-7 text-[#F87171]" />
                </div>
                <div>
                  <h5 className="text-lg font-black text-white">WDIR Inspection Order Queued!</h5>
                  <p className="text-xs text-blue-200 mt-1 max-w-sm mx-auto">
                    We have received the inspection request for <strong className="text-white">{propertyAddress}</strong>. 
                    Our Decatur inspector will coordinate lockbox access and dispatch the official report prior to your closing date.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="tel:7704827322"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#F87171] hover:underline"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Need same-day rush? Call Dispatch: (770) 482-7322</span>
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
