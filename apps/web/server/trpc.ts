import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import type { Context } from "./context";
import { Prisma } from "database";
import { ZodError } from "zod";

const t = initTRPC.context<Context>().create({
  transformer: superjson,

  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
        prismaError: isPrismaError(error.cause) ? error.cause : null,
      },
    };
  },
});

/**
 * Create a router
 */
export const createRouter = t.router;

/**
 * Create an unprotected procedure
 **/
export const publicProcedure = t.procedure;

export function isPrismaError(error: Error | undefined): boolean {
  return (
    error instanceof Prisma.PrismaClientKnownRequestError ||
    error instanceof Prisma.PrismaClientUnknownRequestError ||
    error instanceof Prisma.PrismaClientValidationError ||
    error instanceof Prisma.PrismaClientRustPanicError ||
    error instanceof Prisma.PrismaClientInitializationError
  );
}
