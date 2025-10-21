import Background from '../assets/bg-image.webp';

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center 
      text-center bg-cover bg-center bg-no-repeat bg-f"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 px-10 text-white flex gap-3 flex-col
        md:gap-6"
      >
        <h2 className="text-2xl md:text-4xl font-poppins font-bold">
          Find Your Perfect Home in Pahrump
        </h2>
        <h3 className="text-md md:text-xl font-poppins font-extralight">
          Trusted local real-estate experts for nearly 3 decades
        </h3>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <button className="btn-base btn-primary">Browse Listings</button>
          <button className="btn-base btn-secondary">Call Us</button>
        </div>
      </div>
    </section>
  );
}
