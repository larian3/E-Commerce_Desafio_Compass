import { CategoryType } from "@/types/CategoryType";
import CategoryImage from "./CategoryImage";
import Link from 'next/link';

type CategoryProps = {
  category: CategoryType
}

export default function Category({ category }: CategoryProps) {
  // Extrai o categoryId da categoria selecionada
  const categoryId = category.id;

  return (
    <div className="font-custom rounded-md max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto mb-10">
      
      <div className="rounded-md bg-white overflow-hidden relative" style={{ width: '285px', height: '446px' }}>
        <Link href={`category/${categoryId}`}>
      
            <div className="rounded-md block w-full h-full relative">
              <CategoryImage category={category} />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
              </div>
            </div>
         
        </Link>
      </div>
    </div>
  );
}
