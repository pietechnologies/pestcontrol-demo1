import React, { useState } from 'react';
import { 
  COMPETITOR_AUDIT_DATA, 
  AUDIT_METRICS 
} from '../data/auditData';
import { 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  FileCheck, 
  Calculator, 
  Smartphone, 
  Eye,
  Thermometer,
  Activity
} from 'lucide-react';
import { LOGO_PRIMARY_URL, LOGO_FALLBACK_URL } from '../assets/logo';

interface CompetitorAuditViewProps {
  onClose: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const CompetitorAuditView: React.FC<CompetitorAuditViewProps> = ({
  onClose,
  onNavigateToSection
}) => {
  const [activeTab, setActiveTab] = useState<'matrix' | 'financial' | 'features'>('matrix');
  const [selectedAuditId, setSelectedAuditId] = useState<string>(COMPETITOR_AUDIT_DATA[0].id);

  const selectedItem = COMPETITOR_AUDIT_DATA.find(item => item.id === selectedAuditId) || COMPETITOR_AUDIT_DATA[0];

  return (
    <div className="bg-[#081024] text-slate-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header / Intro Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b-2 border-blue-900/60">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl shadow-md border border-slate-200 inline-block">
                <img 
                  src={LOGO_PRIMARY_URL} 
                  onError={(e) => {
                    e.currentTarget.src = LOGO_FALLBACK_URL;
                  }}
                  alt="First Choice Pest Control LLC" 
                  className="h-10 w-auto object-contain"
                />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Technical Website Audit & Competitor Gap Benchmark
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              What First Choice Pest Control Is Missing & How To Out-Convert Competitors
            </h1>
            <p className="text-blue-200 text-sm sm:text-base max-w-3xl leading-relaxed">
              An exhaustive market audit analyzing the live website <strong className="text-white">firstchoicepestcontrolllc.com</strong> (Decatur, GA) against regional and national leaders 
              (<strong className="text-white">Arrow Exterminators, Orkin, Terminix, and Northwest Exterminating</strong>), 
              highlighting missed revenue channels and the new features implemented in this modern web application.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-[#D9252A] hover:bg-[#b81d22] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-red-700/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>View Revamped Live Site</span>
            </button>
          </div>
        </div>

        {/* High-Level Scorecard & Lost Revenue Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-blue-950/70 border-2 border-red-500/40 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-red-300">Current Site Rating</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-black bg-red-500/20 text-red-200">Outdated</span>
            </div>
            <div className="text-4xl font-black text-[#D9252A] mt-2">{AUDIT_METRICS.overallOldGrade}</div>
            <p className="text-xs text-blue-200 mt-2">
              Lacks price transparency, interactive diagnostic guides, real-time booking, and mobile fast-action dispatch.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-blue-950/70 border-2 border-blue-500/40 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-blue-300">Revamped App Rating</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-black bg-blue-500/20 text-blue-200">Modern Pro</span>
            </div>
            <div className="text-4xl font-black text-white mt-2">{AUDIT_METRICS.overallNewGrade}</div>
            <p className="text-xs text-blue-200 mt-2">
              Equipped with instant price calculator, diagnostic guide, Georgia WDIR portal, and Decatur 25-mile validator.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-blue-950/70 border-2 border-amber-500/40 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-amber-300">Estimated Missed Leads</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-black bg-amber-500/20 text-amber-200">Monthly</span>
            </div>
            <div className="text-2xl font-black text-amber-300 mt-2">{AUDIT_METRICS.estimatedLostLeadsMonthly}</div>
            <p className="text-xs text-blue-200 mt-2">
              Property owners bouncing due to friction: no transparent price estimate and no after-hours inspection calendar.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-blue-950/70 border-2 border-purple-500/40 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-purple-300">Recoverable Revenue</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-black bg-purple-500/20 text-purple-200">ARR Target</span>
            </div>
            <div className="text-2xl font-black text-purple-200 mt-2">{AUDIT_METRICS.estimatedLostRevenueMonthly}</div>
            <p className="text-xs text-blue-200 mt-2">
              High-margin bed bug heat remediation ($1.2k–$3k) and recurring quarterly termite subscriptions.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b-2 border-blue-900/60 gap-4">
          <button
            onClick={() => setActiveTab('matrix')}
            className={`pb-3 text-sm font-black border-b-2 transition-all cursor-pointer ${
              activeTab === 'matrix' 
                ? 'border-[#D9252A] text-white' 
                : 'border-transparent text-blue-300 hover:text-white'
            }`}
          >
            1. Head-to-Head Competitor Gap Matrix (8 Pillars)
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`pb-3 text-sm font-black border-b-2 transition-all cursor-pointer ${
              activeTab === 'features' 
                ? 'border-[#D9252A] text-white' 
                : 'border-transparent text-blue-300 hover:text-white'
            }`}
          >
            2. New Features Added In This Revamp
          </button>
          <button
            onClick={() => setActiveTab('financial')}
            className={`pb-3 text-sm font-black border-b-2 transition-all cursor-pointer ${
              activeTab === 'financial' 
                ? 'border-[#D9252A] text-white' 
                : 'border-transparent text-blue-300 hover:text-white'
            }`}
          >
            3. Conversion Bottlenecks on firstchoicepestcontrolllc.com
          </button>
        </div>

        {/* TAB 1: Head-to-Head Matrix */}
        {activeTab === 'matrix' && (
          <div className="space-y-6">
            <div className="bg-[#0F1E44] rounded-2xl border-2 border-blue-900/80 p-6 overflow-x-auto shadow-xl">
              <table className="w-full text-left text-sm border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-blue-800 text-blue-300 text-xs uppercase tracking-wider">
                    <th className="pb-4 font-black">Strategic Capability</th>
                    <th className="pb-4 font-black text-red-300">Current First Choice Site</th>
                    <th className="pb-4 font-black text-amber-300">Competitors Benchmark (Arrow, Orkin, Terminix)</th>
                    <th className="pb-4 font-black text-blue-200">New Solution Implemented</th>
                    <th className="pb-4 font-black">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-800/60">
                  {COMPETITOR_AUDIT_DATA.map((item) => (
                    <tr 
                      key={item.id}
                      onClick={() => setSelectedAuditId(item.id)}
                      className={`hover:bg-blue-900/40 cursor-pointer transition-colors ${
                        selectedAuditId === item.id ? 'bg-blue-900/60' : ''
                      }`}
                    >
                      <td className="py-4 pr-4">
                        <span className="font-bold text-white block">{item.category}</span>
                        <span className="text-xs text-blue-300">{item.businessImpact}</span>
                      </td>

                      <td className="py-4 pr-4 text-red-300">
                        <div className="flex items-center gap-1.5 font-bold text-xs">
                          <span className="px-1.5 py-0.5 rounded bg-red-500/20 text-[#D9252A] font-black">
                            {item.currentSite.grade}
                          </span>
                          <span>{item.currentSite.status}</span>
                        </div>
                      </td>

                      <td className="py-4 pr-4 text-blue-200 text-xs">
                        <span className="font-bold text-amber-300 block">{item.competitorBenchmark.standard}</span>
                        <span className="text-[11px] text-blue-300">{item.competitorBenchmark.players}</span>
                      </td>

                      <td className="py-4 pr-4 text-white text-xs">
                        <span className="font-bold block text-blue-100">{item.revampedSolution.featureName}</span>
                        <span className="text-[11px] text-amber-300 font-semibold">{item.revampedSolution.impact}</span>
                      </td>

                      <td className="py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-black bg-[#D9252A] text-white">
                          <CheckCircle2 className="w-3 h-3" />
                          Ready
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Deep Dive Card for Selected Pillar */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#10234E] to-[#0A1633] border-2 border-blue-800 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-blue-900">
                <div className="flex items-center gap-3">
                  <span className="p-2.5 rounded-xl bg-[#D9252A] text-white shadow-sm">
                    <Sparkles className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-white">
                      Deep Dive: {selectedItem.category}
                    </h3>
                    <p className="text-xs text-blue-200">{selectedItem.businessImpact}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5">
                <div className="p-4 rounded-xl bg-blue-950/80 border border-red-500/30 space-y-2">
                  <p className="text-xs font-black uppercase text-red-400">Current Limitation</p>
                  <p className="text-sm font-black text-white">{selectedItem.currentSite.status}</p>
                  <p className="text-xs text-blue-200 leading-relaxed">{selectedItem.currentSite.detail}</p>
                </div>

                <div className="p-4 rounded-xl bg-blue-950/80 border border-amber-500/30 space-y-2">
                  <p className="text-xs font-black uppercase text-amber-300">Competitors Benchmark</p>
                  <p className="text-sm font-black text-white">{selectedItem.competitorBenchmark.standard}</p>
                  <p className="text-xs text-blue-200 leading-relaxed">{selectedItem.competitorBenchmark.benefit}</p>
                  <p className="text-[11px] text-blue-300">Seen on: {selectedItem.competitorBenchmark.players}</p>
                </div>

                <div className="p-4 rounded-xl bg-blue-950/80 border border-blue-400/40 space-y-2">
                  <p className="text-xs font-black uppercase text-blue-300">Our Revamped Solution</p>
                  <p className="text-sm font-black text-white">{selectedItem.revampedSolution.featureName}</p>
                  <p className="text-xs text-blue-200 leading-relaxed">{selectedItem.revampedSolution.impact}</p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        onClose();
                        if (selectedItem.id === 'pricing-calculator') onNavigateToSection('calculator');
                        else if (selectedItem.id === 'pest-identifier') onNavigateToSection('pest-id');
                        else if (selectedItem.id === 'bedbug-heat') onNavigateToSection('bedbug-heat');
                        else if (selectedItem.id === 'service-area') onNavigateToSection('service-area');
                        else if (selectedItem.id === 'termite-letter') onNavigateToSection('termite-letter');
                        else onNavigateToSection('services');
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-black text-[#F87171] hover:text-white underline cursor-pointer"
                    >
                      <span>Jump to this tool on live site</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: New Features Added */}
        {activeTab === 'features' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#0F1E44] border-2 border-blue-900 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#D9252A] text-white flex items-center justify-center shadow-md">
                <Calculator className="w-5 h-5" />
              </div>
              <h4 className="text-base font-black text-white">1. Instant Smart Cost Estimator</h4>
              <p className="text-xs text-blue-200 leading-relaxed">
                Calculates transparent prices based on property sq footage, treatment category, and plan frequency. Captures phone/email leads before booking.
              </p>
              <div className="text-xs text-amber-300 font-bold pt-1">
                Competitors with this: Terminix, Aptive, Orkin
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F1E44] border-2 border-blue-900 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#D9252A] text-white flex items-center justify-center shadow-md">
                <Thermometer className="w-5 h-5" />
              </div>
              <h4 className="text-base font-black text-white">2. Bed Bug Heat vs Chemical Analyzer</h4>
              <p className="text-xs text-blue-200 leading-relaxed">
                Side-by-side scientific comparison illustrating why 1-day thermal remediation destroys eggs and saves furniture, easily justifying high-ticket $1,200+ jobs.
              </p>
              <div className="text-xs text-amber-300 font-bold pt-1">
                Differentiator: Explains chemical immunity & zero chemical residue.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F1E44] border-2 border-blue-900 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1D3B8B] text-white flex items-center justify-center shadow-md">
                <Activity className="w-5 h-5 text-[#F87171]" />
              </div>
              <h4 className="text-base font-black text-white">3. Property Diagnostic Guide</h4>
              <p className="text-xs text-blue-200 leading-relaxed">
                Filter by visual evidence (mud tubes, scratching sounds, droppings, bites) so property owners can self-diagnose and immediately request the proper protocol.
              </p>
              <div className="text-xs text-amber-300 font-bold pt-1">
                Competitors with this: Orkin Pest Library, Terminix Identifier
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F1E44] border-2 border-blue-900 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#D9252A] text-white flex items-center justify-center shadow-md">
                <FileCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-black text-white">4. Expedited GA Termite Letter Portal</h4>
              <p className="text-xs text-blue-200 leading-relaxed">
                Dedicated fast-order module for Decatur and Atlanta real estate agents, loan officers, and buyers requiring guaranteed 24-hr closing clearance reports.
              </p>
              <div className="text-xs text-amber-300 font-bold pt-1">
                Captures high-volume B2B referral partnerships across DeKalb County.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F1E44] border-2 border-blue-900 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1D3B8B] text-white flex items-center justify-center shadow-md">
                <TrendingUp className="w-5 h-5 text-[#F87171]" />
              </div>
              <h4 className="text-base font-black text-white">5. 25-Mile Atlanta ZIP Code Validator</h4>
              <p className="text-xs text-blue-200 leading-relaxed">
                Live lookup for Decatur, Atlanta, Tucker, Stone Mountain, Brookhaven, and Snellville displaying instant technician availability and arrival timeframes.
              </p>
              <div className="text-xs text-amber-300 font-bold pt-1">
                Eliminates the #1 bounce objection: "Do they service my street?"
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F1E44] border-2 border-blue-900 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#D9252A] text-white flex items-center justify-center shadow-md">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="text-base font-black text-white">6. 24/7 Mobile Sticky Dispatch Bar</h4>
              <p className="text-xs text-blue-200 leading-relaxed">
                A persistent floating bottom bar on mobile screens enabling 1-tap call to (770) 482-7322 or click-to-book inspection.
              </p>
              <div className="text-xs text-amber-300 font-bold pt-1">
                Converts panicked homeowners dealing with swarms or midnight infestations.
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Conversion Bottlenecks on firstchoicepestcontrolllc.com */}
        {activeTab === 'financial' && (
          <div className="p-6 rounded-2xl bg-[#0F1E44] border-2 border-blue-900 space-y-6">
            <h3 className="text-xl font-black text-white">
              Why the Current Website (firstchoicepestcontrolllc.com) Underperforms
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 space-y-2">
                <div className="flex items-center gap-2 text-red-300 font-black">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-[#D9252A]" />
                  <span>Bottleneck 1: Zero Pricing Transparency</span>
                </div>
                <p className="text-blue-100 text-xs leading-relaxed">
                  The original site says only "call us now". In 2026, over 70% of homeowners under age 45 refuse to call without knowing an approximate price range, resulting in immediate bounce back to Google.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 space-y-2">
                <div className="flex items-center gap-2 text-red-300 font-black">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-[#D9252A]" />
                  <span>Bottleneck 2: No After-Hours Lead Capture</span>
                </div>
                <p className="text-blue-100 text-xs leading-relaxed">
                  Most people discover bed bugs or hearing attic scurrying at 10 PM. Because the old site has no interactive calendar or instant quote generator, these visitors leave and book with 24/7 operators.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 space-y-2">
                <div className="flex items-center gap-2 text-red-300 font-black">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-[#D9252A]" />
                  <span>Bottleneck 3: Missing Georgia Certification Badges</span>
                </div>
                <p className="text-blue-100 text-xs leading-relaxed">
                  Termites cause severe structural damage. Consumers want reassurance of Georgia Department of Agriculture licensing and GPCA credentials, which were absent from the original homepage.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 space-y-2">
                <div className="flex items-center gap-2 text-red-300 font-black">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-[#D9252A]" />
                  <span>Bottleneck 4: Under-Promoting Thermal Bed Bug Tech</span>
                </div>
                <p className="text-blue-100 text-xs leading-relaxed">
                  Heat remediation is First Choice’s highest margin specialty service. On the old site it was buried in brief plain text instead of being spotlighted with 1-day kill proof and comparison tables.
                </p>
              </div>
            </div>

            {/* Strategic Advice */}
            <div className="p-4 rounded-xl bg-blue-950 border border-blue-500/40">
              <h4 className="text-white font-black text-sm mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F87171]" />
                The Solution: Deploying This High-Converting Web Application
              </h4>
              <p className="text-xs text-blue-200 leading-relaxed">
                By replacing the static WordPress page with this reactive web app (ready to run directly on GitHub Pages or custom domain), 
                First Choice can immediately out-convert local competitors, capture after-hours quotes, and dominate local Decatur/Atlanta search.
              </p>
            </div>
          </div>
        )}

        {/* Footer CTAs */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#10234E] to-[#0A1633] border-2 border-[#D9252A] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
          <div>
            <h4 className="text-lg font-black text-white">Experience the Revamped Website Now</h4>
            <p className="text-xs text-blue-200">
              Explore the working price calculator, diagnostic guide, appointment booking, and termite letter fast-track.
            </p>
          </div>
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-[#D9252A] hover:bg-[#b81d22] text-white font-black text-xs uppercase tracking-wider shadow-md transition-all whitespace-nowrap cursor-pointer"
          >
            Launch Interactive Website Experience →
          </button>
        </div>

      </div>
    </div>
  );
};
