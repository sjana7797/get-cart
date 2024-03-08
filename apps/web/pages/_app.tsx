import type { AppProps } from "next/app";
import StoreProvider from "~/components/ReduxStoreProvider";
import Header from "~/components/global/header";
import "@repo/ui/styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import colors from "tailwindcss/colors";
import { trpc } from "~/utils/trpc";
import { ClerkProvider } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const authenticationPages = ["/sign-in/[[...index]]", "/sign-up/[[...index]]"];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const path = router.pathname;

  const [showHeader, setShowHeader] = useState(
    !authenticationPages.includes(path),
  );

  useEffect(() => {
    setShowHeader(!authenticationPages.includes(path));
  }, []);

  return (
    <ClerkProvider
      {...pageProps}
      appearance={{
        variables: { colorPrimary: "#3b82f6" },
      }}
    >
      <StoreProvider>
        <NextNProgress color={colors.red[500]} height={3} />
        {showHeader && <Header />}
        <Component {...pageProps} />
      </StoreProvider>
    </ClerkProvider>
  );
}

export default trpc.withTRPC(MyApp);
