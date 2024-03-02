import { Product } from "~/zod-schema/product";
import { nestJsInstanceRoutes } from "./api-routes";
import { nestJsInstance } from "./instances";
import { AxiosError } from "axios";

async function createProduct(product: Product) {
  try {
    const response = await nestJsInstance.post(
      nestJsInstanceRoutes.createProduct,
      product
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error instanceof AxiosError)
      throw new Error(error.response?.data.message);
    else throw new Error(JSON.stringify(error));
  }
}

export { createProduct };
