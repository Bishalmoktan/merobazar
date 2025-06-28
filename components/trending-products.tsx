"use client";

import { useMemo, useState } from "react";
import { ChevronsRight, TrendingUp } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "./product-card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    title: "Snickers Off-White 2024, Small tear.",
    image: "/images/cycle.png",
    discount: "60% off",
    discountColor: "bg-red-500",
    currentPrice: "Rs. 2000",
    originalPrice: "Rs. 4000",
    location: "Pokhara",
    timeAgo: "1 min ago",
    views: 120,
    likes: 12,
    category: "accessories",
  },
  {
    id: 2,
    title: "Snickers Off-White 2024, Small tear.",
    image: "/images/laptop.png",
    discount: "",
    discountColor: "",
    currentPrice: "Rs. 2300",
    originalPrice: "Rs. 3000",
    location: "Pokhara",
    timeAgo: "1 min ago",
    views: 120,
    likes: 12,
    category: "electronics",
  },
  {
    id: 3,
    title: "Snickers Off-White 2024, Small tear.",
    image: "/images/t-shirts.png",
    discount: "20% off",
    discountColor: "bg-green-500",
    currentPrice: "Rs. 1500",
    originalPrice: "Rs. 2000",
    location: "Pokhara",
    timeAgo: "1 min ago",
    views: 120,
    likes: 12,
    category: "clothing",
  },
  {
    id: 4,
    title: "Snickers Off-White 2024, Small tear.",
    image: "/images/t-shirts-2.png",
    discount: "60% off",
    discountColor: "bg-yellow-500",
    currentPrice: "Rs. 2700",
    originalPrice: "Rs. 3800",
    location: "Pokhara",
    timeAgo: "1 min ago",
    views: 120,
    likes: 12,
    category: "clothing",
  },
  {
    id: 5,
    title: "Snickers Off-White 2024, Small tear.",
    image: "/images/t-shirts-3.png",
    discount: "60% off",
    discountColor: "bg-red-500",
    currentPrice: "Rs. 2200",
    originalPrice: "Rs. 3100",
    location: "Pokhara",
    timeAgo: "1 min ago",
    views: 120,
    likes: 12,
    category: "clothing",
  },
  {
    id: 6,
    title: "Snickers Off-White 2024, Small tear.",
    image: "/images/watch.png",
    discount: "20% off",
    discountColor: "bg-green-500",
    currentPrice: "Rs. 2500",
    originalPrice: "Rs. 3500",
    location: "Pokhara",
    timeAgo: "1 min ago",
    views: 120,
    likes: 12,
    category: "accessories",
  },
  {
    id: 7,
    title: "Snickers Off-White 2024, Small tear.",
    image: "/images/watch-2.png",
    discount: "",
    discountColor: "",
    currentPrice: "Rs. 4000",
    originalPrice: "Rs. 5500",
    location: "Pokhara",
    timeAgo: "1 min ago",
    views: 120,
    likes: 12,
    category: "accessories",
  },
  {
    id: 8,
    title: "Snickers Off-White 2024, Small tear.",
    image: "/images/t-shirts-4.png",
    discount: "",
    discountColor: "",
    currentPrice: "Rs. 3000",
    originalPrice: "Rs. 3500",
    location: "Pokhara",
    timeAgo: "1 min ago",
    views: 120,
    likes: 12,
    category: "clothing",
  },
];

export default function TrendingProducts() {
  const [sortBy, setSortBy] = useState("featured");
  const [category, setCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    switch (sortBy) {
      case "price-low":
        result.sort(
          (a, b) =>
            parseInt(a.currentPrice.replace(/\D/g, "")) -
            parseInt(b.currentPrice.replace(/\D/g, ""))
        );
        break;
      case "price-high":
        result.sort(
          (a, b) =>
            parseInt(b.currentPrice.replace(/\D/g, "")) -
            parseInt(a.currentPrice.replace(/\D/g, ""))
        );
        break;
      case "newest":
        result.reverse();
        break;
      default:
        break;
    }

    return result;
  }, [sortBy, category]);
  return (
    <div>
      {/* Filters */}
      <div className="flex items-center justify-center md:justify-end mb-8">
        <div className="flex items-center gap-4">
          <Select defaultValue="featured" onValueChange={setSortBy}>
            <SelectTrigger className="w-44 md:w-52 text-base md:text-lg rounded-full bg-white py-6 px-4 shadow-2xl">
              <span className="mr-2">Sort By:</span>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all" onValueChange={setCategory}>
            <SelectTrigger className="w-44 md:w-52 text-base md:text-lg rounded-full bg-white py-6 px-4 shadow-2xl">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="bg-[#CFDDFF] p-1 rounded-md">
          <TrendingUp className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Trending Products</h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found for selected filters.
          </p>
        )}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center">
        <Button
          size={"lg"}
          className="cursor-pointer bg-white rounded-full text-xl text-primary border border-primary hover:bg-white/90 hover:shadow-[0px_19px_7px_-5px_#a196ff] hover:-translate-y-1 transition-all duration-300 w-[300px]"
        >
          Load more
          <ChevronsRight className="size-6" />
        </Button>
      </div>
    </div>
  );
}
