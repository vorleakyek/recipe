
import Image from "next/image";
import Link from "next/Link";
import { Heart } from "lucide-react";
import StarRating from "./StarRating";
import type { recipeProps } from "./Cards";
interface CardProps {
  recipe: recipeProps;
  rating: number;
  totalRating: number;
}
export default function Card({ recipe, rating, totalRating }: CardProps) {
  return (
    <>
      <div className="basis-6/12 mb-5">
        <div className="relative">
          <Link href="/recipe">
            <Image src={recipe.image} alt="image" width={145} height={145} />
          </Link>
          <Heart className="absolute inset-0 w-7 h-7 fill-white stroke-red-600 " />
        </div>
        <p className="mt-2 pr-3 text-ellipsis overflow-hidden">{recipe.title}</p>
        <div>
          <StarRating rating={rating} />
          <p>{totalRating} Ratings</p>
        </div>
      </div>
    </>
  )
}
