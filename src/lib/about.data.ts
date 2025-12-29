import type { AboutType } from "@lib/types";
import {
  siGithub,
  siInstagram,
  siGmail,
} from "simple-icons";

export const aboutData: AboutType = {
  name: "Gan Jie Fong",
  title: "Full-Stack Web Developer",
  aliases: [
    "Gan Jie Fong",
    "GanJieFong",
    "Jie Fong Gan",
    "jiefonggan",
  ],
  location: {
    city: "Johor Bahru",
    region: "Johor",
    country: "Malaysia",
    countryCode: "MY",
  },
  summary: "Building things on the web",
  bio: `Growing up with a PC and a PlayStation, I was always fascinated by how software comes together. After graduating from TARUMT, I turned that interest into a career as a full-stack web developer in Johor Bahru.

This site is my personal space to turn ideas into working software and to document what I learn along the way. Outside of work, I enjoy Formula 1, gaming, and experimenting with new tech gadgets.`,
  social: [
    {
      name: "GitHub",
      icon: siGithub.path,
      style: "text-black dark:text-white",
      link: "https://github.com/jiefonggan",
    },
    {
      name: "Instagram",
      icon: siInstagram.path,
      style: "text-pink-600 hover:text-pink-700",
      link: "https://www.instagram.com/jiefong0321",
    },
    {
      name: "Email",
      icon: siGmail.path,
      style: "text-blue-600 hover:text-blue-700",
      link: "mailto:jiefonggan@outlook.com",
    },
  ],
};
