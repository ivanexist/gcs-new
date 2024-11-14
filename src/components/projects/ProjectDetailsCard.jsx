import { useState } from "react";

const ProjectDetailsCard = () => {
  // Array of image URLs for the slideshow
  const images = [
    "../../../public/images/Rumneg-T45-Lantamal-V/Proses.jpeg",
    "../../../public/images/Rumneg-T45-Lantamal-V/Side-1.JPG",
    "../../../public/images/Rumneg-T45-Lantamal-V/Side-2.JPG",
    "../../../public/images/Rumneg-T45-Lantamal-V/Side-3.JPG",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Left & Right navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle image selector below
  const selectImage = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="max-w-3xl mx-auto">
      {/* Main Slideshow Image */}
      <div className="relative w-full h-96">
        <img
          src={images[currentIndex]}
          alt="slide"
          className="w-full h-full object-cover  shadow-lg"
        />
        {/* Left & Right Navigation */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2  hover:bg-gray-700"
        >
          ❮
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2  hover:bg-gray-700"
        >
          ❯
        </button>
      </div>
      {/* Thumbnail Selector */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => selectImage(index)}
            className={`w-16 h-16 border-2 ${
              index === currentIndex ? "border-blue-500" : "border-transparent"
            }  overflow-hidden focus:outline-none`}
          >
            <img
              src={image}
              alt={`thumbnail-${index}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      <div className="my-8">
        <h1 className="uppercase font-semibold text-blue-600">
          Project Description
        </h1>
        <p className="py-2 text-gray-500">
          The ten-storey, 325,000 SF Krembil Discovery Centre provides the
          Toronto Western Hospital with a new research and rehabilitation
          facility. The Integrated Project Delivery contract included the base
          building core and shell (and associated functional space), interior
          fit-up of two floors of the rehab solutions space, two floors of wet
          labs, a single floor vivarium and the associated interstitial floor
        </p>
        <p className="py-2 text-gray-500">
          From November 2013 to April 2014, EllisDon was awarded an additional
          Lump Sum contract for $5 million. This additional scope of work
          included a lab fit- up on the fourth level of the Krembil Discovery
          Centre. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Possimus incidunt natus delectus quas nisi numquam accusamus
          laboriosam! Molestias totam beatae sunt accusamus. Sunt reprehenderit
          asperiores incidunt fugit magnam amet quam.
        </p>
      </div>
    </div>
  );
};
export default ProjectDetailsCard;
