export type ProductType = {
    [x: string]: string | undefined;
    id:number;
    name: string;
    categoryId: number;
    description: string|null;
    price:number;
    discountPrice:number;
    discountPercent:number;
    isNew: boolean;
    imageLink: string;
}
