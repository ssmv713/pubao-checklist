import "@/common/styles/globals.css";

import { QueryClient, QueryClientProvider } from "react-query";

import { lightTheme } from "@/common/theme";
import { ThemeProvider } from "@mui/material";

import type { AppProps } from "next/app";
import i18n from "@/global/i18n";

import { I18nextProvider } from "react-i18next";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>
        <I18nextProvider i18n={i18n}>
          <Component {...pageProps} />
        </I18nextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
