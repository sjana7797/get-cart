import { Product } from "~/zod-schema/product";
import { nestJsInstanceRoutes } from "./api-routes";
import { nestJsInstance } from "./instances";
import { AxiosError } from "axios";
import { product } from "database";
import { GetAnalyticResponse } from "./response-types";

async function createProduct(product: Product) {
  try {
    const response = await nestJsInstance.post(
      nestJsInstanceRoutes.createProduct,
      product,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error instanceof AxiosError)
      throw new Error(error.response?.data.message);
    else throw new Error(JSON.stringify(error));
  }
}

async function getAllProducts() {
  try {
    const response = await nestJsInstance.get<product[]>(
      nestJsInstanceRoutes.getAllProducts,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error instanceof AxiosError)
      throw new Error(error.response?.data.message);
    else throw new Error(JSON.stringify(error));
  }
}

async function getSpecs() {
  try {
    const response = await nestJsInstance.get<GetAnalyticResponse>(
      nestJsInstanceRoutes.getAnalytic,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error instanceof AxiosError)
      throw new Error(error.response?.data.message);
    else throw new Error(JSON.stringify(error));
  }
}

export { createProduct, getAllProducts, getSpecs };
