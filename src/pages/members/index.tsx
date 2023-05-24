import Head from "next/head";

import { MemberListItemModel } from "@/apps/members/components/MemberListItem";
import { useFetchMemberList } from "@/apps/members/infra/hooks";
import { MemberListView } from "@/apps/members/views/list";

/**
 * @desc
 * Page는 SEO를 위한 metadata를 세팅하고
 * 뷰가 필요로 하는 데이터를 Fetch API로 불러와, 뷰 모델로 변환한 후 props로 전달합니다.
 *
 * Fetch API의 호출은 CSR, SSR 두 가지 방식으로 진행될 수 있으므로
 * View가 아닌 Page에서 수행해야 합니다.
 */
export default function MembersPage() {
  const { data } = useFetchMemberList({
    results: 20,
  });
  if (!data) {
    return <div>{"데이터 불러오기 실패"}</div>;
  }
  const results = data.data.results;

  const models = results.map((it) =>
    MemberListItemModel.create({
      id: it.id.value,
      name: `${it.name.title} ${it.name.first} ${it.name.last}`,
      email: it.email,
      phone: it.cell,
      profileImageUrl: it.picture.large,
    })
  );

  return (
    <>
      <CustomHead />
      <MemberListView models={models} />
    </>
  );
}

const CustomHead = () => {
  const projectDisplayNmae = process.env.NEXT_PUBLIC_PROJECT_DISPLAY_NAME;

  const pageName = "멤버 목록";
  const commonDescription = `해당 페이지에 대한 설명을 입력해 주세요. 자세하게 입력할수록 검색엔진 노출 확률이 높아집니다`;

  const title = `${pageName} | ${projectDisplayNmae}`;
  const keywords =
    "상세·랜딩 페이지, 웹사이트 개발, 모바일·웹, 프로그램 개발, 소프트웨어 개발, 서버 개발, 앱 개발, 제품·패키지 서비스, 정부지원사업";

  const description = `${commonDescription}, ${keywords}`;

  const snsDescription = commonDescription;
  const snsImage = "SNS에 미리보기로 노출될 이미지 주소를 여기에 넣어주세요";
  const snsUrl = "SNS에서 클릭되면 이동할 URL을 여기에 넣어주세요";

  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index,follow" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={snsDescription} />
      <meta property="og:url" content={snsUrl} />

      <meta property="og:image" content={snsImage} />
      <meta property="og:image:secure_url" content={snsImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={snsDescription} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={snsUrl} />
      <meta name="twitter:image" content={snsImage} />
    </Head>
  );
};
