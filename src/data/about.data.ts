import type { AboutType } from '@/types/about.types';
import { SiLinkedin, SiGithub, SiInstagram, SiGmail } from 'react-icons/si';

export const aboutData: AboutType = {
    name: "Gan Jie Fong",
    title: "Full-Stack Web Developer",
    avatarUrl: "/jf-formal.webp",
    address: "Johor Bahru, Johor, Malaysia",
    social: [
        {
            name: "LinkedIn",
            icon: SiLinkedin,
            style: "text-blue-600 hover:text-blue-700",
            link: "https://www.linkedin.com/in/ganjiefong"
        },
        {
            name: "GitHub",
            icon: SiGithub,
            style: "",
            link: "https://github.com/jiefonggan"
        },
        {
            name: "Instagram",
            icon: SiInstagram,
            style: "text-pink-600 hover:text-pink-700",
            link: "https://www.instagram.com/jiefong0321"
        },
        {
            name: "Email",
            icon: SiGmail,
            style: "text-blue-600 hover:text-blue-700",
            link: "mailto:jiefonggan@outlook.com"
        }
    ],
    summary: "Coding, gaming, and trying to be better",
    bio: `I was born and raised in Johor and graduated from Tunku Abdul Rahman University of Technology. I'm currently diving into full-stack development - still figuring things out, but enjoying every step of the journey and learning something new each day.
    \nOutside of coding, I like spending my time gaming, listening to music, exploring new ideas, watching shows, and keeping up with Formula 1. I enjoy discovering how things work, whether it's in tech, design, or everyday life, and I'm always looking for ways to grow and challenge myself.`
}