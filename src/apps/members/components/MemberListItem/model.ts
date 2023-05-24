/**
 * @desc
 * 컴포넌트의 필요 '데이터'를 추상화한 '모델'
 *
 * onClick, onChange 같은 UI 이벤트가 들어가지 않습니다.
 * 반드시 '데이터' 관련 프로퍼티, 메소드만 포함합니다.
 */
export class MemberListItemModel {
  id: string;
  name: string;
  email: string;
  phone: string;
  profileImageUrl: string;

  static create(data: Partial<MemberListItemModel>) {
    const m = new MemberListItemModel();
    Object.entries(data).forEach(([k, v]) => (m[k] = v));

    return m;
  }
}
