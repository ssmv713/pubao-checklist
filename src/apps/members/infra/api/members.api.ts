import axios, { AxiosResponse } from "axios";

import { MembersFetchResponse, MembersQuery } from "../dto";

const API_HOST = "https://randomuser.me/api/";

export class MembersApi {
  static fetchMembers(
    query: MembersQuery
  ): Promise<AxiosResponse<MembersFetchResponse>> {
    const path = `${API_HOST}`;

    return axios.get(path, {
      params: query,
    });
  }

  // fetchMember
  // createMember
  // updateMember
  // deleteMember
}
