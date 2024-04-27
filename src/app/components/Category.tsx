import { CategoryType } from "@/types/CategoryType";
import CategoryImage from "./CategoryImage";

type CategoryProps = {
  category: CategoryType
}

export default function Category({ category }: CategoryProps) {

  return (
    <div className="font-custom max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto mb-10">
      <div className="shadow-md bg-white overflow-hidden relative" style={{ width: '285px', height: '446px' }}>
        <div className="w-full h-full relative">
          <CategoryImage category={category} />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <div className="flex items-center justify-between">
              {/* You can add more details about the category here if needed */}
            </div>
          </div>
          <div className="absolute inset-0 bg-[#3A3A3A] font-bold text-lg opacity-0 hover:opacity-100 bg-opacity-80 flex flex-col items-center justify-center">
            <button className="bg-[white] text-[#B88E2F]  px-15 py-2 hover:bg-[#8F6B1E] hover:text-white mb-2" style={{ width: '202px', height: '48px' }}> 
              See Details
            </button>
            {/* You can add more actions for the category here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
