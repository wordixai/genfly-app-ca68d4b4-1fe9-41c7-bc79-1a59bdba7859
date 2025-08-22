import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export function CodeExampleSection() {
  return (
    <div className="relative -mt-1 flex z-[1] justify-between">
      <div className="lg:pt-12 lg:pl-28 -mt-1 w-full lg:pb-32 relative">
        <div className="grid grid-cols-2 relative -mt-33 lg:-mt-1">
          <div class="bottom-0 left-0 absolute h-1 w-full bg-border-faint"></div>
          
          <div className="relative">
            <div className="border-x border-border-faint pointer-events-none absolute inset-0"></div>
            <div className="lg-max:pl-4 lg-max:pb-20 lg-max:pr-20 lg-max:overflow-x-scroll">
              <pre className="p-6 bg-gray-50 rounded-lg overflow-x-auto">
                <code className="text-sm">
{`# pip install firecrawl-py
from firecrawl import Firecrawl

app = Firecrawl(api_key="fc-YOUR_API_KEY")

# Scrape a website:
app.scrape('firecrawl.dev')`}
                </code>
              </pre>
            </div>
          </div>
          
          <div className="py-12 px-18 border-l border-border-faint relative lg-max:hidden">
            <Button variant="ghost" className="rounded-full flex gap-4 items-center py-12 px-24 hover:bg-border-faint transition-colors">
              <Copy className="size-5 text-black-alpha-64" />
              <div className="px-4 text-label-medium">Copy code</div>
            </Button>
          </div>
        </div>
        
        <div className="lg:w-472 lg:absolute lg-max:-mt-1 lg-max:border-t border-border-faint z-[2] top-0 right-0 lg:h-343 flex bg-background-base">
          <div className="h-1 top-0 absolute left-0 w-full bg-border-faint"></div>
          <div className="h-1 bottom-0 absolute left-0 w-full bg-border-faint"></div>
          <div className="h-full top-0 absolute left-0 w-1 bg-border-faint"></div>
          
          <div className="flex-1 relative min-w-0 lg-max:-mt-1">
            <div className="pl-15 border-b border-border-faint p-13 flex justify-between items-center">
              <div className="flex gap-10 items-center">
                <div className="w-12 h-12 rounded-full relative border border-border-muted bg-background-base"></div>
                <div className="w-12 h-12 rounded-full relative border border-border-muted bg-background-base"></div>
                <div className="w-12 h-12 rounded-full relative border border-border-muted bg-background-base"></div>
              </div>
              <div className="text-mono-x-small font-mono text-black-alpha-20">
                [ .MD ]
              </div>
            </div>
            
            <div className="overflow-x-scroll lg-max:pb-20 lg-max:pr-20">
              <pre className="p-6 bg-gray-50 text-sm">
                <code>
{`# Firecrawl

Firecrawl is a powerful web scraping
library that makes it easy to extract
data from websites.

## Installation

To install Firecrawl, run:`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}