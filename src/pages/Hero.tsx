import { BgImage } from '../assets/assets';
import { scrollToSection } from '../utils/ScrollToSection';

export default function Hero() {
  return (
    <section
      className="relative w-full flex items-center justify-center text-center bg-cover bg-center bg-no-repeat
        min-h-[calc(100dvh-64px)] md:min-h-[calc(100dvh-80px)]"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 px-10 text-white flex gap-3 flex-col
        md:gap-6"
      >
        <h1 className="big-heading">
          Find Your Perfect Home in Pahrump
        </h1>
        <h2 className="font-extralight text-base md:text-xl text-muted">
          Trusted local real-estate experts for nearly 3 decades
        </h2>

        <div className="flex flex-row gap-4 justify-center mt-6">
          <button 
            onClick={() => scrollToSection("listing")} 
            className="btn-base btn-primary"
          >
            Browse Listings
          </button>
          <a href="tel:(206)919-6886" className="btn-base btn-secondary">Call Us</a>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("next-section")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white animate-bounce hover:opacity-80 transition-opacity
          text-sm md:text-base"
      >
        Scroll down to see more.
      </button>
    </section>
  );
}
