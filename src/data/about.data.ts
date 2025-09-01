import type { AboutType } from '@/types/about.types';
import { SiLinkedin, SiGithub, SiInstagram, SiGmail } from 'react-icons/si';

export const aboutData: AboutType = {
    name: "Gan Jie Fong",
    title: "Full-Stack Developer",
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
    bio: `I'm from Johor, born and raised. Graduated from Tunku Abdul Rahman University of Technology and currently learning full-stack development - still figuring things out, but enjoying the process.
    \nMost of my free time goes into gaming (The Witcher 3 and Kingdom Come: Deliverance 2 are some of the best games I've ever played) or listening to music. Lately, I've had The Weeknd on repeat. I also enjoy exploring new things, watching shows, and keeping up with motorsport like Formula 1.
    `
}