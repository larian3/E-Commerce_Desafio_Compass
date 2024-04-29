"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductType } from "@/types/ProductType";
import { CategoryType } from '@/types/CategoryType';
import Category from './components/Category';
import Product from "./components/Product";

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<number>(16); // Estado para controlar o número de produtos visíveis

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error("Falha no carregamento de dados:", error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/category');
      setCategories(response.data);
    } catch (error) {
      console.error("Falha no carregamento de dados:", error);
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []); 

  // Função para renderizar os produtos até o número especificado em visibleProducts
  const renderProducts = () => {
    return products.slice(0, visibleProducts).map((product) => (
      <Product key={product.id} product={product} />
    ));
  };

  // Função para carregar mais produtos
  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 16);
  };

  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <h1 className="text-3xl font-bold text-center py-16">Browse The Range</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 xl:gap-6">
        
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
      <h1 className="text-3xl font-bold text-center py-16">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {renderProducts()}
      </div>

      {/* Botão para carregar mais produtos */}
      {visibleProducts < products.length && (
        <div className="flex justify-center mt-8">
          <button className="bg-white text-[#B88E2F] font-bold py-2 px-4 border border-[#B88E2F] outline-1 hover:bg-[#B88E2F] hover:text-white hover:border-transparent" onClick={loadMoreProducts}>
            SHOW MORE
          </button>
        </div>
      )}
    </div>
  );
}
