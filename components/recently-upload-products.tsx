import { LayoutGrid } from "lucide-react";
import ProductCard from "./product-card";

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

export default function RecentlyUploadedProducts() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="bg-[#CFDDFF] p-1 rounded-md">
          <LayoutGrid className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          Recently Upload Products
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
