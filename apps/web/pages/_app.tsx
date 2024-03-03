import type { AppProps } from "next/app";
import StoreProvider from "~/components/ReduxStoreProvider";
import Header from "~/components/global/header";
import "@repo/ui/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import colors from "tailwindcss/colors";
import { trpc } from "~/utils/trpc";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <NextNProgress color={colors.red[500]} height={3} />
      <Header />
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default trpc.withTRPC(MyApp);
