import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import {
  CategoriesType,
  EligibilityType,
  RequirementsType,
  ScheduleType,
  SelectType,
} from "@/types/common.type";
import { Colors, Mq, useCustomMediaQuery } from "@/common/theme";

export const RequirementsSection = () => {
  const { t } = useTranslation("requirements");
  const eligibility: EligibilityType = t("eligibility", {
    returnObjects: true,
  });
  const categories: CategoriesType = t("categories", {
    returnObjects: true,
  });
  const requirements: RequirementsType = t("requirements", {
    returnObjects: true,
  });
  const select: SelectType = t("select", {
    returnObjects: true,
  });
  const schedule: ScheduleType = t("schedule", {
    returnObjects: true,
  });
  const { isMedium } = useCustomMediaQuery();
  return (
    <Stack css={st.root} spacing="5.208vw">
      <List title={eligibility.title}>
        <ul>
          {eligibility.desc.map((it, index) => (
            <li key={index}>
              <Typography
                variant="subtitle2"
                color={Colors.text.variant6}
                fontWeight={400}
                css={st.px14}
              >
                {it}
              </Typography>
            </li>
          ))}
        </ul>
      </List>
      <List title={categories.title}>
        <Stack direction="row" spacing="3.125vw">
          {categories.items.map((it, index) => (
            <Stack css={st.category_item} key={index} alignItems="center">
              <Typography variant="subtitle1" color={Colors.common.white}>
                {it.title}
              </Typography>
              <Typography
                textAlign={"center"}
                variant="body2"
                color={Colors.common.white}
              >
                {it.desc}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </List>
      <List title={requirements.title}>
        <div>
          <Typography
            css={st.px14}
            variant="subtitle2"
            color={Colors.text.variant6}
          >
            {requirements.desc}
          </Typography>
          <Stack css={st.table}>
            {requirements.items.map((it, index) => (
              <dl key={index} css={st.table_row}>
                <dt css={st.table_title}>
                  <Typography
                    color={Colors.background.variant2}
                    variant="subtitle2"
                    fontWeight={700}
                    css={st.px12}
                  >
                    {it.title}
                  </Typography>
                </dt>
                <dd css={st.table_desc}>
                  {Array.isArray(it.desc) ? (
                    it.desc.map((descItem, idx) => (
                      <Typography
                        key={idx}
                        color={Colors.background.variant2}
                        variant="subtitle2"
                        css={st.px12}
                      >
                        {descItem}
                      </Typography>
                    ))
                  ) : (
                    <Typography
                      color={Colors.background.variant2}
                      variant="subtitle2"
                      css={st.px12}
                    >
                      {it.desc}
                    </Typography>
                  )}
                </dd>
              </dl>
            ))}
          </Stack>
        </div>
      </List>
      <List title={select.title}>
        <Typography variant="h5" color={Colors.text.variant6}>
          {select.desc1}
        </Typography>
        <Typography
          css={st.select_desc2}
          variant="subtitle2"
          color={Colors.text.variant6}
        >
          {select.desc2}
        </Typography>
      </List>
      <List title={schedule.title}>
        <Stack spacing="3.125vw">
          {schedule.lists.map((it, index) => (
            <Stack key={index} direction="row">
              <div css={st.schedule}>
                <Typography
                  css={st.schedule_text}
                  color={Colors.common.black}
                  variant="subtitle2"
                  fontWeight={700}
                >
                  {it.desc}
                </Typography>
              </div>
              <Typography
                css={st.deadline}
                color={Colors.common.white}
                variant="subtitle2"
              >
                {it.deadline}
              </Typography>
            </Stack>
          ))}
        </Stack>
        {Array.isArray(schedule.desc) ? (
          <ul css={st.lists}>
            {schedule.desc.map((it, index) => (
              <li key={index}>
                <Typography color={Colors.common.white} variant="body2">
                  {it}
                </Typography>
              </li>
            ))}
          </ul>
        ) : (
          <Typography
            mt={isMedium ? "4.884vw" : "2.083vw"}
            color={Colors.common.white}
            variant="body2"
          >
            {schedule.desc}
          </Typography>
        )}
      </List>
    </Stack>
  );
};

const st = {
  root: css`
    background: #ff6a00;
    padding: 12.791vw 8.372vw;
  `,
  px14: css`
    @media ${Mq.md} {
      font-size: 3.256vw;
    }
  `,
  px13: css`
    @media ${Mq.md} {
      font-size: 3.023vw;
    }
  `,
  px12: css`
    @media ${Mq.md} {
      font-size: 2.791vw;
    }
  `,
  category_item: css`
    width: 100%;
    background: #000;
    padding: 1.406vw 0;
    border-radius: 1.25vw;
  `,
  table: css`
    gap: 0.208vw;
    width: 100%;
    @media ${Mq.md} {
      margin-top: 3.953vw;
    }
  `,
  table_row: css`
    display: flex;
    width: 100%;
  `,
  table_title: css`
    width: 20.677vw;
    padding: 0.833vw 1.302vw;
    background: #fff1dd;
  `,
  table_desc: css`
    background: #191919;
    flex: 1;
    padding: 0.833vw 1.302vw;
  `,
  select_desc2: css`
    @media ${Mq.md} {
      font-size: 2.791vw !important;
    }
  `,
  schedule: css`
    flex: 1;
  `,
  schedule_text: css`
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-thickness: 0.104vw;
    @media ${Mq.md} {
      font-size: 3.023vw;
      text-decoration: none;
    }
  `,
  deadline: css`
    width: 36.458vw;
    @media ${Mq.md} {
      font-size: 3.023vw;
    }
  `,
  lists: css`
    margin-top: 2.083vw;
    list-style: disc;
    color: white;
  `,
  list_title: css`
    width: 26.042vw;
    @media ${Mq.md} {
      text-decoration: underline;
      text-underline-position: under;
      text-decoration-thickness: 3px;
      width: fit-content;
      margin-bottom: 3.953vw;
    }
  `,
  list_item: css`
    flex: 1;
  `,
};

type ListType = {
  title: string;
  children: ReactNode;
};
const List = ({ children, title }: ListType) => {
  const { isMedium } = useCustomMediaQuery();
  return (
    <Stack direction={isMedium ? "column" : "row"}>
      <Typography css={st.list_title} variant="h6" color={Colors.common.black}>
        {title}
      </Typography>
      <div css={st.list_item}>{children}</div>
    </Stack>
  );
};
