import { PestInfo } from '../types';

export const PEST_DATABASE: PestInfo[] = [
  {
    id: 'subterranean-termites',
    name: 'Subterranean Termites',
    category: 'wood-destroying',
    tagline: 'Georgia’s #1 Property Threat – "Silent Destroyers"',
    dangerLevel: 'Critical',
    peakSeason: 'Spring Swarms (March - May) & Year-Round Underground',
    symptoms: [
      'Mud tubes on foundation walls or crawl space piers',
      'Discarded translucent wings on window sills or doorways',
      'Hollow-sounding baseboards or soft, blistered drywall',
      'Doors and windows that suddenly stick or won\'t close cleanly'
    ],
    identificationTips: [
      'Straight antennae (unlike bent antennae of flying ants)',
      'Four wings of equal size and length',
      'Thick waist without the pinched thorax of an ant'
    ],
    treatmentSummary: 'Comprehensive perimeter liquid termiticide barrier + advanced subterranean bait station monitoring system with 1-Year Renewable Re-Treatment Warranty.',
    diyWarning: 'Over-the-counter sprays only kill visible foragers while the underground colony of 500,000+ continues devouring wooden structural joists.',
    imageUrl: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bed-bugs',
    name: 'Bed Bugs (Cimex lectularius)',
    category: 'health-hazard',
    tagline: 'Microscopic blood-feeders resistant to ordinary chemical sprays',
    dangerLevel: 'Critical',
    peakSeason: 'Peak Summer Travel & Year-Round Indoors',
    symptoms: [
      'Clusters of itchy red welts arranged in lines ("breakfast, lunch, dinner")',
      'Rust-colored or dark blood spots on sheets and mattress seams',
      'Sweet, musty odor in severe room infestations',
      'Shed translucent bug skins (nymph exuviae) in headboard cracks'
    ],
    identificationTips: [
      'Flat, oval-shaped apple seed size (4-5mm), reddish-brown color',
      'Hide in electrical outlets, box springs, and picture frames',
      'Can survive 6 to 12 months without a blood meal'
    ],
    treatmentSummary: 'Professional High-Temperature Thermal Remediation (120°F–140°F penetrates mattresses, walls, and crevices) combined with targeted perimeter crack-and-crevice residual treatments.',
    diyWarning: 'Foggers and grocery store bug bombs scatter bed bugs deeper into wall voids and do NOT kill bed bug eggs!',
    imageUrl: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'german-roaches',
    name: 'German Cockroaches & Waterbugs',
    category: 'health-hazard',
    tagline: 'Prolific kitchen breeders carrying Salmonella and triggering asthma',
    dangerLevel: 'High',
    peakSeason: 'High Year-Round Indoors / Spikes in Warm Humid Months',
    symptoms: [
      'Tiny black pepper-like droppings behind refrigerators, microwaves, and sinks',
      'Unpleasant oily, pungent pheromone smell in cabinets',
      'Egg capsules (oothecae) tucked under counter edges',
      'Daytime sightings indicating high colony density overflow'
    ],
    identificationTips: [
      'Light brown/tan body with two distinct dark parallel stripes on back',
      'Adults are 1/2 to 5/8 inch long; extremely fast runners',
      'Females reproduce every 30 days, carrying up to 40 eggs per casing'
    ],
    treatmentSummary: 'Multi-step Integrated Pest Management: Non-repellent insect growth regulators (IGR), targeted micro-gel baiting in harborage sites, and void dust treatments.',
    diyWarning: 'Common aerosol sprays repel them into other rooms and fail to eliminate egg cases, worsening the infestation within 30 days.',
    imageUrl: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'norway-rats-mice',
    name: 'Rats & Mice (Rodents)',
    category: 'wildlife-rodents',
    tagline: 'Chew electrical wiring, contaminate food, and transmit disease',
    dangerLevel: 'High',
    peakSeason: 'Fall & Winter Attic Invasions (Seeking warmth and food)',
    symptoms: [
      'Scratching, scurrying, or thumping sounds in ceilings and attics at night',
      'Dark cylindrical droppings (1/4 to 3/4 inch) near pantry and pipes',
      'Gnaw marks on wooden baseboards, plastic plumbing, and electrical wires',
      'Greasy rub marks along baseboard corners and crawl space openings'
    ],
    identificationTips: [
      'Rats can squeeze through a hole the size of a quarter; mice through a dime',
      'Require continuous gnawing to prevent teeth from overgrowing',
      'High risk of house fires from chewed insulation on electrical wiring'
    ],
    treatmentSummary: 'Comprehensive Attic & Crawl Space Inspection, Snap-trap sanitation stations, Complete Structural Exclusion (sealing entry holes with copper mesh & heavy-gauge steel), plus sanitized cleanup.',
    diyWarning: 'Over-the-counter rodent poisons cause rodents to die inside inaccessible wall voids, producing nauseating decomposition odors that linger for weeks.',
    imageUrl: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'squirrels-raccoons',
    name: 'Attic Wildlife (Squirrels & Raccoons)',
    category: 'wildlife-rodents',
    tagline: 'Destructive attic nesters requiring Georgia-licensed humane relocation',
    dangerLevel: 'Moderate',
    peakSeason: 'Late Winter & Spring (Nesting and birthing seasons)',
    symptoms: [
      'Loud scampering, rolling acorns, or vocal chattering during early dawn',
      'Torn soffit screens, chewed fascia boards, and damaged ridge vents',
      'Trod-down, contaminated attic blown-in fiberglass insulation',
      'Foul urine or fecal odors permeating upper bedroom ceilings'
    ],
    identificationTips: [
      'Gray squirrels active during daytime; flying squirrels and raccoons at night',
      'Raccoons can easily rip through rotten shingles and roof vents'
    ],
    treatmentSummary: '100% Humane Live-Trapping, Safe Forest Relocation 15+ Miles Away, 1-Way Exclusion Doors, and Heavy-Duty Metal Roof/Soffit Reinforcement.',
    diyWarning: 'Trapping a mother animal inside can leave baby kits stranded to die in your ceiling, creating extreme biohazard smells and structural damage.',
    imageUrl: 'https://images.unsplash.com/photo-1504006833117-8886a355efbf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'carpenter-ants',
    name: 'Carpenter Ants & Fire Ants',
    category: 'wood-destroying',
    tagline: 'Excavate smooth wooden galleries and inflict painful venomous bites',
    dangerLevel: 'Moderate',
    peakSeason: 'Spring and Summer Active Foraging',
    symptoms: [
      'Fine wood shavings ("frass") resembling sawdust near door frames',
      'Large black ants (up to 1/2 inch) spotted wandering near moist wood',
      'Faint rustling sound inside dry walls or under bathroom sinks',
      'Raised dirt mounds in yard that erupt aggressively when touched (fire ants)'
    ],
    identificationTips: [
      'Carpenter ants do NOT eat wood; they hollow it out for nesting galleries',
      'Distinct pinched waist with a single node and rounded thoracic curve'
    ],
    treatmentSummary: 'Perimeter barrier applications, undetectable non-repellent transfer insecticides that workers carry back to eliminate the queen, and yard broadcast treatments.',
    diyWarning: 'Surface sprays only kill 5% of foragers; the queen remains protected inside wall cavities generating hundreds of replacements.',
    imageUrl: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'wasps-hornets',
    name: 'Wasps, Hornets & Yellowjackets',
    category: 'health-hazard',
    tagline: 'Aggressive stinging insects posing severe anaphylaxis risks',
    dangerLevel: 'High',
    peakSeason: 'Late Summer & Autumn when colonies reach maximum aggressiveness',
    symptoms: [
      'Papery umbrella-shaped nests under eaves, porch ceilings, or deck railings',
      'Insects buzzing constantly around attic vents, gutters, or children’s playsets',
      'Ground nests hidden in flower beds or beneath landscaping timbers'
    ],
    identificationTips: [
      'Yellowjackets are black and yellow, capable of stinging repeatedly',
      'Paper wasps have long dangling legs in flight'
    ],
    treatmentSummary: 'Protective gear rapid knockdown, surgical nest extraction, and preventative repellent residual spraying along all eaves and overhangs.',
    diyWarning: 'Shooting grocery store sprays at elevated nests often prompts retaliatory swarming and painful emergency room visits for children and pets.',
    imageUrl: 'https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mosquitoes-ticks',
    name: 'Mosquitoes, Fleas & Ticks',
    category: 'outdoor-yard',
    tagline: 'Carriers of West Nile, Lyme Disease, Heartworms, and constant biting',
    dangerLevel: 'Moderate',
    peakSeason: 'April through October in Humid Georgia Weather',
    symptoms: [
      'Inability to enjoy your backyard without applying sticky bug spray',
      'Pets relentlessly scratching, biting fur, or developing hot spots',
      'Standing water in bird baths, gutters, or plant saucers breeding larvae',
      'Ticks found clinging to dog paws, ankles, or family clothing'
    ],
    identificationTips: [
      'Mosquitoes breed in as little as 1/2 inch of stagnant water in just 7 days',
      'Ticks hide on tall grass blades and shrubbery waiting for a host'
    ],
    treatmentSummary: 'Yard-wide backpack mist blower treatment targeting undersides of foliage, biological larvicide dunks for standing water, and monthly barrier protection.',
    diyWarning: 'Citronella candles only provide a tiny 3-foot radius of mild protection while mosquitoes breed aggressively in yard foliage.',
    imageUrl: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=800&q=80'
  }
];
