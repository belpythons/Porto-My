import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@belpythons",
    icon: Icons.gitHub,
    link: "https://github.com/belpythons",
  },
  {
    name: "LinkedIn",
    username: "Belva Pranama",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/belva-pranama-01048a346/",
  },
  {
    name: "Twitter",
    username: "@bekgos8955",
    icon: Icons.twitter,
    link: "https://x.com/bekgos8955?t=UVTHOJDdUwvAvso2N_Rrsg&s=08",
  },
  {
    name: "Gmail",
    username: "bebleblablibub",
    icon: Icons.gmail,
    link: "mailto:bebleblablibub@gmail.com",
  },
];