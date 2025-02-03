import { Product } from "../../../types/product";

// Strategies for sorting the product list
export const sortByPrice = (products: Product[]): Product[] => {
  return [...products].sort((a, b) => a.price - b.price);
};

export const sortByRating = (products: Product[]): Product[] => {
  return [...products].sort((a, b) => b.rating - a.rating);
};

export const sortByName = (products: Product[]): Product[] => {
  return [...products].sort((a, b) => a.name.localeCompare(b.name));
};

/**
 * A record of sorting strategies
 * Record is a utility type in TypeScript 
 * that represents a dictionary where the keys must be of the same type.
 * Use it when you know the key type in advance.
 */
export const strategies: Record<string, (products: Product[]) => Product[]> = {
  price: sortByPrice,
  rating: sortByRating,
  name: sortByName,
};