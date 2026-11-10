import { CourseBenefit } from "../model/benefitSection.types";

export const courseBenefit: CourseBenefit[] = [
  {
    id: 1,
    icon: '--icon-circle-check-big',
    translationKey: 'experience'
  },
  {
    id: 2,
    icon: '--icon-circle-check-big',
    translationKey: 'designers'
  },
  {
    id: 3,
    icon: '--icon-circle-check-big',
    translationKey: 'ux'
  }
] as const;