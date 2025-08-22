import { Button } from "@/components/ui/button";
import { Code, Zap, Shield } from "lucide-react";

export function FeatureSection() {
  return (
    <section className="container -mt-1">
      <div className="relative py-88 lg:py-143 overflow-clip z-[1]">
        <div className="h-1 bg-border-faint bottom-0 left-0 w-full absolute"></div>
        
        <div className="relative">
          <div className="mx-auto px-12 pt-16 flex gap-10 bg-background-base relative w-max pb-16 items-center text-label-x-small">
            <div className="h-1 bottom-0 absolute w-full left-0 bg-border-faint"></div>
            <div className="text-black-alpha-16 pointer-events-none select-none">//</div>
            <div className="relative flex gap-10 items-center">
              <Code className="size-5 text-heat-100" />
              <div>Developer First</div>
            </div>
            <div className="text-black-alpha-16 pointer-events-none select-none -scale-x-100">//</div>
          </div>
          
          <div>
            <h2 className="lg:w-max relative mx-auto text-accent-black text-title-h2 pb-8 pt-12 px-20 text-center">
              Start <span className="text-heat-100">scraping</span>{" "}
              <br className="lg:hidden" /> today
            </h2>
            <div className="max-w-369 px-20 py-8 relative w-full mx-auto text-black-alpha-72 text-body-large text-center mb-32">
              Enhance your apps with industry leading web scraping and crawling capabilities.
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-16 relative">
          <div className="relative p-8 lg:p-12 group">
            <button className="py-16 lg-max:pl-20 lg-max:pr-24 lg:py-32 text-center lg-max:flex lg-max:items-center gap-12 block w-full relative z-[3] border border-transparent hover:border-border-faint rounded-12 lg:rounded-20 hover:bg-white-alpha-72 hover:shadow-lg transition-all">
              <div className="lg-max:contents flex justify-center">
                <div className="size-7 bg-heat-100 rounded-full flex-center">
                  <Code className="size-4 text-white" />
                </div>
              </div>
              <div className="text-label-medium justify-center text-accent-black lg:mt-20 lg:mb-8 flex gap-8 items-center">
                Scrape
              </div>
              <div className="text-black-alpha-72 lg-max:hidden text-body-medium max-w-230 mx-auto">
                Get llm-ready data from websites. Markdown, JSON, screenshot, etc.
              </div>
            </button>
          </div>
          
          <div className="relative p-8 lg:p-12 group">
            <button className="py-16 lg-max:pl-20 lg-max:pr-24 lg:py-32 text-center lg-max:flex lg-max:items-center gap-12 block w-full relative z-[3] border border-transparent hover:border-border-faint rounded-12 lg:rounded-20 hover:bg-white-alpha-72 hover:shadow-lg transition-all">
              <div className="lg-max:contents flex justify-center">
                <div className="size-7 bg-gray-400 rounded-full flex-center opacity-60">
                  <Zap className="size-4 text-white" />
                </div>
              </div>
              <div className="text-label-medium justify-center text-accent-black lg:mt-20 lg:mb-8 flex gap-8 items-center">
                Search
                <div className="py-2 px-6 rounded-4 text-xs font-medium bg-heat-12 text-heat-100">
                  New
                </div>
              </div>
              <div className="text-black-alpha-72 lg-max:hidden text-body-medium max-w-230 mx-auto">
                Search the web and get full content from results.
              </div>
            </button>
          </div>
          
          <div className="relative p-8 lg:p-12 group">
            <button className="py-16 lg-max:pl-20 lg-max:pr-24 lg:py-32 text-center lg-max:flex lg-max:items-center gap-12 block w-full relative z-[3] border border-transparent hover:border-border-faint rounded-12 lg:rounded-20 hover:bg-white-alpha-72 hover:shadow-lg transition-all">
              <div className="lg-max:contents flex justify-center">
                <div className="size-7 bg-gray-400 rounded-full flex-center opacity-60">
                  <Shield className="size-4 text-white" />
                </div>
              </div>
              <div className="text-label-medium justify-center text-accent-black lg:mt-20 lg:mb-8 flex gap-8 items-center">
                Crawl
              </div>
              <div className="text-black-alpha-72 lg-max:hidden text-body-medium max-w-230 mx-auto">
                Crawl all the pages on a website and get data for each page.
              </div>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 relative mt-32">
          <div className="bottom-0 left-0 absolute h-1 w-full bg-border-faint"></div>
          
          <div className="flex gap-10 p-15 items-center relative">
            <div className="w-12 h-12 rounded-full relative border border-border-muted bg-background-base"></div>
            <div className="w-12 h-12 rounded-full relative border border-border-muted bg-background-base"></div>
            <div className="w-12 h-12 rounded-full relative border border-border-muted bg-background-base"></div>
            <div className="h-full right-0 top-0 w-1 bg-border-faint absolute lg-max:hidden"></div>
          </div>
          
          <div className="flex p-15 gap-12 lg-max:hidden">
            <div className="flex-1 h-12 relative rounded-full border border-border-faint"></div>
            <div className="size-12 relative rounded-full border border-border-faint"></div>
            <div className="flex-1 h-12 relative rounded-full border border-border-faint"></div>
          </div>
        </div>
        
        <div className="relative -mt-1 flex z-[1] justify-between">
          <div className="bottom-0 left-0 absolute h-1 w-full bg-border-faint"></div>
          
          <div className="overflow-x-scroll whitespace-nowrap hide-scrollbar lg:contents py-32 -my-32">
            <div className="flex relative">
              <div className="absolute top-12 left-0 z-[2] inset-y-12 bg-white-alpha-72 rounded-full backdrop-blur-4 shadow-md w-32 translate-x-3"></div>
              
              <div className="relative p-12 group">
                <div className="h-full w-1 right-0 absolute bg-border-faint top-0"></div>
                <button className="py-12 px-24 flex gap-4 justify-center items-center w-full relative z-[3] transition-colors text-accent-black border border-transparent hover:border-border-faint rounded-full">
                  <div className="size-5 bg-yellow-500 rounded"></div>
                  <div className="px-4 text-label-medium">Python</div>
                </button>
              </div>
              
              <div className="relative p-12 group">
                <div className="h-full w-1 right-0 absolute bg-border-faint top-0"></div>
                <button className="py-12 px-24 flex gap-4 justify-center items-center w-full relative z-[3] transition-colors text-black-alpha-64 hover:text-black-alpha-88 hover:border-border-faint border border-transparent rounded-full">
                  <div className="size-5 bg-green-500 rounded"></div>
                  <div className="px-4 text-label-medium">Node.js</div>
                </button>
              </div>
              
              <div className="relative p-12 group">
                <div className="h-full w-1 right-0 absolute bg-border-faint top-0"></div>
                <button className="py-12 px-24 flex gap-4 justify-center items-center w-full relative z-[3] transition-colors text-black-alpha-64 hover:text-black-alpha-88 hover:border-border-faint border border-transparent rounded-full">
                  <div className="size-5 bg-blue-500 rounded"></div>
                  <div className="px-4 text-label-medium">Curl</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}