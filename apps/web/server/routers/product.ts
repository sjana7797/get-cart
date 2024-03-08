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
});
