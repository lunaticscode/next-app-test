import "../styles/globals.css";
import type { AppProps } from "next/app";
import ErrorBoundary from "../components/ErrorBoundary";
import Head from "../components/common/Head/Head";
import { UIProvider } from "../components/ui/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />

      <ErrorBoundary>
        <UIProvider>
          <Component {...pageProps} />
        </UIProvider>
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
