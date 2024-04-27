"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductType } from "@/types/ProductType";
import { CategoryType } from '@/types/CategoryType';
import Category from './components/Category';
import Product from "./components/Product";

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategory] = useState<CategoryType[]>([]);


  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error("Falha no carregamento de dados:", error);
    }
  };

  const getCategory = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/category');
      setCategory(response.data);
    } catch (error) {
      console.error("Falha no carregamento de dados:", error);
    }
  };

  useEffect(() => {
    getProducts(); // Carrega os produtos quando o componente é montado pela primeira vez

    // Define um intervalo para recarregar os produtos a cada 5 minutos (300000 milissegundos)
    const intervalId = setInterval(getProducts, 300000);

    // Limpa o intervalo quando o componente é desmontado
    // return () => clearInterval(intervalId);
  }, []); // O array vazio como segundo argumento faz com que este useEffect seja executado apenas uma vez, equivalente ao componentDidMount

  useEffect(() => {
    getCategory(); // Carrega os produtos quando o componente é montado pela primeira vez

    // Define um intervalo para recarregar os produtos a cada 5 minutos (300000 milissegundos)
    const intervalId = setInterval(getCategory, 300000);

    // Limpa o intervalo quando o componente é desmontado
    // return () => clearInterval(intervalId);
  }, []); // O array vazio como segundo argumento faz com que este useEffect seja executado apenas uma vez, equivalente ao componentDidMount


  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}