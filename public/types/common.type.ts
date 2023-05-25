export type ExampleType = {
  title: string;
  desc: string;
};
////////requirements///////////
export type EligibilityType = {
  title: string;
  desc: string[];
};

export type CategoriesType = {
  title: string;
  items: CategoryItemsType[];
};

export type CategoryItemsType = {
  title: string;
  desc: string;
};

export type RequirementsType = {
  title: string;
  desc: string;
  items: RequirementItemsType[];
};

export type RequirementItemsType = {
  title: string;
  desc: string | string[];
};

export type SelectType = {
  title: string;
  desc1: string;
  desc2: string;
};

export type ScheduleType = {
  title: string;
  lists: ScheduleListsType[];
  desc: string;
};

export type ScheduleListsType = {
  desc: string;
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
