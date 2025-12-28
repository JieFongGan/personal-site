import type { AboutType } from '@/lib/types';
import { 
    siGithub, 
    siInstagram, 
    siGmail
} from 'simple-icons';

export const aboutData: AboutType = {
    name: "Gan Jie Fong",
    title: "Full-Stack Web Developer",
    address: "Johor Bahru, Johor, Malaysia",
    social: [
        {
            name: "GitHub",
            icon: siGithub.path,
            style: "text-black dark:text-white",
            link: "https://github.com/jiefonggan"
        },
        {
            name: "Instagram",
            icon: siInstagram.path,
            style: "text-pink-600 hover:text-pink-700",
            link: "https://www.instagram.com/jiefong0321"
        },
        {
            name: "Email",
            icon: siGmail.path,
            style: "text-blue-600 hover:text-blue-700",
            link: "mailto:jiefonggan@outlook.com"
        }
    ],
    summary: "Building things on the web", 
    bio: `Growing up with a PC and a PlayStation, I was always fascinated by how software comes together. After graduating from TARUMT, I've turned that interest into a career as a Full-Stack web developer in JB.

Having a personal site is a big deal for me; it's a dedicated space to turn ideas into working software and document what I learn along the way. Outside of work, you'll find me watching Formula 1, gaming, or testing out new tech gadgets. I just love the process of creating something from scratch.`
};