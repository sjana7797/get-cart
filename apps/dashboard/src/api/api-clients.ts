import { nestJsInstanceRoutes } from "./api-routes";
import { nestJsInstance } from "./instances";
import { AxiosError } from "axios";
import type { Product, Banner, Prisma, Brand } from "database";
import { GetAnalyticResponse } from "./response-types";
import { Banner as BannerSchema } from "~/zod-schema/banner";
import { CreateBrandPayload } from "~/zod-schema/brand";

export async function createProduct(
  product: Prisma.ProductUncheckedCreateInput,
) {
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

export async function getAllProducts() {
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

export async function getSpecs() {
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

export async function createBanner(banner: BannerSchema) {
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

export async function getBanners() {
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

export async function updateBanner({
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

export async function deleteBanner(bannerId: string) {
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

export async function getBrands() {
  try {
    const response = await nestJsInstance.get<Brand[]>(
      `${nestJsInstanceRoutes.getBrands}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error instanceof AxiosError)
      throw new Error(error.response?.data.message);
    else throw new Error(JSON.stringify(error));
  }
}

export async function createBrand(brand: CreateBrandPayload) {
  try {
    const response = await nestJsInstance.post<Brand>(
      nestJsInstanceRoutes.addBrand,
      brand,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    if (error instanceof AxiosError)
      throw new Error(error.response?.data.message);
    else throw new Error(JSON.stringify(error));
  }
}
