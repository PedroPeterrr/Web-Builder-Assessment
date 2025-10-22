import { OwnerPic } from "../assets/assets";

export default function About() {
  return (
  <section
    id="next-section"
    className="w-full bg-dark-bg py-10 px-6 md:px-16"
  >
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div className="grid place-items-center text-center  order-2 md:order-1">
      <img
        src={OwnerPic}
        alt="Marci Metzger Realtor"
        className="rounded-lg shadow-xl object-cover w-full md:max-w-md"
      />
      <p className="text-sm text-muted mt-2">
        Marci Metzger - The Ridge Realty Group
      </p>
    </div>

    <div className="grid gap-4 md:gap-6 text-gray-200 order-1 md:order-2">
      <div className="flex gap-2 flex-col">
        <h1 className="small-heading">
          About
        </h1>
        <h2 className="big-heading text-white whitespace-nowrap">
          Marci Metzger
        </h2>
        <p className="text-sm text-muted">
          Licensed Realtor • Pahrump, NV
        </p>
      </div>

      <p className="text-lg leading-relaxed text-muted">
        <strong className="text-white">30 years of experience</strong> serving the Pahrump Valley.
      </p>

      <ul className="grid grid-cols-3 gap-8 md:gap-6">
        <li>
          <span className="badge">28.5M</span>
          <span className="block text-sm uppercase tracking-wide text-muted">
            Sales in 2021
          </span>
        </li>
        <li>
          <span className="badge">90+</span>
          <span className="block text-sm uppercase tracking-wide text-muted">
            Clients Served
          </span>
        </li>
        <li>
          <span className="badge">30</span>
          <span className="block text-sm uppercase tracking-wide text-muted">
            Years Experience
          </span>
        </li>
      </ul>

      <div className="mt-6">
        <a
          href="https://www.zillow.com/profile/DavisAtTheRidge"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-all duration-300"
        >
          Member of Marci Metzger Group on Zillow
          <span
            className="ml-1 inline-block transform transition-transform duration-300 ease-out delay-75 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>
    </div>
  </div>
  </section>
  );
}
