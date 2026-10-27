import { PlanTier } from '../types';

export const PRICING_PLANS: PlanTier[] = [
  {
    id: 'essential-guard',
    name: 'Essential Pest Shield',
    badge: 'Popular for Starters',
    priceQuarterly: 119,
    priceMonthly: 39,
    initialVisitFee: 89,
    isPopular: false,
    description: 'Perfect for standard homes seeking preventative barrier protection against common household crawlers.',
    coverage: [
      'Ants (Fire, Carpenter & Odorous)',
      'Cockroaches & Waterbugs',
      'Common Spiders & Cobweb Sweeping',
      'Wasp & Mud Dauber Nest Removal',
      'Exterior 3-Ft Barrier Perimeter Treatment',
      'Free Re-Treatments if bugs return'
    ],
    frequency: 'Quarterly (Every 3 Months)',
    warranty: '100% Free Re-Service Guarantee'
  },
  {
    id: 'total-defense',
    name: 'Total Home Defense + Rodents',
    badge: 'Best Value / Most Popular',
    priceQuarterly: 169,
    priceMonthly: 55,
    initialVisitFee: 99,
    isPopular: true,
    description: 'Our most comprehensive residential defense including indoor/outdoor pests PLUS attic & exterior rodent defense.',
    coverage: [
      'Everything in Essential Pest Shield',
      'Exterior Rodent Baiting & Monitoring Stations',
      'Attic & Crawlspace Preventative Inspections',
      'Centipedes, Millipedes & Crickets',
      'Silverfish & Earwig Elimination',
      'Priority 24-Hour Scheduling Window',
      'Unlimited Free On-Demand Callbacks'
    ],
    frequency: 'Quarterly + Bi-Monthly Rodent Check',
    warranty: 'Zero-Bug & Rodent-Free Guarantee'
  },
  {
    id: 'platinum-termite-pest',
    name: 'Platinum Termite + Pest Protection',
    badge: 'Maximum Property Protection',
    priceQuarterly: 249,
    priceMonthly: 79,
    initialVisitFee: 299,
    isPopular: false,
    description: 'The ultimate peace-of-mind package uniting subterranean termite baiting, structural warranty, and full pest defense.',
    coverage: [
      'Everything in Total Home Defense',
      'Full Perimeter Subterranean Termite Bait System',
      'Annual Structural Termite Re-inspection',
      'Official Georgia Termite Warranty Bond',
      'Includes Official Real Estate Termite Letter ($125 value)',
      '10% Discount on Wildlife or Bed Bug Services',
      'Dedicated Senior Certified Technician'
    ],
    frequency: 'Quarterly Visits + Annual Termite Check',
    warranty: 'Full Structural Re-treatment Guarantee Bond'
  }
];
