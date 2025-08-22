import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <div className="flex-1 px-24 py-92 text-center relative -ml-1">
      <div className="h-full top-0 absolute w-full pointer-events-none left-0 border-x border-border-faint"></div>
      
      <div className="mb-20 mx-auto flex gap-10 bg-background-base relative w-max pb-16 items-center text-label-x-small">
        <div className="h-1 bottom-0 absolute w-full left-0 bg-border-faint"></div>
        <div className="text-black-alpha-16 pointer-events-none select-none">//</div>
        <div className="relative flex gap-10 items-center">
          <div className="size-5 bg-heat-100 rounded-full"></div>
          <div>Get started</div>
        </div>
        <div className="text-black-alpha-16 pointer-events-none select-none -scale-x-100">//</div>
      </div>
      
      <div className="text-title-h3 mb-16">Ready to build?</div>
      <div className="text-body-large mb-32">
        Kick off your journey for free and scale seamlessly as your project expands.{" "}
        <span className="text-label-large">No credit card needed.</span>
      </div>
      
      <div className="flex gap-12 justify-center">
        <Button className="bg-heat-100 hover:bg-heat-90 text-accent-white active:scale-[0.995] rounded-10 px-12 py-8">
          Start for free
        </Button>
        <Button variant="secondary" className="bg-black-alpha-4 hover:bg-black-alpha-6 text-accent-black active:scale-[0.99] rounded-10 px-12 py-8">
          See our plans
        </Button>
      </div>
    </div>
  );
}