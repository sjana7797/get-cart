import { Product } from "~/zod-schema/product";
import { nestJsInstanceRoutes } from "./api-routes";
import { nestJsInstance } from "./instances";
import { AxiosError } from "axios";
import { product, banner, Prisma } from "database";
import { GetAnalyticResponse } from "./response-types";
import { Banner } from "~/zod-schema/banner";

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

async function createBanner(banner: Banner) {
  try {
    const response = await nestJsInstance.post<Banner>(
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
    const response = await nestJsInstance.get<banner[]>(
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
  banner: Prisma.bannerUpdateInput;
  bannerId: string;
}) {
  try {
    const response = await nestJsInstance.patch<Banner>(
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
    const response = await nestJsInstance.delete<Banner>(
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
