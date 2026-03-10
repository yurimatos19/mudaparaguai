import { Hero } from "@/components/home/hero";
import { BridgeSection } from "@/components/home/bridge-section";
import dynamic from 'next/dynamic';

const StatsSection = dynamic(() => import('@/components/home/stats-section').then(mod => mod.StatsSection), { ssr: true });
const ProcessTimeline = dynamic(() => import('@/components/home/process-timeline').then(mod => mod.ProcessTimeline), { ssr: true });
const PersonasSection = dynamic(() => import('@/components/home/personas-section').then(mod => mod.PersonasSection), { ssr: true });
const WhyParaguay = dynamic(() => import('@/components/home/why-paraguay').then(mod => mod.WhyParaguay), { ssr: true });
const TechDemos = dynamic(() => import('@/components/home/tech-demos').then(mod => mod.TechDemos), { ssr: true });
const SecurityCompliance = dynamic(() => import('@/components/home/security-compliance').then(mod => mod.SecurityCompliance), { ssr: true });
const WhoWeAre = dynamic(() => import('@/components/home/who-we-are').then(mod => mod.WhoWeAre), { ssr: true });
const FAQSection = dynamic(() => import('@/components/home/faq-section').then(mod => mod.FAQSection), { ssr: true });
const CTASection = dynamic(() => import('@/components/home/cta-section').then(mod => mod.CTASection), { ssr: true });

export default function Home(): React.ReactElement {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <StatsSection />
      <BridgeSection />
      <ProcessTimeline />
      <PersonasSection />
      <WhyParaguay />
      <TechDemos />
      <SecurityCompliance />
      <WhoWeAre />
      <FAQSection />
      <CTASection />
    </div>
  );
}
