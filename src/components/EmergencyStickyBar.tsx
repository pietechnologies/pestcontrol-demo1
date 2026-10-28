import React from 'react';
import { BarChart3, Calculator, CalendarDays, Phone } from 'lucide-react';

interface EmergencyStickyBarProps {
  onOpenBooking: () => void;
  onOpenQuote: () => void;
  onOpenAudit: () => void;
}

export const EmergencyStickyBar: React.FC<EmergencyStickyBarProps> = ({
  onOpenBooking,
  onOpenQuote,
  onOpenAudit,
}) => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-5px_20px_rgba(15,35,75,0.08)] sm:hidden">
      <div className="grid grid-cols-4 gap-1">
        <a
          href="tel:7704827322"
          aria-label="Call First Choice at (770) 482-7322"
          className="flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-lg text-[11px] font-bold text-[#263753] hover:bg-slate-50"
        >
          <Phone aria-hidden="true" className="h-4 w-4 text-[#c9232b]" />
          <span>Call</span>
        </a>
        <button
          type="button"
          onClick={onOpenQuote}
          className="flex min-h-[52px] cursor-pointer flex-col items-center justify-center gap-1 rounded-lg text-[11px] font-bold text-[#263753] hover:bg-slate-50"
        >
          <Calculator aria-hidden="true" className="h-4 w-4 text-[#c9232b]" />
          <span>Quote</span>
        </button>
        <button
          type="button"
          onClick={onOpenBooking}
          className="flex min-h-[52px] cursor-pointer flex-col items-center justify-center gap-1 rounded-lg bg-[#c9232b] text-[11px] font-bold text-white hover:bg-[#a91d24]"
        >
          <CalendarDays aria-hidden="true" className="h-4 w-4" />
          <span>Schedule</span>
        </button>
        <button
          type="button"
          onClick={onOpenAudit}
          className="flex min-h-[52px] cursor-pointer flex-col items-center justify-center gap-1 rounded-lg text-[11px] font-bold text-[#263753] hover:bg-slate-50"
        >
          <BarChart3 aria-hidden="true" className="h-4 w-4 text-[#c9232b]" />
          <span>Audit</span>
        </button>
      </div>
    </div>
  );
};
