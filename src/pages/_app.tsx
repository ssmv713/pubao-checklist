import "@/common/styles/globals.css";

import { QueryClient, QueryClientProvider } from "react-query";

import { lightTheme } from "@/common/theme";
import { ThemeProvider } from "@mui/material";

import type { AppProps } from "next/app";
//
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
