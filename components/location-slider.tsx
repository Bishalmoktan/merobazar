import React from "react";
import Slider from "./slider";

export default function LocationSlider() {
  const countries = [
    {
      id: 1,
      name: "Nepal",
      icon: "/icons/country/nepal.svg",
    },
    {
      id: 2,
      name: "South Korea",
      icon: "/icons/country/korea.svg",
    },
    {
      id: 3,
      name: "Dubai",
      icon: "/icons/country/dubai.svg",
    },
    {
      id: 4,
      name: "Qatar",
      icon: "/icons/country/quatar.svg",
    },
    {
      id: 5,
      name: "Saudi Arebia",
      icon: "/icons/country/saudi.svg",
    },
    {
      id: 6,
      name: "Japan",
      icon: "/icons/country/japan.svg",
    },
  ];
  return (
    <>
      <Slider sliders={countries} title="Location" className="py-6" />
    </>
  );
}
