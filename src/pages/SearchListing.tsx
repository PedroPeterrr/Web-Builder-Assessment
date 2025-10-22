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
        <div className="md:text-center text-white mb-10 text-left">
          <h2 className="text-sm uppercase tracking-widest text-gray-200">
            Find Your Dream Home
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2">
            Search Listings
          </h3>
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
            <label className="flex flex-col text-sm font-medium text-gray-700">
              Location
              <input
                type="text"
                name="location"
                placeholder="Pahrump, NV"
                className="placeholder-gray-400 mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.location}
                onChange={handleChange}
              />
            </label>

            {/* Type */}
            <label className="flex flex-col text-sm font-medium text-gray-700">
              Type
              <select
                name="type"
                className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <label className="flex flex-col text-sm font-medium text-gray-700">
              Sort By
              <select
                name="sort"
                className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.sort}
                onChange={handleChange}
              >
                {sortOptions.map((sort, i) => (
                  <option key={i}>{sort}</option>
                ))}
              </select>
            </label>

            {/* Beds */}
            <label className="flex flex-col text-sm font-medium text-gray-700">
              Bedrooms
              <select
                name="beds"
                className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.beds}
                onChange={handleChange}
              >
                {bedOptions.map((bed, i) => (
                  <option key={i}>{bed}</option>
                ))}
              </select>
            </label>

            {/* Baths */}
            <label className="flex flex-col text-sm font-medium text-gray-700">
              Bathrooms
              <select
                name="baths"
                className="mt-2 p-3  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.baths}
                onChange={handleChange}
              >
                {bathOptions.map((bath, i) => (
                  <option key={i}>{bath}</option>
                ))}
              </select>
            </label>

            {/* Min Price */}
            <label className="flex flex-col text-sm font-medium text-gray-700">
              Min Price
              <input
                type="text"
                name="min"
                placeholder="$"
                inputMode="numeric"
                className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.min}
                onChange={handleChange}
              />
            </label>

            {/* Max Price */}
            <label className="flex flex-col text-sm font-medium text-gray-700">
              Max Price
              <input
                type="text"
                name="max"
                placeholder="$"
                inputMode="numeric"
                className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
