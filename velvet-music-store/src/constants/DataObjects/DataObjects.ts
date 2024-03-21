import {
  BrandsContentInterace,
  FooterNavigation,
  HomePageCategory,
  NavBrandsOptions,
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
    link: MainRouteCategoryLink + 'monitors',
    category_prop: 'monitors'
  },
  {
    name: 'MIDI Keyboards',
    image: 'midi-keyboard-category.jpg',
    link: MainRouteCategoryLink + 'midi-keyboards',
    category_prop: 'midi-keyboards'
  },
  {
    name: 'Microphones',
    image: 'microphones-category.jpg',
    link: MainRouteCategoryLink + 'microphones',
    category_prop: 'microphones'
  },
  {
    name: 'Headphones',
    image: 'headphones-category.jpg',
    link: MainRouteCategoryLink + 'headphones',
    category_prop: 'headphones'
  },
  {
    name: 'Amplifiers',
    image: 'amplifiers-category.jpg',
    link: MainRouteCategoryLink + 'amplifiers',
    category_prop: 'amplifiers'
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
    categories: [
      {
        label: 'Headphones',
        link: '/products/headphones',
        location_prop: 'headphones'
      },
      {
        label: 'Monitors',
        link: '/products/monitors',
        location_prop: 'monitors'
      },
      {
        label: 'MIDI Keyboards',
        link: '/products/midi-keyboards',
        location_prop: 'midi-keyboards'
      }
    ]
  },
  {
    title: 'Accessories and More',
    categories: [
      { label: 'Cables' },
      { label: 'Guitar and Keyboards' },
      {
        label: 'Microphones',
        link: '/products/microphones',
        location_prop: 'microphones'
      }
    ]
  },
  {
    title: 'Other',
    categories: [
      { label: 'Guitar Pedals' },
      { label: 'Drums Machines' },
      {
        label: 'Amplifiers',
        link: '/products/amplifiers',
        location_prop: 'amplifiers'
      }
    ]
  }
];

export const BrandsList: NavBrandsOptions[] = [
  {
    title: 'Keyboards',
    categories: ['CME', 'Icon']
  },
  {
    title: 'Monitors',
    categories: ['ADAM', 'Kali', 'Harbinger']
  },
  {
    title: 'Headphones',
    categories: ['American Audio', 'Direct Sound', 'Avantone']
  },
  {
    title: 'Microphones',
    categories: ['Warm Audio', 'Heli Sound', 'RODE']
  },
  {
    title: 'Amplifiers',
    categories: ['Laney', 'Kustom', 'Synergy']
  }
];

export const SalesDiscount = ['Brand New', 'Exhibition'];

