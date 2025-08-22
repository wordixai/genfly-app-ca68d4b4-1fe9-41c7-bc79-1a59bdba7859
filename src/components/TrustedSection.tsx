export function TrustedSection() {
  const logos = [
    "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=200&h=100&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=100&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1606177263776-c6c39ce1572d?w=200&h=100&fit=crop&crop=center",
  ];

  return (
    <div className="container relative -mt-1 lg:flex">
      <div className="h-1 bottom-0 absolute left-0 w-full bg-border-faint"></div>
      
      <div className="p-16 lg-max:text-center lg:p-40 relative">
        <div className="text-body-large text-accent-black">
          Trusted by{" "}
          <span className="contents text-label-large text-heat-100">
            5000+ <br />
            companies
          </span>{" "}
          of all sizes
        </div>
      </div>
      
      <div className="flex-1 lg-max:h-96 min-w-0 relative lg:-ml-1 lg-max:-mt-1">
        <div className="h-full left-0 top-0 w-1 bg-border-faint absolute lg-max:w-full lg-max:h-1"></div>
        
        <div className="w-full h-full overflow-x-clip">
          <div className="w-max flex h-full animate-scroll">
            <div className="flex h-full">
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="h-full aspect-[204/96] lg:aspect-[204/128] -ml-1 relative w-max">
                  <img 
                    alt={`Logo ${index + 1}`} 
                    className="absolute object-cover w-full h-full opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                    src={logo}
                  />
                  <div className="overlay border-x border-border-faint"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}