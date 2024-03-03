import { createNextApiHandler } from "@trpc/server/adapters/next";

import { createContext } from "~/server/context";
import { appRouter } from "~/server/routers/_app";

export default createNextApiHandler({
  router: appRouter,
  createContext: createContext,
  onError: ({ error, req, path }) => {
    // env.NODE_ENV === "development"
    //   ? ({ path, error }) => {
    //       console.error(
    //         `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
    //       );
    //     }
    //   : undefined;

    console.error(`❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`);
  },
});
