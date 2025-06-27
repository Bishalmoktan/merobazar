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
    currentPrice: "Rs. 2500",
    originalPrice: "Rs. 3500",
    location: "Pokhara",
    timeAgo: "1 min ago",
    views: 120,
    likes: 12,
  },
  {
    id: 2,
    title: "Snickers Off-White 2024, Small tear.",
    image: "/images/laptop.png",
    discount: "",
    discountColor: "",
    currentPrice: "Rs. 2500",
    originalPrice: "Rs. 3500",
    location: "Pokhara",
    timeAgo: "1 min ago",
    views: 120,
    likes: 12,
  },
  {
    id: 3,
    title: "Snickers Off-White 2024, Small tear.",
    image: "/images/t-shirts.png",
    discount: "20% off",
    discountColor: "bg-green-500",
    currentPrice: "Rs. 2500",
    originalPrice: "Rs. 3500",
    location: "Pokhara",
    timeAgo: "1 min ago",
    views: 120,
    likes: 12,
  },
  {
    id: 4,
    title: "Snickers Off-White 2024, Small tear.",
    image: "/images/t-shirts-2.png",
    discount: "60% off",
    discountColor: "bg-yellow-500",
    currentPrice: "Rs. 2500",
    originalPrice: "Rs. 3500",
    location: "Pokhara",
    timeAgo: "1 min ago",
    views: 120,
    likes: 12,
  },
  {
    id: 5,
    title: "Snickers Off-White 2024, Small tear.",
    image: "/images/t-shirts-3.png",
    discount: "60% off",
    discountColor: "bg-red-500",
    currentPrice: "Rs. 2500",
    originalPrice: "Rs. 3500",
    location: "Pokhara",
    timeAgo: "1 min ago",
    views: 120,
    likes: 12,
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
  },
  {
    id: 7,
    title: "Snickers Off-White 2024, Small tear.",
    image: "/images/watch-2.png",
    discount: "",
    discountColor: "",
    currentPrice: "Rs. 2500",
    originalPrice: "Rs. 3500",
    location: "Pokhara",
    timeAgo: "1 min ago",
    views: 120,
    likes: 12,
  },
  {
    id: 8,
    title: "Snickers Off-White 2024, Small tear.",
    image: "/images/t-shirts-4.png",
    discount: "",
    discountColor: "",
    currentPrice: "Rs. 2500",
    originalPrice: "Rs. 3500",
    location: "Pokhara",
    timeAgo: "1 min ago",
    views: 120,
    likes: 12,
  },
];

export default function TrendingProducts() {
  return (
    <div>
      <div className="flex items-center justify-end mb-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Select defaultValue="featured">
              <SelectTrigger className="w-52 text-lg rounded-full bg-white py-6 px-4 shadow-2xl">
                <span className="">Sort By:</span>

                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Select defaultValue="all">
            <SelectTrigger className="w-52 text-lg rounded-full bg-white py-6 px-4 shadow-2xl">
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
      <div className="flex items-center gap-2">
        <div className="bg-[#CFDDFF] p-1 rounded-md">
          <TrendingUp className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Trending Products</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
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
