import React from 'react';
import { IconBaseProps, IconType } from 'react-icons';

export interface HomePageCategory {
  name: string;
  image: string;
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
