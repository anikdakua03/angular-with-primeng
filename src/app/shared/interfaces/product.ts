export interface IPaginated<T> {
    data: T;
    limit: number;
    totalPages: number;
    previousPage: boolean;
    nextPage: boolean;
    totalItems: number;
    currentPageItems: number;
}

export interface IProduct {
    id: number;
    title: string;
    category: string;
    price: number;
    stock: number;
    discountPercentage: number;
    description: string;
    rating: number;
    brand: string;
    thumbnail: string;
    images: string[];
}