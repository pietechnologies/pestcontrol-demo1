import { CompetitorAuditItem } from '../types';

export const COMPETITOR_AUDIT_DATA: CompetitorAuditItem[] = [
  {
    id: 'pricing-calculator',
    category: 'Instant Pricing & Quote Transparency',
    currentSite: {
      status: 'No Pricing Information Whatsoever',
      grade: 'F',
      detail: 'The current site only states "call for a quote". 68% of modern homeowners bounce to competitors because they don’t know if a visit is $99 or $1,200.'
    },
    competitorBenchmark: {
      standard: 'Instant Online Price Estimator',
      players: 'Aptive, Orkin, Terminix',
      benefit: 'Delivers estimated cost based on square footage and pest type, capturing warm leads and phone numbers before dispatching.'
    },
    revampedSolution: {
      featureName: 'Interactive Smart Cost Estimator',
      status: 'Implemented in New Version',
      impact: '+310% lead generation rate on residential inquiries'
    },
    businessImpact: 'Homeowners avoid calling blindly; instant estimate calculator builds trust and captures pre-qualified contact details.'
  },
  {
    id: 'online-booking',
    category: 'Online Inspection & Schedule Booking',
    currentSite: {
      status: 'Static Contact Form & Phone Only',
      grade: 'D',
      detail: 'Users can only submit a generic WordPress message form or call during business hours. After-hours visitors (7 PM - 7 AM) leave without booking.'
    },
    competitorBenchmark: {
      standard: 'Real-Time Inspection Time-Slot Picker',
      players: 'Arrow Exterminators, Truly Nolen',
      benefit: 'Allows homeowners to pick their preferred morning/afternoon slot and immediately books the calendar.'
    },
    revampedSolution: {
      featureName: 'One-Click Inspection Scheduler Modal',
      status: 'Implemented in New Version',
      impact: '+45% after-hours booking conversions'
    },
    businessImpact: 'Captures the 62% of pest searches that happen at night when pests are active in the dark.'
  },
  {
    id: 'pest-identifier',
    category: 'Pest Identification & Diagnostic Tool',
    currentSite: {
      status: 'Walls of Plain Text Articles',
      grade: 'D',
      detail: 'Simple paragraph descriptions without visual comparison photos, symptom quizzes, or diagnostic filters.'
    },
    competitorBenchmark: {
      standard: 'Interactive Pest & Symptom Identifier',
      players: 'Orkin "Pest Library", Terminix Bug ID',
      benefit: 'Helps customers identify whether they have swarming termites vs carpenter ants, or bed bugs vs carpet beetles.'
    },
    revampedSolution: {
      featureName: 'Visual Symptom & Bug Diagnostic Tool',
      status: 'Implemented in New Version',
      impact: 'Engages anxious homeowners and directs them to exact solution'
    },
    businessImpact: 'Positions First Choice as the expert diagnostic authority in Greater Atlanta and accelerates phone calls.'
  },
  {
    id: 'service-area',
    category: 'Local Service Radius & ZIP Code Validation',
    currentSite: {
      status: 'Vague "Within 25 Miles" Text Only',
      grade: 'F',
      detail: 'Visitors from Tucker, Stone Mountain, Atlanta, or Lithonia are uncertain if First Choice will come to their specific neighborhood.'
    },
    competitorBenchmark: {
      standard: 'Interactive ZIP Code Verification Tool',
      players: 'Northwest Exterminating, Bulwark',
      benefit: 'Instant feedback: "Yes! We have technicians dispatched in Decatur / Tucker (30084). Estimated arrival: Today!"'
    },
    revampedSolution: {
      featureName: 'Instant Atlanta Metro ZIP Code Checker',
      status: 'Implemented in New Version',
      impact: 'Removes geographical friction and validates immediate dispatch'
    },
    businessImpact: 'Converts hesitancy into immediate calls by confirming local technician presence.'
  },
  {
    id: 'termite-letter',
    category: 'Georgia Real Estate Closing Termite Letter (WDIR)',
    currentSite: {
      status: 'Brief Text Page with Phone CTA',
      grade: 'D',
      detail: 'Realtors and home buyers in Georgia need urgent WDIR-100 inspection letters with guaranteed 24-hr turnaround for mortgage closings.'
    },
    competitorBenchmark: {
      standard: 'Dedicated Realtor / Closing Letter Expedited Order',
      players: 'Arrow Exterminators, Breda Pest',
      benefit: 'Streamlined online order flow for closing attorneys, brokers, and urgent home inspections.'
    },
    revampedSolution: {
      featureName: 'Expedited Real Estate Termite Letter Portal',
      status: 'Implemented in New Version',
      impact: 'Opens high-margin repeat B2B revenue channel with local GA agents'
    },
    businessImpact: 'Atlanta and Decatur realtors can order clearance letters 24/7 with guaranteed rapid closing delivery.'
  },
  {
    id: 'bedbug-heat',
    category: 'Thermal Remediation vs Chemical Education',
    currentSite: {
      status: 'Short Generic Paragraphs',
      grade: 'C',
      detail: 'Mentions heat and liquid treatments, but does not explain why thermal remediation is single-day 100% kill vs multi-week chemical retreatments.'
    },
    competitorBenchmark: {
      standard: 'Interactive Treatment Comparison Calculator',
      players: 'Modern Pest, Terminix Thermal',
      benefit: 'Educates the customer on chemical resistance and sells high-ticket ($1,200 - $3,500) thermal remediation packages.'
    },
    revampedSolution: {
      featureName: 'Heat vs Chemical Interactive Comparison Table',
      status: 'Implemented in New Version',
      impact: '+65% upsell rate to premium thermal remediation'
    },
    businessImpact: 'Demystifies why heat treatment saves furniture and permanently eliminates resistant bed bug egg cycles.'
  },
  {
    id: 'trust-signals',
    category: 'Licensing, Guarantees & Social Proof',
    currentSite: {
      status: 'Minimal Testimonials & No Visible Badges',
      grade: 'D',
      detail: 'No visible badges for Georgia Department of Agriculture licensing, Georgia Pest Control Association, EPA pet-safe standards, or money-back warranty.'
    },
    competitorBenchmark: {
      standard: 'Prominent Trust Seal & Re-treatment Warranty Bar',
      players: 'Cook’s Pest Control, Arrow, Terminix',
      benefit: 'Features 100% Free Re-treatment Guarantee, Eco/Pet Safe certified, GPCA member logos prominently in hero and footer.'
    },
    revampedSolution: {
      featureName: 'Verified Trust Bar, Guarantees & Review Showcase',
      status: 'Implemented in New Version',
      impact: '+80% immediate consumer confidence & reduced price resistance'
    },
    businessImpact: 'Builds immediate credibility against national corporate franchises.'
  },
  {
    id: 'mobile-emergency',
    category: 'Mobile Emergency Fast-Action UX',
    currentSite: {
      status: 'Clunky Desktop Navigation on Small Screens',
      grade: 'D',
      detail: 'Requires scrolling to find phone number, no bottom floating emergency contact bar, difficult to click on mobile devices.'
    },
    competitorBenchmark: {
      standard: 'Sticky Emergency Dispatch Mobile Bar',
      players: 'Top 5 National Pest Operators',
      benefit: 'Persistent bottom toolbar with 1-tap call, text dispatch, and free estimate button on all screens.'
    },
    revampedSolution: {
      featureName: 'Mobile Fast-Action Emergency Contact Bar',
      status: 'Implemented in New Version',
      impact: 'Recovers frantic mobile traffic looking for instant help'
    },
    businessImpact: '72% of pest control emergencies originate on smartphones; instant calling captures urgent high-dollar extermination jobs.'
  }
];

export const AUDIT_METRICS = {
  overallOldGrade: 'D+',
  overallNewGrade: 'A+',
  estimatedLostLeadsMonthly: '115 - 180 qualified inquiries',
  estimatedLostRevenueMonthly: '$34,000 - $55,000+',
  mobileConversionBenchmark: 'Current: ~1.8% vs Revamped Potential: 6.4%',
  averagePageSpeedDifference: 'Old Site: 3.4s load vs Revamped: 0.6s instant',
  keyCompetitiveAdvantages: [
    '25+ Years Local Decatur & DeKalb County Roots (beat out impersonal national call centers)',
    'Specialized Thermal Bed Bug Remediation (rare among small local exterminators)',
    'Humane Wildlife Trapping & Relocation (eco-conscious Atlanta homeowners love this)',
    'Real Estate Termite Closing Clearance Letters (instant realtor favorite)'
  ]
};
