
import Image from "next/image";
import { Heart } from "lucide-react";
import StarRating from "./StarRating";

interface CardProps {
  src: string;
  title: string;
  rating: number;
  totalRating: number;
}
export default function Card({ src, title, rating, totalRating }: CardProps) {
  return (
    <>
      <div className="basis-6/12 mb-5">
        <div className="relative">
          <Image src={src} alt="image" width={145} height={145} />
          <Heart className="absolute inset-0 w-7 h-7 fill-white stroke-red-600 " />
        </div>
        <p className="mt-2 pr-3 text-ellipsis overflow-hidden">{title}</p>
        <div>
          <StarRating rating={rating} />
          <p>{totalRating} Ratings</p>
        </div>
      </div>
    </>
  )
}
