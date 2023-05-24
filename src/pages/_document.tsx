import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <CustomHead />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

const CustomHead = () => {
  const title = process.env.NEXT_PUBLIC_PROJECT_DISPLAY_NAME;
  const faviconUrl = "/favicon.png";

  return (
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="application-name" content={title} />

      <meta property="og:site_name" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko_KR" />

      <link rel="shortcut icon" href={faviconUrl} />
      <link rel="icon" href={faviconUrl} />
    </Head>
  );
};
