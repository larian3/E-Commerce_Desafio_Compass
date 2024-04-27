'use client'
import Image from "next/image";
import { CategoryType } from "@/types/CategoryType"
import { useState } from "react";
import Category from "./Category";

type CategoryImageProps = {
    category: CategoryType;
};

export default function CategoryImage({ category }: CategoryImageProps) {
    
    return (
        <Image
            src={category.imageLink}
            alt={category.name}
            width={400}
            height={300}
        />
    )
}
