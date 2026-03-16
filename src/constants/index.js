import { appStore, gPlayStore } from "../assets/assets";

export const navigationItems = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Apps", path: "/apps" },
  { id: 3, label: "Installation", path: "/installation" },
];

export const heroBtn = [
  {
    id: 1,
    label: "Google Play",
    img: gPlayStore,
    path: "https://play.google.com/store/games",
  },
  {
    id: 2,
    label: "App Store",
    img: appStore,
    path: "https://apps.apple.com/us/iphone/today",
  },
];

export const trustedBy = [
  {
    id: 1,
    title: "Total Downloads",
    review: "29.6M",
    perText: "21% more than last month",
  },
  {
    id: 2,
    title: "Total Reviews",
    review: "906K",
    perText: "46% more than last month",
  },
  {
    id: 3,
    title: "Active Apps",
    review: "132+",
    perText: "31 more will Launch",
  },
];
