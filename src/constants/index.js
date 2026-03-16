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
