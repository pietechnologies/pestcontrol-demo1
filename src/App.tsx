import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InstantQuoteCalculator } from './components/InstantQuoteCalculator';
import { PestIdentifier } from './components/PestIdentifier';
import { BedBugHeatSection } from './components/BedBugHeatSection';
import { TermiteLetterSection } from './components/TermiteLetterSection';
import { ServiceAreaChecker } from './components/ServiceAreaChecker';
import { ServicesGrid } from './components/ServicesGrid';
import { PricingPlans } from './components/PricingPlans';
import { BeforeAfterShowcase } from './components/BeforeAfterShowcase';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ScheduleInspectionModal } from './components/ScheduleInspectionModal';
import { EmergencyStickyBar } from './components/EmergencyStickyBar';
import { CompetitorAuditView } from './components/CompetitorAuditView';

export function App() {
  const [isAuditActive, setIsAuditActive] = useState<boolean>(false);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingService, setBookingService] = useState<string>('Termite Inspection & Bait System');
  const [bookingZip, setBookingZip] = useState<string>('30030');
  const [quoteDetails, setQuoteDetails] = useState<any>(null);
  const [calculatorPest, setCalculatorPest] = useState<string>('general');

  // Trigger handlers
  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) setBookingService(serviceName);
    setIsBookingOpen(true);
  };

  const handleNavigateToSection = (sectionId: string) => {
    setIsAuditActive(false);
    // When leaving the audit, wait for the main website to render before scrolling.
    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, isAuditActive ? 100 : 0);
  };

  const handleOpenQuote = (initialPest?: string) => {
    if (initialPest) setCalculatorPest(initialPest);
    handleNavigateToSection('calculator');
  };

  const handleToggleAudit = () => {
    setIsAuditActive((active) => !active);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAudit = () => {
    setIsAuditActive(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPestForService = (pestName: string) => {
    setBookingService(`${pestName} Eradication Treatment`);
    setIsBookingOpen(true);
  };

  const handleScheduleForArea = (zip: string) => {
    setBookingZip(zip);
    setIsBookingOpen(true);
  };

  const handleScheduleWithQuote = (quote: any) => {
    setQuoteDetails(quote);
    if (quote.selectedPest) setBookingService(quote.selectedPest);
    if (quote.customerZip) setBookingZip(quote.customerZip);
    setIsBookingOpen(true);
  };

  return (
    <div id="top" className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#D9252A] selection:text-white">
      
      {/* Sticky Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenQuote={() => handleOpenQuote()}
        isAuditActive={isAuditActive}
        onToggleAudit={handleToggleAudit}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Main Content: Either the Full Competitor Audit Dashboard or the Revamped Live Website */}
      {isAuditActive ? (
        <main className="flex-1">
          <CompetitorAuditView
            onClose={() => setIsAuditActive(false)}
            onNavigateToSection={handleNavigateToSection}
          />
        </main>
      ) : (
        <main className="flex-1">
          {/* Hero Section */}
          <Hero
            onOpenBooking={() => handleOpenBooking()}
            onOpenQuote={handleOpenQuote}
          />

          {/* Instant Price & Plan Calculator */}
          <InstantQuoteCalculator
            preselectedPest={calculatorPest}
            onScheduleWithQuote={handleScheduleWithQuote}
          />

          {/* Interactive Pest & Bug Diagnostic Identifier */}
          <PestIdentifier
            onSelectPestForService={handleSelectPestForService}
          />

          {/* Bed Bug 1-Day Thermal Heat Remediation Spotlight */}
          <BedBugHeatSection
            onBookBedBugService={() => handleOpenBooking('Bed Bug 1-Day Thermal Heat Treatment')}
          />

          {/* Official Georgia Real Estate Closing Termite Letter (WDIR-100) Portal */}
          <TermiteLetterSection
            onScheduleInspection={handleOpenBooking}
          />

          {/* Atlanta Metro & Decatur 25-Mile Service Area Checker */}
          <ServiceAreaChecker
            onScheduleForArea={handleScheduleForArea}
          />

          {/* Core Services Showcase */}
          <ServicesGrid
            onSelectServiceForBooking={handleOpenBooking}
          />

          {/* Transparent Treatment Plans & Pricing */}
          <PricingPlans
            onSelectPlan={(planName) => handleOpenBooking(`Subscription Plan: ${planName}`)}
          />

          {/* Before & After Case Studies */}
          <BeforeAfterShowcase />

          {/* Verified Customer Reviews */}
          <ReviewsSection />

          {/* Frequently Asked Questions */}
          <FaqSection />
        </main>
      )}

      {/* Footer */}
      <Footer
        onOpenAudit={handleOpenAudit}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Persistent Mobile Bottom Action Bar */}
      <EmergencyStickyBar
        onOpenBooking={() => handleOpenBooking()}
        onOpenQuote={() => handleOpenQuote()}
        onOpenAudit={handleToggleAudit}
      />

      {/* Schedule Free Inspection Modal */}
      <ScheduleInspectionModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={bookingService}
        preselectedZip={bookingZip}
        quoteDetails={quoteDetails}
      />

    </div>
  );
}

export default App;
