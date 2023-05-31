export type ExampleType = {
  title: string;
  desc: string;
  title_mobile: string;
  desc_mobile: string;
};
////////requirements///////////
export type EligibilityType = {
  title: string;
  desc: string[];
};

export type CategoriesType = {
  title: string;
  title_mobile: string;
  items: CategoryItemsType[];
};

export type CategoryItemsType = {
  title: string;
  title_mobile: string;
  desc: string;
};

export type RequirementsType = {
  title: string;
  title_mobile: string;
  desc: string;
  items: RequirementItemsType[];
};

export type RequirementItemsType = {
  title: string;
  desc: string | string[];
};

export type SelectType = {
  title: string;
  title_mobile: string;
  desc1: string;
  desc2: string;
};

export type ScheduleType = {
  title: string;
  lists: ScheduleListsType[];
  desc: string | string[];
  desc_mobile: string | string[];
};

export type ScheduleListsType = {
  desc: string;
  desc_mobile: string;
  deadline: string;
};

///////awards/////////
export type AwardsType = {
  title: string;
  desc1: string;
  desc2: string;
};

export type AwardsCategoryType = {
  title: string;
  desc: string;
  items: AwardsItemsType[];
  footnote: string[];
};

export type AwardsItemsType = {
  desc: string;
  table: {
    header: string[];
    content: {
      title: string;
      award: string;
      amount: string;
    }[];
  };
};
/////////rules///////

export type RulesItemsType = {
  title: {
    text: string;
    color: string;
  };
  card: {
    rule: string;
    footnote: string;
  }[];
};