export const BrandsContentList: BrandsContentInterace[] = [
  {
    title: 'CME',
    image: 'cme_image.webp',
    content:
      'CME (Central Music Company) is a Chinese manufacturer that produces MIDI controllers and musical instruments. They are known for creating a variety of MIDI keyboards, controllers, and related accessories. CME products are designed to cater to musicians, producers, and audio professionals, providing tools for music creation and production.'
  },
  {
    title: 'Icon',
    image: 'icon_image.webp',
    content:
      ' ICON is a brand that produces MIDI controllers and audio equipment, including MIDI keyboards. ICON products are designed for musicians, producers, and audio professionals, providing tools for music creation and production. ICON MIDI keyboards are known for their features, build quality, and compatibility with various digital audio workstations (DAWs).'
  },
  {
    title: 'ADAM',
    image: 'adam_image.webp',
    content:
      'Adam Audio is a German manufacturer specializing in professional audio equipment, particularly studio monitors and speakers. As of my last knowledge update in January 2022, Adam Audio is well-regarded for its high-quality studio monitors, which are used in recording studios, broadcast facilities, and home studios.'
  },
  {
    title: 'Kali',
    image: 'kali_image.jpg',
    content:
      ' Kali Audio is a company specializing in the production of studio monitors, particularly known for its Lone Pine series. Recognized for affordability, these monitors feature innovative design elements and user-friendly features, making professional-grade audio equipment accessible. For the latest details, its advisable to check the official Kali Audio website or recent reviews.'
  },
  {
    title: 'Harbinger',
    image: 'harbinger_image.png',
    content:
      'Harbinger is a brand known for manufacturing a variety of audio equipment, including loudspeakers, PA systems, and related accessories. They are recognized for offering budget-friendly solutions while maintaining reasonable quality. For the most current and detailed information about Harbinger monitors, its recommended to check the latest product offerings and customer reviews on the official Harbinger website or other reliable audio equipment retailers.'
  },
  {
    title: 'American Audio',
    image: 'american_audio_image.png',
    content:
      'American Audio is a brand that produces a range of audio equipment, including headphones. As of my last knowledge update in January 2022, American Audio is known for providing audio solutions for DJs and other professionals in the entertainment industry. The brand aims to offer reliable and quality products for various audio needs.'
  },
  {
    title: 'Direct Sound',
    image: 'direct_sound_image.webp',
    content:
      'Direct Sound is a brand known for producing high-quality headphones, particularly those designed for professional audio applications. The company emphasizes features like noise isolation and durability, making their headphones suitable for use in recording studios, live performances, and other professional audio environments.'
  },
  {
    title: 'Avantone',
    image: 'avantone_image.jpg',
    content:
      'Avantone is a pro audio company known for producing high-quality studio monitors, microphones, and reference headphones. They are recognized for their commitment to providing professional-grade audio equipment with a focus on accurate sound reproduction.'
  },
  {
    title: 'Warm Audio',
    image: 'warm_audio_image.webp',
    content:
      'Warm Audio is a pro audio company known for producing high-quality analog audio equipment, including microphones, preamps, compressors, and other studio gear. The company is recognized for offering professional-grade audio equipment at more accessible price points, making high-end analog sound more affordable for musicians, producers, and recording engineers.'
  },
  {
    title: 'Heli Sound',
    image: 'heil_sound_image.webp',
    content:
      'Heil Sound is a professional audio company specializing in the design and manufacturing of microphones, headset communication systems, and other audio accessories. Founded by Bob Heil in the late 1960s, the company has established itself as a reputable name in the audio industry, particularly in the realm of live sound reinforcement and broadcasting.'
  },
  {
    title: 'RODE',
    image: 'rode_image.png',
    content:
      'Rode Microphones, founded in 1967 by Henry and Astrid Freedman, has grown to become a leading global brand in the audio industry. The company is renowned for producing a wide range of microphones that cater to various applications, including studio recording, live performances, filmmaking, podcasting, and content creation.'
  },
  {
    title: 'Laney',
    image: 'laney_image.png',
    content:
      'Laney was founded in 1967 by Lyndon Laney in Birmingham, United Kingdom. The company started by producing custom amplification for local musicians and bands. Over the years, Laney has grown into an internationally recognized brand known for its diverse range of amplifiers.'
  },
  {
    title: 'Kustom',
    image: 'kustom_image.png',
    content:
      'Kustom was founded in the 1960s by Bud Ross in Chanute, Kansas, USA. The company gained recognition for its distinctive amplifier designs, featuring colorful vinyl coverings and unique tuck-and-roll speaker grille cloth.'
  },
  {
    title: 'Synergy',
    image: 'synergy_image.jpg',
    content:
      'Synergy Amps is a pioneering company in modular amplification systems. Specializing in modular preamp design, Synergy allows musicians to interchange preamp modules, emulating iconic amplifier tones. This flexibility provides a versatile and customizable approach to crafting a broad range of sounds, making it an appealing choice for musicians seeking diverse tones without investing in multiple amplifiers. The company collaborates with renowned amplifier designers, ensuring authenticity in capturing the sonic characteristics of well-known amplifiers. With an emphasis on ease of use and integration with existing gear, Synergy Amps offers a convenient solution for players looking to enhance their sound with a modular and flexible amplification system.'
  }
];
