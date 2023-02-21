import fs from "fs";
import path from "path";
import { Product } from "@/interfaces/Product";

export const readProductData = (): Product[] => {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(jsonData).products;
};

export const getProductsByCategory = (category: string): Product[] => {
  return readProductData()
    .filter((product) => product.category === category)
    .map((product) => {
      return {
        id: product.id,
        slug: product.slug,
        name: product.name,
        shortName: product.shortName,
        price: product.price,
        cartImage: product.cartImage,
        description: product.description,
        new: product.new,
        category: product.category,
        categoryImage: product.categoryImage,
      };
    })
    .sort((a, b) => Number(b.new) - Number(a.new));
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return readProductData().find((product) => product.slug === slug);
};

export const getCategories = (): string[] => {
  const categories = readProductData().map((product) => product.category);
  return Array.from(new Set(categories));
};

export const getProductPaths = (): { category: string; slug: string }[] => {
  return readProductData().map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
};
