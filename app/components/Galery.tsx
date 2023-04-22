"use client";
import { SetStateAction, useState } from "react";
import galery from "@/constants/galery";
import Image from "next/image";

export default function Galery() {
  const [numDisplayed, setNumDisplayed] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleShowMore = () => {
    setNumDisplayed(galery.length);
    setIsExpanded(true);
  };

  const handleShowLess = () => {
    setNumDisplayed(6);
    setIsExpanded(false);
  };

  const handleView = (index: number | null) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div id="galeri" className="py-[5rem]">
      <div className="galery-bg my-[5rem] flex flex-col justify-center items-center w-full h-auto ">
        <h1 className="text-[2rem] font-bold text-center my-[3rem]">
          Foto Galeri
        </h1>
        <div className="flex flex-row flex-wrap sm:justify-start justify-center items-start lg:px-[5rem] md:px-[2rem] px-[1rem] py-[3rem] md:gap-12 gap-4">
          {galery.slice(0, numDisplayed).map((post, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-4 bg-white my-shadow rounded-md md:w-[20rem] w-[15rem] h-auto overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.name}
                width={1000}
                height={1000}
                className=" w-[100%] md:h-[20rem] h-[15rem] object-cover pointer-events-none"
              />
              <h1 className="md:text-[1.5rem] text-[1.3rem] font-bold text-center">
                {post.name}
              </h1>
              <p className="md:px-4 px-2 py-2 md:text-[1rem] text-[0.8rem] font-normal self-start w-[100%]">
                {post.description}
              </p>
              <button
                className="px-[1.5rem] py-[0.5rem] bg-[#078D75] mb-4 w-fit rounded-md text-white font-bold md:text-[1.2rem] text-[1rem] text-center"
                onClick={() => handleView(index)}
              >
                View
              </button>
            </div>
          ))}
        </div>
        {!isExpanded && numDisplayed < galery.length && (
          <button
            className="sm:px-[3rem] px-[1.5rem] py-[1rem] bg-[#078D75] w-fit mt-[2rem] rounded-md text-white font-bold text-[1.2rem] text-center"
            onClick={handleShowMore}
          >
            Show More
          </button>
        )}
        {isExpanded && (
          <button
            className="sm:px-[3rem] px-[1.5rem] py-[1rem] bg-[#078D75] w-fit mt-[2rem] rounded-md text-white font-bold text-[1.2rem] text-center"
            onClick={handleShowLess}
          >
            Show Less
          </button>
        )}
      </div>
      {selectedImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-neutral-600 bg-opacity-80 z-50 flex justify-center items-center">
          <div className="relative w-[95%] h-[90%] flex justify-center items-center py-8">
            <button
              className="absolute top-0 right-0 mr-[2rem] mt-[2rem] border border-black bg-white bg-opacity-50 px-2 py-1 rounded-md font-bold text-lg hover:text-red-600 z-40"
              onClick={handleClose}
            >
              X
            </button>
            <Image
              src={galery[selectedImageIndex].image}
              alt={galery[selectedImageIndex].name}
              width={1000}
              height={1000}
              className="pointer-events-none sm:aspect-[1/0.8] aspect-[1/1.3] object-contain px-2 z-20"
            />
          </div>
        </div>
      )}
    </div>
  );
}
