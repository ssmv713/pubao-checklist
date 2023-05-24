const siteUrl = process.env.NEXT_PUBLIC_FRONT_END_HOST_URL;

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // 프론트 배포 URL
  siteUrl: siteUrl,

  // 검색엔진 설정파일 생성 여부
  generateRobotsTxt: true,

  // 검색 제외 페이지
  exclude: ["/404"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404"],
      },
      { userAgent: "*", allow: "/" },
    ],
  },
};
