import { useState, useEffect } from "react";
import { Photo } from "../constant/data";

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";

      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setSelectedImage(null);
        }
      };
      document.addEventListener("keydown", handleEsc);

      return () => {
        document.body.style.overflow = "auto";
        document.removeEventListener("keydown", handleEsc);
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  return (
    <section className="w-full min-h-screen p-6 bg-black">
      <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6 md:text-center">
        Photo Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Photo.map(({logo, alt}, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedImage(logo)}
          >
            <img
              src={logo}
              alt={alt}
              className="object-contain transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full px-4">
            <img
              src={selectedImage}
              alt="Full view"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-1 right-7 text-white text-3xl font-bold hover:text-gray-300"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
