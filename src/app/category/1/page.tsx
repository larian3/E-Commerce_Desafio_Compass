"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CategoryItemType } from '@/types/CategoryItemType';
import CategoryItem from '../../components/CategoryItem';

export default function CategoryItems() {
  const [products, setProducts] = useState<CategoryItemType[]>([]);
  

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/category_id/1');
      setProducts(response.data);
    } catch (error) {
      console.error("Falha no carregamento de dados:", error);
    }
  };


  useEffect(() => {
    getProducts();
  }, []); 

  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {products.map((product) => (
          <CategoryItem key={product.id} product={product} />
        ))}
      </div>
  );
}