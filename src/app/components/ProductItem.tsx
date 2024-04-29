import { ProductType } from "@/types/ProductType";
import { ShareIcon, ArrowsRightLeftIcon, HeartIcon } from "@heroicons/react/24/outline";
import ProductImage from "./ProductImage";
import Link from "next/link";

type ProductProps = {
    product: ProductType;
};

export default function ProductItem({ product }: ProductProps) {
    return (
        <div className="font-custom mx-auto mb-8 max-w-4xl">
            <div className="flex flex-col lg:flex-row">
                {/* Imagem do produto */}
                <div className="w-full lg:w-1/2 h-auto lg:h-full object-cover mb-6 lg:mb-0">
                    <ProductImage product={product} />
                </div>
                {/* Informações do produto */}
                <div className="w-full lg:w-1/2 lg:pl-8">
                    <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                    <p className="text-lg font-normal text-gray-700 mb-4">${product.price}</p>
                    <p className="text-base font-normal text-gray-700 mb-4">
                    Setting the bar as one of the loudest speakers in its class, 
                    the Kilburn is a compact, stout-hearted hero with a well-balanced audio 
                    which boasts a clear midrange and extended highs for a sound.
                    </p>
                    {/* Opções de cor */}
                    <div className="flex items-center mb-6">
                        <span className="text-lg font-normal text-gray-700 mr-4">Cor:</span>
                        <div className="flex space-x-2">
                            <div
                                className="w-8 h-8 rounded-full bg-blue-500 border border-gray-300 cursor-pointer"
                                title="Azul"
                            ></div>
                            <div
                                className="w-8 h-8 rounded-full bg-red-500 border border-gray-300 cursor-pointer"
                                title="Vermelho"
                            ></div>
                            <div
                                className="w-8 h-8 rounded-full bg-green-500 border border-gray-300 cursor-pointer"
                                title="Verde"
                            ></div>
                        </div>
                    </div>
                    {/* Opções de tamanho */}
                    <div className="flex items-center mb-6">
                        <span className="text-lg font-normal text-gray-700 mr-4">Tamanho:</span>
                        <select className="border border-gray-300 p-2 rounded-md">
                            <option value="" disabled>
                                Selecione o Tamanho
                            </option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                    {/* Botão "Adicionar ao Carrinho" */}
                    <div className="flex items-center mb-7">
                        <button className="bg-[#B88E2F] text-white px-3 py-3 font-semibold mr-4 hover:bg-yellow-600 transition duration-300">
                            Adicionar ao Carrinho
                        </button>
                        <div className="flex items-center">
                            <span className="text-gray-700 font-semibold mr-2">Quantidade:</span>
                            <div className="flex items-center">
                                <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                    -
                                </button>
                                <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                    1
                                </span>
                                <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Links para compartilhar, comparar e gostar */}
                    <div className="flex items-center text-base text-gray-800">
                        <a href="#" className="flex items-center hover:text-[#B88E2F] mr-4">
                            <ShareIcon className="h-6 w-6 mr-1" /> Compartilhar
                        </a>
                        <a href="#" className="flex items-center hover:text-[#B88E2F] mr-4">
                            <ArrowsRightLeftIcon className="h-6 w-6 mr-1" /> Comparar
                        </a>
                        <a href="#" className="flex items-center hover:text-[#B88E2F]">
                            <HeartIcon className="h-6 w-6 mr-1" /> Curtir
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
