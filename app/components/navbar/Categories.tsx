'use client';

import { categories } from "@/app/data/categoriesList";
import Container from "../Container";
import CategoryBox from "../CategoryBox";

import { usePathname, useSearchParams } from "next/navigation";
import { useRef,useState,useEffect } from "react";


const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const updateArrowVisibility = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      // Check if we're at the start or end of the scroll container
      setIsAtStart(scrollLeft <= 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1); // Use a small buffer to account for floating point imprecision
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;

    // Update the arrows' visibility on initial load
    updateArrowVisibility();

    if (currentRef) {
      currentRef.addEventListener("scroll", updateArrowVisibility);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", updateArrowVisibility);
      }
    };
  }, []);

  if (!isMainPage) {
    return null;
  }

  return (
    <div className="relative z-0"> 
    <Container>
        {/* Left Gradient Fade */}
        <div
          className={`absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10 ${
            isAtStart ? 'hidden' : ''
          }`}
        ></div>

        {/* Left Arrow */}
        {!isAtStart && (
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-lg border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition hidden md:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-gray-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        )}

        {/* Scrollable Categories */}
        <div
          ref={scrollRef}
          className="pt-4 flex flex-row items-center gap-3 overflow-x-auto scrollbar-hide relative"
        >
          {categories.map((item) => (
            <CategoryBox
              key={item.label}
              icon={item.icon}
              label={item.label}
              selected={category === item.label}
            />
          ))}
        </div>

        {/* Right Gradient Fade */}
        <div
          className={`absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 ${
            isAtEnd ? 'hidden' : ''
          }`}
        ></div>

        {/* Right Arrow */}
        {!isAtEnd && (
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white shadow-lg border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition hidden md:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-gray-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
            </svg>
          </button>
        )}

    </Container>
    </div>
  );
};

export default Categories;
