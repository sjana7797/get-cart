import { publicProcedure, createRouter } from "../trpc";

export const productRouter = createRouter({
  // query for the product banner
  getBanner: publicProcedure.query(async ({ ctx }) => {
    const { prisma } = ctx;

    const banners = await prisma.banner.findMany({
      where: { active: true },
    });

    return banners;
  }),

  // get all products
  getProducts: publicProcedure.query(async ({ ctx }) => {
    const { prisma } = ctx;
    const products = await prisma.product.findMany({});

    return products;
  }),
});
