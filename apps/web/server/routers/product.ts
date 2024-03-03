import { publicProcedure, createRouter } from "../trpc";

export const productRouter = createRouter({
  // query for the product banner
  getBanner: publicProcedure.query(async ({ ctx }) => {
    const { prisma } = ctx;

    const b = await prisma.banner.findMany({
      where: { active: true },
    });

    console.log(b, "b");

    return b;
  }),
});
