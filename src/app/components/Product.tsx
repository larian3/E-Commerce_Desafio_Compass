import { ProductType } from "@/types/ProductType";
import { ShareIcon, ArrowsRightLeftIcon, HeartIcon } from "@heroicons/react/24/outline";
import ProductImage from "./ProductImage";

type ProductProps = {
  product: ProductType
}

export default function Product({ product }: ProductProps) {

  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto mb-10">
      <div className="shadow-md bg-white overflow-hidden relative" style={{ width: '285px', height: '446px' }}>
        <div className="w-full h-full relative">
          <ProductImage product={product} />
          <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-sm text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-gray-800">${product.price}</p>
          </div>
        </div>
          <div className="absolute inset-0 bg-[#3A3A3A] font-bold text-lg opacity-0 hover:opacity-100 bg-opacity-80 flex flex-col items-center justify-center">
            <button className="bg-[white] text-[#B88E2F]  px-15 py-2 hover:bg-[#8F6B1E] hover:text-white mb-2" style={{ width: '202px', height: '48px' }}> 
              See Details
            </button>
            <div className="flex items-center text-md py-6">
              <a href="#" className="text-white  flex items-center hover:text-[#B88E2F] mx-1 ">
                <ShareIcon className="h-[14px] w-[14px] mr-1" /> Share
              </a>
              <a href="#" className="text-white flex items-center hover:text-[#B88E2F] mx-1 ">
                <ArrowsRightLeftIcon className="h-[14px] w-[14px] mr-1" /> Compare
              </a>
              <a href="#" className="text-white flex items-center hover:text-[#B88E2F] mx-1 ">
                <HeartIcon className="h-[14px] w-[14px] mr-1" /> Like
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
