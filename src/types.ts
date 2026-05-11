export interface ContentData {
  nav: {
    logo: string;
    cta: string;
  };
  hero: {
    badge: string;
    headline: string;
    sub: string;
    cta1: string;
    cta2: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
  why: {
    title: string;
    sub: string;
    cards: Array<{
      icon: string;
      title: string;
      body: string;
    }>;
  };
  programmes: {
    title: string;
    sub: string;
    list: Array<{
      tag: string;
      name: string;
      tool: string;
      duration: string;
      focus: string;
      price: string;
      color: string;
    }>;
  };
  camp: {
    title: string;
    date: string;
    sub: string;
    features: string[];
    cta: string;
    note: string;
  };
  process: {
    title: string;
    steps: Array<{
      n: string;
      title: string;
      body: string;
    }>;
  };
  contact: {
    title: string;
    sub: string;
    phone: string;
    email: string;
    address: string;
    cta: string;
  };
  footer: {
    copy: string;
    tagline: string;
  };
}

export interface EditableTextProps {
  value: string;
  onChange: (value: string) => void;
  tag?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
  className?: string;
  editing: boolean;
  multiline?: boolean;
}