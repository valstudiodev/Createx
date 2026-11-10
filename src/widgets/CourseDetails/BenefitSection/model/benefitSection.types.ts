export interface CourseBenefit {
  id: number;
  icon: string;
  translationKey: CourseBenefitKey;
}

export type CourseBenefitKey = 'experience' | 'designers' | 'ux'