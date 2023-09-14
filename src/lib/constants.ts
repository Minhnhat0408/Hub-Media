import { ImHome } from "react-icons/im";
export const routes = [
    {   
      label: 'HOME',
      icon: ImHome,
      href: '',
      color: "text-sky-500",
      tag: "home"
    },
    {
      label: 'ABOUT US',
      // icon: MessageSquare,
      href: '/about',
      color: "text-violet-500",
      tag: "about"
    },
    {
      label: 'LIVESTREAM',
      // icon: ImageIcon,
      color: "text-pink-700",
      href: '/livestream',
      tag: "livestream"
    },
    {
      label: 'SERVICES',
      // icon: VideoIcon,
      color: "text-orange-700",
      href: '/services',
      tag: "services"
    },
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