
import Image from "next/image";
import {Heart} from "lucide-react";
export default function Card({src, title}:{src:string, title:string}) {
  return(
    <>
      <div className="relative">
        <Image src={src} alt="image" width={145} height={145} />
        <Heart className="absolute inset-0 w-7 h-7 fill-white stroke-red-600 " />
      </div>
      <p>{title}</p>
    </>
  )
}
