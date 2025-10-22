import { Image1, Image2, Image3 } from "../assets/assets";

export default function FeaturedListing() {
  return (
    <section className="bg-gray-50 text-gray-900 py-10 md:py-15 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="md:text-center">
          <h1 className="small-heading">
            Featured
          </h1>
          <h2 className="big-heading">
            Get It Sold
          </h2>
        </div>

        <div className="listing-card">
          <div className="listing-image">
            <img
              src={Image1}
              alt="Top Residential Sales"
              className="featured-image"
            />
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-semibold text-dark">
              Top Residential Sales
            </h3>
            <p className="text-sm uppercase tracking-wider text-muted">
              Last 5 Years
            </p>
            <p className="text-dark leading-relaxed text-lg">
              Our team works hard everyday to grow and learn, so that we may continue 
              to excel in our market. Our clients deserve our best,
              & we want to make sure our best is better every year.
            </p>
          </div>
        </div>

        <div className="listing-card">
          <div className="listing-image order-1 md:order-2">
            <img
              src={Image2}
              alt="Get it sold"
              className="featured-image"
            />
          </div>

          <div className="order-2 md:order-1 flex flex-col gap-5">
            <h3 className="text-3xl font-semibold text-dark">
              Don&apos;t Just List It...
            </h3>
            <p className="text-sm uppercase tracking-wider text-muted">
              Get It SOLD!
            </p>
            <p className="text-dark leading-relaxed text-lg">
              We exhaust every avenue to ensure our listings are at the fingertips of every possible 
              buyer, getting you top dollar for your home.
            </p>
          </div>
        </div>

        <div className="listing-card">
          <div className="listing-image">
            <img
              src={Image3}
              alt="Guide to Buyers"
              className="featured-image"
            />
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-semibold text-dark">
              Guide to Buyers
            </h3>
            <p className="text-sm uppercase tracking-wider text-muted">
                Expert Help
            </p>
            <p className="text-dark leading-relaxed text-lg">
              Nobody knows the market like we do. Enjoy having a pro at your 
              service. Market analysis, upgrades lists, 
              contractors on speed dial, & more!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
