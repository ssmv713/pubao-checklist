import { useQuery } from "react-query";

import { MembersApi } from "../api";
import { MembersQuery } from "../dto";

export const useFetchMemberList = (query: MembersQuery) => {
  return useQuery(["useFetchMemberList", query], () =>
    MembersApi.fetchMembers(query)
  );
};
