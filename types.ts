export enum ViewMode {
  PORTFOLIO = 'PORTFOLIO',
  SUMMARY = 'SUMMARY',
  PROFILE = 'PROFILE'
}

export interface PlannerInfo {
  name: string;
  company: string;
  position: string;
  specialty: string[];
  phone: string;
}

export const PLANNER: PlannerInfo = {
  name: "강수민",
  company: "나누리사업단",
  position: "상속·증여·절세 전문 플래너",
  specialty: [
    "상속·증여·절세 전문",
    "양계·축산 농가 가업승계 플랜 설계",
    "농가 맞춤 상속 구조 및 자녀 형평성 설계"
  ],
  phone: "010-9007-4133"
};