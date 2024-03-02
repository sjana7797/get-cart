import { Product } from "~/zod-schema/product";
import { nestJsInstanceRoutes } from "./api-routes";
import { nestJsInstance } from "./instances";

async function createProduct(product: Product) {
  try {
    const response = await nestJsInstance.post(
      nestJsInstanceRoutes.createProduct,
      product
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { createProduct };
