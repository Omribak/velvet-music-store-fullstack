import {
  FooterNavigation,
  HomePageCategory,
  NavCategoriesOptions,
  WhyUsOption
} from './Interfaces';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { CiCreditCard1 } from 'react-icons/ci';
import { FiPhoneCall } from 'react-icons/fi';
const ParentDirectorySocial = 'carousel-images/';

const MainRouteCategoryLink = 'products/';

export const CarouselImagesUrls = [
  ParentDirectorySocial + 'carousel-img-1.jpg',
  ParentDirectorySocial + 'carousel-img-2.jpg',
  ParentDirectorySocial + 'carousel-img-3.jpg'
];

export const CategoriesListHome: HomePageCategory[] = [
  {
    name: 'Studio Monitors',
    image: 'monitors-category.jpg',
    link: MainRouteCategoryLink + 'studio-monitors'
  },
  {
    name: 'MIDI Keyboards',
    image: 'midi-keyboard-category.jpg',
    link: MainRouteCategoryLink + 'midi-keyboards'
  },
  {
    name: 'Microphones',
    image: 'microphones-category.jpg',
    link: MainRouteCategoryLink + 'microphones'
  },
  {
    name: 'Headphones',
    image: 'headphones-category.jpg',
    link: MainRouteCategoryLink + 'headphones'
  },
  {
    name: 'Amplifiers',
    image: 'amplifiers-category.jpg',
    link: MainRouteCategoryLink + 'amplifiers'
  }
];

export const WhyUsOptions: WhyUsOption[] = [
  {
    title: 'Shipping to all parts of the country',
    description:
      'We deliver our products to all parts of the country. You can choose the delivery method from Israel Post, home delivery, or self-pickup.',
    icon: LiaShippingFastSolid
  },
  {
    title: 'Professional Phone Consultation',
    description:
      'Having doubts? Have more questions? We are available for any professional inquiry by phone 053-5318822.',
    icon: FiPhoneCall
  },
  {
    title: 'Payment Options',
    description:
      'We accept all credit cards. You can also pay in cash by visiting our store , we have branches all over the country.',
    icon: CiCreditCard1
  }
];

export const FooterColumns: FooterNavigation = {
  navlinks: {
    title: 'Navigation',
    links: ['Home', 'About', 'Blog', 'Returns & Funds', 'Contact Us']
  },
  information: {
    title: 'Who Are We ?',
    content:
      'Velvet Rosa are importers of a variety of world-leading sound brands. We market a wide range of items at import prices. On our website, you can find speakers, microphones, control keyboards, microphones, and a diverse range of products at prices you wont find anywhere else. Unsure of what to buy? Contact us, and we will provide you with professional service and advice.'
  },
  contact: {
    title: 'Contact Us',
    address: 'Moshe Bakar 32 , Rishon Le Zion',
    phone: '053-5318822'
  }
};

export const NavCategoriesList: NavCategoriesOptions[] = [
  {
    title: 'Studio Products',
    categories: ['Headphones', 'Monitors', 'MIDI Keyboards']
  },
  {
    title: 'Accessories and More',
    categories: [
      'Cables',
      'Guitar and Keyboards Accessories',
      'Microphones Accessories'
    ]
  },
  {
    title: 'Other',
    categories: ['Guitar Pedals', 'Drums Machines', 'Amplifiers']
  }
];
