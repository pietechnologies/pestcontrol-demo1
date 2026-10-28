import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  CheckCircle2, 
  MapPin, 
  User, 
  Phone 
} from 'lucide-react';
import { LOGO_PRIMARY_URL, LOGO_FALLBACK_URL } from '../assets/logo';

interface ScheduleInspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedZip?: string;
  quoteDetails?: any;
}

export const ScheduleInspectionModal: React.FC<ScheduleInspectionModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  preselectedZip,
  quoteDetails
}) => {
  const [service, setService] = useState<string>(
    preselectedService || (quoteDetails ? quoteDetails.selectedPest : 'Termite Bait & Structural Inspection')
  );
  const [date, setDate] = useState<string>('');
  const [timeWindow, setTimeWindow] = useState<string>('morning');
  const [name, setName] = useState<string>(quoteDetails?.customerName || '');
  const [phone, setPhone] = useState<string>(quoteDetails?.customerPhone || '');
  const [address, setAddress] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>(
    preselectedZip || quoteDetails?.customerZip || '30030'
  );
  const [notes, setNotes] = useState<string>('');
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>('');

  if (!isOpen) return null;

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'FC-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(code);
    setIsConfirmed(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const servicesList = [
    'Termite Bait Station & Structural Inspection',
    'Bed Bug 1-Day Thermal Heat Remediation Protocol',
    'Rodent & Wildlife Structural Exclusion Assessment',
    'Georgia Real Estate Closing Termite Letter (WDIR-100)',
    'Quarterly Perimeter Residential Defense Shield',
    'Mosquito & Yard Barrier Foliage Treatment',
    'Emergency Structural Infestation Dispatch'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden border-2 border-[#1D3B8B] relative max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0E1E45] to-[#122659] text-white p-5 sm:p-6 flex items-center justify-between border-b-2 border-[#D9252A]">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1.5 rounded-xl shadow-xs shrink-0">
              <img 
                src={LOGO_PRIMARY_URL} 
                onError={(e) => {
                  e.currentTarget.src = LOGO_FALLBACK_URL;
                }}
                alt="First Choice Pest Control" 
                className="h-9 w-auto object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-red-300">
                  Direct Field Dispatch
                </span>
                <span className="px-1.5 py-0.5 rounded bg-[#D9252A] text-white text-[10px] font-black">
                  FREE
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white">Schedule Property Inspection</h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close inspection scheduler"
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {!isConfirmed ? (
            <form onSubmit={handleCompleteBooking} className="space-y-5">
              
              {/* Quote details badge if passed */}
              {quoteDetails && (
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-[#1D3B8B] flex items-center justify-between">
                  <div>
                    <span className="font-black block">Locked Estimate: {quoteDetails.priceSummary}</span>
                    <span className="text-[11px] text-blue-800">Promo FIRST25 ($50 OFF) applied</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#D9252A] text-white font-black text-[10px] uppercase">
                    Discount Locked
                  </span>
                </div>
              )}

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-1.5">
                  1. Select Specialized Treatment Division:
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-[#1D3B8B] focus:outline-hidden"
                >
                  {servicesList.map((s, i) => (
                    <option key={i} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-1.5">
                    2. Preferred Inspection Date:
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:ring-2 focus:ring-[#1D3B8B] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-1.5">
                    3. Preferred Arrival Window:
                  </label>
                  <select
                    value={timeWindow}
                    onChange={(e) => setTimeWindow(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-[#1D3B8B] focus:outline-hidden"
                  >
                    <option value="morning">Morning (8:30 AM – 12:00 PM)</option>
                    <option value="afternoon">Afternoon (12:00 PM – 3:30 PM)</option>
                    <option value="evening">Late Afternoon (3:30 PM – 6:30 PM)</option>
                    <option value="urgent">Urgent / Priority 24/7 Dispatch</option>
                  </select>
                </div>
              </div>

              {/* Customer Contact Details */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <label className="block text-xs font-black text-slate-800 uppercase tracking-wider">
                  4. Property & Contact Information
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-[#1D3B8B] focus:outline-hidden"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="Phone: (770) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-[#1D3B8B] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2 relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Street Address in Decatur / Atlanta"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-[#1D3B8B] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="ZIP Code (30030)"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-[#1D3B8B] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="Specific notes or property access instructions (e.g. crawl space access on driveway side, lockbox code, attic access in hallway)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-[#1D3B8B] focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#D9252A] hover:bg-[#b81d22] text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-red-700/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Free Property Inspection</span>
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-2 font-medium">
                  No credit card required. Free on-site evaluation with written guarantee.
                </p>
              </div>

            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-[#1D3B8B] flex items-center justify-center mx-auto border-2 border-[#1D3B8B]">
                <CheckCircle2 className="w-9 h-9 text-[#D9252A]" />
              </div>

              <div>
                <span className="text-xs font-black uppercase text-[#D9252A] tracking-wider">
                  Appointment Confirmed!
                </span>
                <h4 className="text-2xl font-black text-slate-900 mt-1">
                  Inspection Reference #{confirmationCode}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto mt-2">
                  Thank you, <strong className="text-slate-900">{name}</strong>. A certified First Choice inspector has reserved your slot for{' '}
                  <strong className="text-slate-900">{service}</strong> at{' '}
                  <strong className="text-slate-900">{address || 'your property'} ({zipCode})</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-left max-w-md mx-auto space-y-1.5 text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">Service Division:</span>
                  <span className="font-bold text-slate-900">{service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">Arrival Window:</span>
                  <span className="font-bold text-slate-900 capitalize">{timeWindow} Window</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">Dispatch Office:</span>
                  <span className="font-black text-[#1D3B8B]">Decatur, GA (30030)</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#1D3B8B] hover:bg-blue-900 text-white font-black text-xs uppercase tracking-wider cursor-pointer shadow-sm"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
