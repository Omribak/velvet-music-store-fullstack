import { FooterNavigation, HomePageCategory, WhyUsOption } from './Interfaces';
import { FaShippingFast, FaPhone, FaCreditCard } from 'react-icons/fa';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { CiCreditCard1 } from 'react-icons/ci';
import { FiPhoneCall } from 'react-icons/fi';

export const CarouselImagesUrls = [
  'carousel-img-1.jpg',
  'carousel-img-2.jpg',
  'carousel-img-3.jpg'
];

export const CategoriesListHome: HomePageCategory[] = [
  {
    name: 'Studio Monitors',
    image: 'monitors-category.jpg'
  },
  {
    name: 'MIDI Keyboards',
    image: 'midi-keyboard-category.jpg'
  },
  {
    name: 'Microphones',
    image: 'microphones-category.jpg'
  },
  {
    name: 'Headphones',
    image: 'headphones-category.jpg'
  },
  {
    name: 'Amplifiers',
    image: 'amplifiers-category.jpg'
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
