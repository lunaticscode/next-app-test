import "../styles/globals.css";
import type { AppProps } from "next/app";
import ErrorBoundary from "../components/ErrorBoundary";
import Head from "../components/common/Head/Head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
