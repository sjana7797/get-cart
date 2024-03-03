import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { prisma } from "~/server/db";

interface CreateContextOptions {
  // session: Session | null
}

/**
 * Inner function for `createContext` where we create the context.
 * This is useful for testing when we don't want to mock Next.js' request/response
 */
export async function createContextInner(_opts: CreateContextOptions) {
  return { prisma };
}

export type Context = Awaited<ReturnType<typeof createContextInner>>;

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/v11/context
 */
export async function createContext(
  opts: CreateNextContextOptions
): Promise<Context> {
  // for API-response caching see https://trpc.io/docs/v11/caching

  return await createContextInner({});
}
