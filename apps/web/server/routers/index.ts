import { createRouter } from "../trpc";
import { productRouter } from "./product";

export const appRouter = createRouter({
  product: productRouter,
});

// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter;
