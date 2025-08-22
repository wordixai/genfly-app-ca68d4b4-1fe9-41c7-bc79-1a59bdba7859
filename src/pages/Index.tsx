import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustedSection } from "@/components/TrustedSection";
import { FeatureSection } from "@/components/FeatureSection";
import { CodeExampleSection } from "@/components/CodeExampleSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background-base text-accent-black font-sans overflow-x-clip">
      <main className="overflow-x-clip">
        {/* Announcement Banner */}
        <div className="container p-12 relative z-[102]">
          <div className="p-10 rounded-10 overflow-hidden relative text-body-medium text-center bg-black-alpha-4 text-accent-black">
            We just raised our Series A and shipped Firecrawl /v2 🎉.{" "}
            <a className="text-label-medium text-heat-100 hover:underline" href="/blog">
              Read the blog.
            </a>
          </div>
          <div className="bottom-0 absolute h-1 w-screen left-[calc(50%-50vw)] bg-border-faint"></div>
        </div>
        
        <Header />
        <HeroSection />
        <TrustedSection />
        <FeatureSection />
        <CodeExampleSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;