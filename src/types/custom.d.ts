declare module '*.png';

declare module '*.svg' {
  const content: string;
  export default content;
}

export interface SelectedAccordionProps {
  id: number;
  title: string;
}
