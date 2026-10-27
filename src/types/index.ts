export type PestCategory = 'wood-destroying' | 'indoor-nuisance' | 'health-hazard' | 'wildlife-rodents' | 'outdoor-yard';

export interface PestInfo {
  id: string;
  name: string;
  category: PestCategory;
  tagline: string;
  dangerLevel: 'Critical' | 'High' | 'Moderate' | 'Low';
  peakSeason: string;
  symptoms: string[];
  identificationTips: string[];
  treatmentSummary: string;
  diyWarning: string;
  imageUrl: string;
}

export interface ServiceInfo {
  id: string;
  title: string;
  tag: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  responseTime: string;
  warranty: string;
  startingPrice: string;
  badge?: string;
}

export interface CompetitorAuditItem {
  id: string;
  category: string;
  currentSite: {
    status: string;
    grade: 'F' | 'D' | 'C' | 'B';
    detail: string;
  };
  competitorBenchmark: {
    standard: string;
    players: string; // e.g. "Orkin, Terminix, Arrow"
    benefit: string;
  };
  revampedSolution: {
    featureName: string;
    status: string;
    impact: string;
  };
  businessImpact: string; // e.g. "Loses ~40% of evening mobile visitors"
}

export interface PlanTier {
  id: string;
  name: string;
  badge?: string;
  priceQuarterly: number;
  priceMonthly: number;
  initialVisitFee: number;
  isPopular?: boolean;
  description: string;
  coverage: string[];
  frequency: string;
  warranty: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  service: string;
  comment: string;
  date: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Termites' | 'Bed Bugs' | 'Safety' | 'Pricing';
}

export interface ServiceAreaLocation {
  city: string;
  zip: string;
  county: string;
  dispatchTime: string;
  covered: boolean;
}
