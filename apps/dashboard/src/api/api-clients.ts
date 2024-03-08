import { Product as ProductSchema } from "~/zod-schema/product";
import { nestJsInstanceRoutes } from "./api-routes";
import { nestJsInstance } from "./instances";
import { AxiosError } from "axios";
import type { Product, Banner, Prisma } from "database";
import { GetAnalyticResponse } from "./response-types";
import { Banner as BannerSchema } from "~/zod-schema/banner";

async function createProduct(product: ProductSchema) {
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
    const response = await nestJsInstance.get<Product[]>(
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

async function createBanner(banner: BannerSchema) {
  try {
    const response = await nestJsInstance.post<BannerSchema>(
      nestJsInstanceRoutes.createBanner,
      banner,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error instanceof AxiosError)
      throw new Error(error.response?.data.message);
    else throw new Error(JSON.stringify(error));
  }
}

async function getBanners() {
  try {
    const response = await nestJsInstance.get<Banner[]>(
      nestJsInstanceRoutes.getBanners,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error instanceof AxiosError)
      throw new Error(error.response?.data.message);
    else throw new Error(JSON.stringify(error));
  }
}

async function updateBanner({
  banner,
  bannerId,
}: {
  banner: Prisma.BannerUpdateInput;
  bannerId: string;
}) {
  try {
    const response = await nestJsInstance.patch<BannerSchema>(
      `${nestJsInstanceRoutes.updateBanner}`,
      {
        data: banner,
        id: bannerId,
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error instanceof AxiosError)
      throw new Error(error.response?.data.message);
    else throw new Error(JSON.stringify(error));
  }
}

async function deleteBanner(bannerId: string) {
  try {
    const response = await nestJsInstance.delete<BannerSchema>(
      `${nestJsInstanceRoutes.deleteBanner}`,
      { params: { bannerId } },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error instanceof AxiosError)
      throw new Error(error.response?.data.message);
    else throw new Error(JSON.stringify(error));
  }
}

export {
  createProduct,
  getAllProducts,
  getSpecs,
  createBanner,
  getBanners,
  updateBanner,
  deleteBanner,
};
