import { IconBaseProps } from 'react-icons';

export interface HomePageCategory {
  name: string;
  image: string;
  link: string;
  category_prop: string;
}

export interface WhyUsOption {
  title: string;
  description: string;
  icon: (props: IconBaseProps) => JSX.Element;
}

export interface FooterNavigation {
  navlinks: FooterNavigationLinks;
  information: FooterWhoAreWe;
  contact: FooterContactInfo;
}

export interface FooterNavigationLinks {
  title: string;
  links: string[];
}

export interface FooterWhoAreWe {
  title: string;
  content: string;
}

export interface FooterContactInfo {
  title: string;
  address: string;
  phone: string;
}

export interface NavCategoriesOptions {
  title: string;
  categories: { label: string; link?: string; location_prop?: string }[];
}

export interface NavBrandsOptions {
  title: string;
  categories: string[];
}

export interface BrandsContentInterace {
  title: string;
  image: string;
  content: string;
}
