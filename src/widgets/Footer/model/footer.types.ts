
export type FooterColumnType = FooterLink | FooterContact

export interface FooterLink {
  type: 'link';
  label: string;
  to: string;
}

export interface FooterContact {
  type: 'contact';
  label: string;
  value: string;
  href: string;
}

export interface FooterColumnData {
  title: string;
  items: FooterColumnType[],
  className?: string;
}