import { ProductType } from "@/types/ProductType";
import { ShareIcon, ArrowsRightLeftIcon, HeartIcon } from "@heroicons/react/24/outline";
import ProductImage from "./ProductImage";

type ProductProps = {
  product: ProductType
}

export default function Product({product}:ProductProps) {

  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex flex-col shadow-md w-full sm:w-full md:w-full lg:w-[285px] xl:w-[285px] h-auto sm:h-auto md:h-auto lg:h-[446px] xl:h-[446px] bg-[#F4F5F7] font-custom relative group mb-10 mx-4">
        <div className="relative w-full lg:w-[285px] xl:w-[285px] h-[301px] lg:h-[301px] xl:h-[301px]">
          <ProductImage product={product} />
        </div>
        <div className="justify-between font-bold my-3 text-sm">{product.name}</div>
        <div className="text-sm">{product.imageLink}</div>
        <div className="text-sm">{product.price}</div>
        <div className="absolute inset-0 bg-[#3A3A3A] opacity-0 hover:opacity-100 bg-opacity-80 flex flex-col items-center justify-center">
          <button className="bg-[white] text-[#B88E2F] px-6 py-2 hover:bg-[#8F6B1E] hover:text-white mb-2">
            See Details
          </button>
          <div className="flex items-center text-xs">
            <a href="#" className="text-white flex items-center hover:text-[#B88E2F] mx-1 text-xs">
              <ShareIcon className="h-[14px] w-[14px] mr-1" /> Share
            </a>
            <a href="#" className="text-white flex items-center hover:text-[#B88E2F] mx-1 text-xs">
              <ArrowsRightLeftIcon className="h-[14px] w-[14px] mr-1" /> Compare
            </a>
            <a href="#" className="text-white flex items-center hover:text-[#B88E2F] mx-1 text-xs">
              <HeartIcon className="h-[14px] w-[14px] mr-1" /> Like
            </a>
          </div>
        </div>
      </div>
    </div>
  );  
}
