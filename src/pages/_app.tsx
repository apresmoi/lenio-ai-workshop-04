import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";

const theme = createTheme({});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>AI Workshop 04 - FAQ</title>
        <meta name="description" content="AI Workshop 04 - FAQ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
