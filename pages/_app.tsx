import "../styles/globals.css";
import type { AppProps } from "next/app";
import ErrorBoundary from "../components/ErrorBoundary";
import Head from "../components/common/Head/Head";
import { UIProvider } from "../components/ui/context";
import Layout from "../components/common/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <ErrorBoundary>
        <UIProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UIProvider>
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
