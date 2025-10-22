import { useState } from "react";
import { ListingBg } from "../assets/assets";

const typeOptions = [
  "Any",
  "Single Family",
  "Condo",
  "Townhouse",
  "Multi-Family",
  "Land",
  "Manufactured Home",
  "Commercial",
  "Rental",
];

const sortOptions = [
  "Newest",
  "Oldest",
  "Least Expensive to Most",
  "Most Expensive to Least",
  "Bedrooms (Low to High)",
  "Bedrooms (High to Low)",
  "Bathrooms (Low to High)",
  "Bathrooms (High to Low)",
];

const bedOptions = ["Any Number", "Studio", "1+", "2+", "3+", "4+", "5+", "6+"];
const bathOptions = ["Any Number", "1+", "2+", "3+", "4+", "5+", "6+"];

export default function SearchListing() {
  const [formData, setFormData] = useState({
    location: "",
    type: "",
    sort: "",
    beds: "",
    baths: "",
    min: "",
    max: "",
  });

  const isFormValid = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="listing"
      className="relative min-h-[calc(100dvh-64px)] md:min-h-[calc(100dvh-80px)] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ListingBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full px-6 py-16 md:px-10">
        <div className="md:text-center text-white mb-10">
          <h1 className="small-heading tracking-widest">
            Find Your Dream Home
          </h1>
          <h2 className="big-heading">
            Search Listings
          </h2>
        </div>

        <form
          className="
            bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-xl
            flex flex-col gap-8
          "
          action="https://marcimetzger.com/listings"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Location */}
            <label className="label">
              Location
              <input
                type="text"
                name="location"
                placeholder="Pahrump, NV"
                className="placeholder-muted select-input"
                value={formData.location}
                onChange={handleChange}
              />
            </label>

            {/* Type */}
            <label className="label">
              Type
              <select
                name="type"
                className="select-input"
                value={formData.type}
                onChange={handleChange}
              >
                {typeOptions.map((type, i) => (
                  <option key={i} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            {/* Sort */}
            <label className="label">
              Sort By
              <select
                name="sort"
                className="select-input"
                value={formData.sort}
                onChange={handleChange}
              >
                {sortOptions.map((sort, i) => (
                  <option key={i}>{sort}</option>
                ))}
              </select>
            </label>

            {/* Beds */}
            <label className="label">
              Bedrooms
              <select
                name="beds"
                className="select-input"
                value={formData.beds}
                onChange={handleChange}
              >
                {bedOptions.map((bed, i) => (
                  <option key={i}>{bed}</option>
                ))}
              </select>
            </label>

            {/* Baths */}
            <label className="label">
              Bathrooms
              <select
                name="baths"
                className="select-input"
                value={formData.baths}
                onChange={handleChange}
              >
                {bathOptions.map((bath, i) => (
                  <option key={i}>{bath}</option>
                ))}
              </select>
            </label>

            {/* Min Price */}
            <label className="label">
              Min Price
              <input
                type="text"
                name="min"
                placeholder="$"
                inputMode="numeric"
                className="select-input"
                value={formData.min}
                onChange={handleChange}
              />
            </label>

            {/* Max Price */}
            <label className="label">
              Max Price
              <input
                type="text"
                name="max"
                placeholder="$"
                inputMode="numeric"
                className="select-input"
                value={formData.max}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="flex justify-center">
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={!isFormValid}
            >
              Search Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
