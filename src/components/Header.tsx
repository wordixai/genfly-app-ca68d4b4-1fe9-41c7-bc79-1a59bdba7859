import { Button } from "@/components/ui/button";
import { Github, Menu } from "lucide-react";

export function Header() {
  return (
    <div className="sticky top-0 left-0 w-full z-[101] bg-background-base">
      <div className="absolute top-0 container border-x border-border-faint h-full pointer-events-none"></div>
      <div className="h-px bg-border-faint w-full left-0 -bottom-px absolute"></div>
      
      <div className="container lg:px-56 px-16 flex justify-between transition-[padding] duration-200 items-center py-20 lg:py-34">
        <div className="flex gap-24 items-center">
          <div className="relative">
            <a className="flex items-center gap-2 relative" href="/">
              <div className="size-8 bg-heat-100 rounded-full flex-center text-white font-bold text-sm">
                F
              </div>
              <span className="text-label-medium text-accent-black font-semibold">
                Firecrawl
              </span>
            </a>
          </div>
          
          <div className="text-black-alpha-16 text-label-medium select-none lg-max:hidden">·</div>
          
          <div className="flex gap-8 relative lg-max:hidden select-none">
            <a className="p-6 relative flex h-32 group rounded-8 active:scale-[0.98] transition-all duration-[50ms] active:duration-[100ms]" href="#">
              <span className="overlay pointer-events-none group-hover:bg-black-alpha-4 transition-all scale-95 group-active:duration-[100ms] duration-[150ms] group-hover:scale-100 group-active:bg-black-alpha-7"></span>
              <span className="px-4 text-label-medium text-accent-black">Products</span>
              <svg fill="none" height="20" viewBox="0 0 18 20" width="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9.5L9 12.5L12 9.5" stroke="#262626" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.56" strokeWidth="1.25"></path>
              </svg>
            </a>
            
            <a className="p-6 relative flex h-32 group rounded-8 active:scale-[0.98] transition-all duration-[50ms] active:duration-[100ms]" href="/playground">
              <span className="overlay pointer-events-none group-hover:bg-black-alpha-4 transition-all scale-95 group-active:duration-[100ms] duration-[150ms] group-hover:scale-100 group-active:bg-black-alpha-7"></span>
              <span className="px-4 text-label-medium text-accent-black">Playground</span>
            </a>
            
            <a className="p-6 relative flex h-32 group rounded-8 active:scale-[0.98] transition-all duration-[50ms] active:duration-[100ms]" href="/docs">
              <span className="overlay pointer-events-none group-hover:bg-black-alpha-4 transition-all scale-95 group-active:duration-[100ms] duration-[150ms] group-hover:scale-100 group-active:bg-black-alpha-7"></span>
              <span className="px-4 text-label-medium text-accent-black">Docs</span>
            </a>
            
            <a className="p-6 relative flex h-32 group rounded-8 active:scale-[0.98] transition-all duration-[50ms] active:duration-[100ms]" href="/pricing">
              <span className="overlay pointer-events-none group-hover:bg-black-alpha-4 transition-all scale-95 group-active:duration-[100ms] duration-[150ms] group-hover:scale-100 group-active:bg-black-alpha-7"></span>
              <span className="px-4 text-label-medium text-accent-black">Pricing</span>
            </a>
            
            <a className="p-6 relative flex h-32 group rounded-8 active:scale-[0.98] transition-all duration-[50ms] active:duration-[100ms]" href="/blog">
              <span className="overlay pointer-events-none group-hover:bg-black-alpha-4 transition-all scale-95 group-active:duration-[100ms] duration-[150ms] group-hover:scale-100 group-active:bg-black-alpha-7"></span>
              <span className="px-4 text-label-medium text-accent-black">Blog</span>
            </a>
          </div>
        </div>
        
        <div className="flex gap-8 lg-max:hidden">
          <a className="contents" target="_blank" href="https://github.com/firecrawl/firecrawl">
            <Button variant="ghost" className="flex items-center gap-4 text-accent-black hover:bg-black-alpha-4 active:bg-black-alpha-7 active:scale-[0.99] rounded-8 px-10 py-6">
              <Github className="size-5" />
              50.9K
            </Button>
          </a>
          
          <a href="/signin/signup">
            <Button className="bg-black-alpha-4 hover:bg-black-alpha-6 text-accent-black active:scale-[0.99] active:bg-black-alpha-7 rounded-8 p-6">
              Sign up
            </Button>
          </a>
        </div>
        
        <Button variant="ghost" className="lg:hidden flex items-center gap-4 text-accent-black hover:bg-black-alpha-4 active:bg-black-alpha-7 active:scale-[0.99] rounded-8 px-10 py-6">
          <Menu className="size-5" />
        </Button>
      </div>
    </div>
  );
}