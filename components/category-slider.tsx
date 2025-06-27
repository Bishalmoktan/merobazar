import React from "react";
import Slider from "./slider";

export default function CategorySlider() {
  const categories = [
    {
      id: 1,
      name: "Home appliances",
      icon: "/icons/categories/bed.svg",
    },
    {
      id: 2,
      name: "Apparels and Accessories",
      icon: "/icons/categories/shirt.svg",
    },
    {
      id: 3,
      name: "Sports",
      icon: "/icons/categories/football.svg",
    },
    {
      id: 4,
      name: "Decor",
      icon: "/icons/categories/flower.svg",
    },
    {
      id: 5,
      name: "Health and Beauty",
      icon: "/icons/categories/medicine-book.svg",
    },
    {
      id: 6,
      name: "Fitness",
      icon: "/icons/categories/gym.svg",
    },
    {
      id: 7,
      name: "Electronics",
      icon: "/icons/categories/headphone.svg",
    },
    {
      id: 8,
      name: "Books",
      icon: "/icons/categories/book.svg",
    },
    {
      id: 9,
      name: "Automotive",
      icon: "/icons/categories/car.svg",
    },
    {
      id: 10,
      name: "Food & Beverage",
      icon: "/icons/categories/coffee.svg",
    },
  ];
  return (
    <>
      <Slider
        sliders={categories}
        title="Shop by Category"
        className="aspect-square flex-col"
      />
    </>
  );
}
