import { publicProcedure, createRouter } from "../trpc";

export const productRouter = createRouter({
  // query for the product banner
  getBanner: publicProcedure.query(async ({ ctx, input }) => {
    const { prisma } = ctx;

    const bannerProducts = await prisma.banner.findMany({
      where: { active: true },
      select: {
        product: true,
      },
    });

    const products = bannerProducts.map((banner) => banner.product);

    return products;
  }),
});
