import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <div className="container -mt-1">
      <div className="lg:flex relative -mt-1">
        <div className="h-full w-1 lg-max:hidden top-0 left-[calc(50%-0.5px)] absolute bg-border-faint"></div>
        
        <div className="flex-1 relative">
          <div className="lg-max:pb-76 p-32 lg:px-64 lg:py-56 h-full relative">
            <div className="flex items-center gap-2 mb-32">
              <div className="size-8 bg-heat-100 rounded-full flex-center text-white font-bold text-sm">
                F
              </div>
              <span className="text-label-medium text-accent-black font-semibold">
                Firecrawl
              </span>
            </div>
            
            <div className="text-label-x-large">
              The easiest way to extract <br />
              data from the web
            </div>
          </div>
        </div>
        
        <div className="flex-1 lg:-ml-1 flex lg-max:border-t lg-max:-mt-1 border-border-faint relative">
          <div className="flex-1">
            <div className="py-16 px-20 lg:p-28 h-168 lg:h-192">
              <div className="mb-20 lg:mb-28 text-black-alpha-64 text-body-medium">Backed by</div>
              <div className="flex gap-16">
                <div className="size-5 bg-orange-600 rounded"></div>
                <div className="text-body-medium whitespace-nowrap">Y Combinator</div>
              </div>
            </div>
            
            <a 
              className="text-body-medium group flex gap-16 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-16 px-20 lg:px-28 border-t border-border-faint" 
              target="_blank" 
              href="https://www.linkedin.com/company/firecrawl"
            >
              <Linkedin className="size-5" />
              Linkedin
            </a>
            
            <a 
              className="text-body-medium group flex gap-16 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-16 px-20 lg:px-28 border-t border-border-faint -mt-1" 
              target="_blank" 
              href="https://github.com/firecrawl/firecrawl"
            >
              <Github className="size-5" />
              Github
            </a>
          </div>
          
          <div className="flex-1 -ml-1">
            <div className="py-16 px-20 lg:p-28 h-168 lg:h-192 relative">
              <div className="h-full w-1 absolute left-0 top-0 bg-border-faint"></div>
              <div className="mb-28 text-black-alpha-64 flex gap-8 items-center text-body-medium">
                <span>SOC II · Type 2</span>
                <div className="size-5 bg-green-600 rounded-full"></div>
              </div>
            </div>
            
            <a 
              className="text-body-medium group flex gap-16 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-16 px-20 lg:px-28 border-t border-border-faint" 
              target="_blank" 
              href="https://x.com/firecrawl_dev"
            >
              <Twitter className="size-5 text-black-alpha-64 group-hover:text-heat-100 transition-colors duration-200" />
              <div>X <span className="opacity-56">(Twitter)</span></div>
            </a>
            
            <a 
              className="text-body-medium group flex gap-16 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-16 px-20 lg:px-28 border-t border-border-faint -mt-1" 
              target="_blank" 
              href="https://discord.gg/gSmWdAkdwd"
            >
              <div className="size-5 bg-indigo-600 rounded"></div>
              Discord
            </a>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap relative pl-1 border-t border-border-faint">
        <div className="lg-max:w-[calc(50%+1px)] lg:flex-1 lg-max:-mt-1 -ml-1">
          <div className="text-label-medium py-16 px-20 lg:p-28 relative border border-border-faint">
            Products
          </div>
          
          <a className="text-body-medium group flex gap-16 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-16 px-20 lg:px-28 border border-border-faint -mt-1" href="/playground">
            Playground
          </a>
          <a className="text-body-medium group flex gap-16 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-16 px-20 lg:px-28 border border-border-faint -mt-1" href="/extract">
            Extract
          </a>
          <a className="text-body-medium group flex gap-16 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-16 px-20 lg:px-28 border border-border-faint -mt-1" href="/pricing">
            Pricing
          </a>
        </div>
        
        <div className="lg-max:w-[calc(50%+1px)] lg:flex-1 lg-max:-mt-1 -ml-1">
          <div className="text-label-medium py-16 px-20 lg:p-28 relative border border-border-faint">
            Company
          </div>
          
          <a className="text-body-medium group flex gap-16 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-16 px-20 lg:px-28 border border-border-faint -mt-1" href="/blog">
            Blog
          </a>
          <a className="text-body-medium group flex gap-16 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-16 px-20 lg:px-28 border border-border-faint -mt-1" href="/careers">
            Careers
          </a>
        </div>
      </div>
      
      <div className="flex text-body-medium pl-1 flex-wrap whitespace-nowrap relative border-t border-border-faint">
        <div className="px-16 lg:px-28 py-16 text-black-alpha-20 -mt-1 -ml-1 w-[calc(50%+1px)] lg:flex-1 relative border border-border-faint">
          © 2025 Firecrawl
        </div>
        <a className="text-body-medium group flex gap-16 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-16 px-20 lg:px-28 border border-border-faint -ml-1 -mt-1 w-[calc(50%+1px)] lg:flex-1" href="/terms">
          Terms of Service
        </a>
        <a className="text-body-medium group flex gap-16 items-center text-black-alpha-72 relative hover:text-heat-100 transition-colors duration-200 py-16 px-20 lg:px-28 border border-border-faint -ml-1 -mt-1 w-[calc(50%+1px)] lg:flex-1" href="/privacy">
          Privacy Policy
        </a>
      </div>
      
      <div className="p-16 lg:p-24 text-body-medium -mt-1 relative border-t border-border-faint">
        <div className="h-full lg-max:hidden w-1 top-0 left-[calc(50%-0.5px)] absolute bg-border-faint"></div>
        
        <Button variant="ghost" className="flex items-center gap-6 text-accent-black hover:bg-black-alpha-4 rounded-10 px-12 py-8">
          <div className="size-20 flex-center">
            <div className="size-6 bg-blue-500 rounded-full"></div>
          </div>
          <span className="text-blue-500">All systems normal</span>
        </Button>
      </div>
    </div>
  );
}