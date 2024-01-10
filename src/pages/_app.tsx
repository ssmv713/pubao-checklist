import "@/common/styles/globals.css";

import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import { lightTheme } from "@/common/theme";
import { ThemeProvider } from "@mui/material";

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
