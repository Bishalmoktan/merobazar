"use client";

import React, { useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ISlider {
  id: number;
  name: string;
  icon: string;
}

interface SliderProps {
  sliders: ISlider[];
  title: string;
  className?: string;
}

export default function Slider({ sliders, title, className }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const itemsPerView = 6;
  const maxIndex = Math.max(0, sliders.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-white">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>

        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-10 h-10 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all duration-200 ${
              currentIndex === 0
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-gray-50"
            }`}
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`w-10 h-10 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all duration-200 ${
              currentIndex >= maxIndex
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-gray-50"
            }`}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={containerRef}
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {sliders.map((slider) => {
            return (
              <div
                key={slider.id}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="group cursor-pointer">
                  <div
                    className={cn(
                      `
                w-full rounded-2xl flex  gap-2 items-center justify-center p-2 mb-3 
                transition-all duration-200 group-hover:-translate-y-1 group-hover:border-b-8 group-hover:border-purple-100 
                bg-[#F4F6FF]
              `,
                      className
                    )}
                  >
                    <Image
                      src={slider.icon}
                      alt={slider.name}
                      width={40}
                      height={40}
                      className="transition-transform duration-200 group-hover:scale-110"
                    />
                    <h3 className="text-semibold font-medium text-[#7C7C7C] text-center group-hover:text-[#7F7F7F] transition-colors duration-200">
                      {slider.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
