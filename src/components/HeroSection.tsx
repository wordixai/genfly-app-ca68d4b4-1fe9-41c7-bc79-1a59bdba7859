import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="overflow-x-clip" id="home-hero">
      <div className="pt-28 lg:pt-254 lg:-mt-100 pb-115 relative" id="hero-content">
        <div className="relative container px-16">
          <a className="p-4 rounded-full flex w-max mx-auto mb-12 lg:mb-16 items-center relative border border-border-faint group bg-background-base" href="/pricing">
            <div className="px-8 text-label-x-small">2 Months Free — Annually</div>
            <div className="p-1">
              <div className="size-18 bg-accent-black flex-center rounded-full group-hover:bg-heat-100 transition-all group-hover:w-30">
                <ArrowRight className="size-3 text-white transition-all -translate-x-2 group-hover:translate-x-0" />
              </div>
            </div>
          </a>
          
          <h1 className="text-title-h1 mx-auto text-center mb-12 lg:mb-16">
            Turn websites into <br className="lg-max:hidden" />
            <span className="text-heat-100">LLM-ready</span> data
          </h1>
          
          <p className="text-center text-body-large mb-16">
            Power your AI apps with clean data crawled
            <br className="lg-max:hidden" />
            from any website.
            <a 
              className="bg-black-alpha-4 hover:bg-black-alpha-6 lg:ml-4 rounded-6 px-8 lg:px-6 text-label-large lg-max:py-2 h-30 lg:h-24 block lg-max:mt-8 lg-max:mx-auto lg-max:w-max lg:inline-block gap-4 transition-all"
              target="_blank" 
              href="https://github.com/firecrawl/firecrawl"
            >
              It's also open source.
            </a>
          </p>
        </div>
      </div>
      
      <div className="container lg:contents p-16 relative -mt-90">
        <div className="max-w-552 mx-auto w-full relative z-[11] lg:z-[2] rounded-20 lg:-mt-76">
          <div className="overlay bg-accent-white shadow-lg"></div>
          
          <label className="p-16 flex gap-8 items-center w-full relative border-b border-black-alpha-5">
            <Globe className="size-6 text-black-alpha-32" />
            <Input 
              className="w-full bg-transparent text-body-input text-accent-black placeholder:text-black-alpha-48 border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0" 
              placeholder="https://example.com"
              type="text" 
            />
          </label>
          
          <div className="p-10 flex justify-between items-center relative">
            <div className="bg-black-alpha-4 flex items-center rounded-10 p-2 relative lg-max:hidden shadow-inner">
              <div className="absolute top-2 left-2 h-32 bg-accent-white rounded-8 w-89 shadow-md"></div>
              
              <button className="text-label-medium p-6 relative transition-all group flex items-center text-accent-black pr-4">
                <div className="size-5 bg-heat-100 rounded mr-2"></div>
                <span className="px-6">Scrape</span>
              </button>
              
              <div className="px-2 transition-all opacity-0">
                <div className="w-1 h-12 bg-black-alpha-5"></div>
              </div>
              
              <button className="text-label-medium p-6 relative transition-all group flex items-center text-black-alpha-56">
                <div className="size-5 bg-gray-400 rounded mr-2 opacity-60"></div>
                <span className="px-6">Search</span>
                <div className="py-2 px-6 rounded-4 text-xs font-medium transition-all bg-black-alpha-4 text-black-alpha-56 ml-2">
                  New
                </div>
              </button>
              
              <div className="px-2 transition-all">
                <div className="w-1 h-12 bg-black-alpha-5"></div>
              </div>
              
              <button className="text-label-medium p-6 relative transition-all group flex items-center text-black-alpha-56 pr-4">
                <div className="size-5 bg-gray-400 rounded mr-2 opacity-60"></div>
                <span className="px-6">Map</span>
              </button>
              
              <div className="px-2 transition-all">
                <div className="w-1 h-12 bg-black-alpha-5"></div>
              </div>
              
              <button className="text-label-medium p-6 relative transition-all group flex items-center text-black-alpha-56 pr-4">
                <div className="size-5 bg-gray-400 rounded mr-2 opacity-60"></div>
                <span className="px-6">Crawl</span>
              </button>
            </div>
            
            <a className="contents" href="/playground">
              <Button className="bg-heat-100 hover:bg-heat-90 text-accent-white active:scale-[0.995] rounded-10 p-8 gap-2">
                <div className="overflow-hidden w-15">
                  <div className="w-max whitespace-nowrap">
                    <div className="w-15 py-8 flex-center">
                      <ArrowRight className="size-5" />
                    </div>
                  </div>
                </div>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}