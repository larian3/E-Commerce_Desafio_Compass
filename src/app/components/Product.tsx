import { ProductType } from "@/types/ProductType";
import { ShareIcon, ArrowsRightLeftIcon, HeartIcon } from "@heroicons/react/24/outline";
import ProductImage from "./ProductImage";

type ProductProps = {
  product: ProductType
}

export default function Product({ product }: ProductProps) {

  return (
    <div className="font-custom mx-auto mb-8 max-w-md">
      <div className="shadow-md bg-white overflow-hidden relative">
        <div className="w-full relative">
          <ProductImage product={product} />
          <div className="p-4">
            <h2 className="text-base md:text-lg lg:text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-xs md:text-sm lg:text-base text-gray-600 mb-2">{product.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-sm md:text-base font-bold text-gray-800">${product.price}</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-[#3A3A3A] font-bold text-xs md:text-sm lg:text-base opacity-0 hover:opacity-100 bg-opacity-80 flex flex-col items-center justify-center">
            <button className="bg-[white] text-[#B88E2F] px-6 py-2 hover:bg-[#8F6B1E] hover:text-white mb-2 "> 
              See Details
            </button>
            <div className="flex items-center text-xs md:text-sm lg:text-base py-2">
              <a href="#" className="text-white flex items-center hover:text-[#B88E2F] mx-1">
                <ShareIcon className="h-[12px] md:h-[14px] lg:h-[16px] w-[12px] md:w-[14px] lg:w-[16px] mr-1" /> Share
              </a>
              <a href="#" className="text-white flex items-center hover:text-[#B88E2F] mx-1">
                <ArrowsRightLeftIcon className="h-[12px] md:h-[14px] lg:h-[16px] w-[12px] md:w-[14px] lg:w-[16px] mr-1" /> Compare
              </a>
              <a href="#" className="text-white flex items-center hover:text-[#B88E2F] mx-1">
                <HeartIcon className="h-[12px] md:h-[14px] lg:h-[16px] w-[12px] md:w-[14px] lg:w-[16px] mr-1" /> Like
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}