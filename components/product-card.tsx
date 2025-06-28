import {
  Bookmark,
  Eye,
  Heart,
  MessagesSquare,
  Share2,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  discount: string;
  discountColor: string;
  currentPrice: string;
  originalPrice: string;
  location: string;
  timeAgo: string;
  views: number;
  likes: number;
}

export default function ProductCard({
  id,
  title,
  image,
  discount,
  discountColor,
  currentPrice,
  originalPrice,
  location,
  timeAgo,
  views,
  likes,
}: ProductCardProps) {
  return (
    <div
      key={id}
      className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-[0px_19px_7px_-5px_#a196ff] hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        {discount && (
          <Badge
            className={`absolute top-3 left-3 text-white ${discountColor} text-base`}
          >
            {discount}
          </Badge>
        )}
        <Button
          size="sm"
          variant="secondary"
          className="absolute bottom-3 right-3 bg-white/90 hover:bg-white"
        >
          <MessagesSquare className="size-6 text-primary" />
        </Button>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center justify-between text-sm text-[#7C7C7C] mb-3">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl font-bold text-primary">
              {currentPrice}
            </span>
            <span className="text-sm text-[#7C7C7C] line-through">
              {originalPrice}
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center gap-1">
              <MapPin className="size-5" />
              <span>{location}</span>
            </div>
            <span>{timeAgo}</span>
          </div>
        </div>

        <div className="flex items-center justify-evenly gap-4">
          <div className="flex items-center gap-1 bg-gray-100 p-3 rounded-2xl">
            <Eye className="size-6  text-primary" />
            <span className="text-sm text-gray-600">{views}</span>
          </div>
          <div className="flex items-center gap-1 bg-gray-100 p-3 rounded-2xl">
            <Heart className="size-5  text-red-500 fill-red-500" />
            <span className="text-sm text-gray-600">{likes}</span>
          </div>
          <div className=" bg-gray-100 p-3 rounded-2xl">
            <Share2 className="size-5 text-[#7C7C7C] fill-[#7C7C7C]" />
          </div>
          <div className=" bg-gray-100 p-3 rounded-2xl">
            <Bookmark className="size-5 text-[#7C7C7C] fill-[#7C7C7C]" />
          </div>
        </div>
      </div>
    </div>
  );
}
