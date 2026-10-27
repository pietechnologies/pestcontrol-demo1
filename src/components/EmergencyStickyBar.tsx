import React from 'react';
import { 
  PhoneCall, 
  Calculator, 
  Calendar, 
  Sparkles 
} from 'lucide-react';

interface EmergencyStickyBarProps {
  onOpenBooking: () => void;
  onOpenQuote: () => void;
  onOpenAudit: () => void;
}

export const EmergencyStickyBar: React.FC<EmergencyStickyBarProps> = ({
  onOpenBooking,
  onOpenQuote,
  onOpenAudit
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B1530]/95 backdrop-blur-md border-t-2 border-[#1D3B8B] p-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-4 gap-1.5">
        
        {/* Call Now */}
        <a
          href="tel:7704827322"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#D9252A] text-white font-black text-[11px] shadow-sm active:scale-95 transition-transform"
        >
          <PhoneCall className="w-4 h-4 mb-0.5" />
          <span>Call 24/7</span>
        </a>

        {/* Instant Quote */}
        <button
          onClick={onOpenQuote}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-blue-950 text-blue-100 hover:text-white font-bold text-[11px] border border-blue-800 active:scale-95 transition-transform cursor-pointer"
        >
          <Calculator className="w-4 h-4 text-[#F87171] mb-0.5" />
          <span>Quote</span>
        </button>

        {/* Schedule */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-blue-950 text-blue-100 hover:text-white font-bold text-[11px] border border-blue-800 active:scale-95 transition-transform cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-[#F87171] mb-0.5" />
          <span>Schedule</span>
        </button>

        {/* Audit View */}
        <button
          onClick={onOpenAudit}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-amber-400/20 text-amber-300 font-bold text-[11px] border border-amber-400/40 active:scale-95 transition-transform cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-amber-300 mb-0.5" />
          <span>Audit</span>
        </button>

      </div>
    </div>
  );
};
