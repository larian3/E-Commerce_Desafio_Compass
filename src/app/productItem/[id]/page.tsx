"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductType } from "@/types/ProductType";
import ProductItem from '@/app/components/ProductItem';

type ProductPageProps ={
  params:{
    id:string;
  }
}

export default function ProductDetail( {params:{id}}:ProductPageProps) {
  const [product, setProduct] = useState<ProductType | null>(null);

  const getProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Falha no carregamento de dados:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]); // Execute a função novamente quando o ID mudar

  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
    <h1 className="text-3xl font-bold text-center py-16">Product Details</h1>
      {product && <ProductItem product={product} />}
    </div>
  );
}
