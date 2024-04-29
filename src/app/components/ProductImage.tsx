'use client'
import Image from "next/image";
import { ProductType } from "@/types/ProductType"
import { useState } from "react";
import Product from "./Product";

type ProductImageProps = {
    product: ProductType
};

export default function ProductImage({ product }: ProductImageProps) {
    
    return (
        <Image
            src={product.imageLink}
            alt={product.name}
            width={400}
            height={300}
        />
    )
}
