import { Timestamp } from "firebase/firestore";
import { ImHome } from "react-icons/im";
export type BlogType = {
  title:string,
  cover:string,
  date:string,
  contentId:string,
  preview:string
}
export type BlogContentType = {
  title:string,
  content:string,
  cover:string,
  date:string,
  blogId:string
}



export const routes = [
    {   
      label: 'HOME',
      icon: ImHome,
      href: '/',
      color: "text-sky-500",
      tag: "home"
    },
    {
      label: 'SERVICES',
      // icon: VideoIcon,
      color: "text-orange-700",
      href: '/services',
      tag: "services"
    },
    // {
    //   label: 'LIVESTREAM',
    //   // icon: ImageIcon,
    //   color: "text-pink-700",
    //   href: '/livestream',
    //   tag: "livestream"
    // },
    {
      label: "FOUNDER'S FRIDAY",
      // icon: Music,
      color: "text-emerald-500",
      href: '/founder',
      tag: "founder"
    },
    {
      label: 'BLOG',
      // icon: Code,
      color: "text-green-700",
      href: '/blog',
      tag: "blog"
    },
    // {
    //   label: 'CONTACT',
    //   // icon: Settings,
    //   href: '/contact',
    //   tag: "contact",
    // },
  ];

export const middlewareRoutes = [
  '/services','/livestream','/founder','/blog','/contact'
]

export const services = [
  'web-dev',
  'mkt-services',
  'booking-influencer',
  'brand-co-host',
  'event-organizing',
  'media-support'
]