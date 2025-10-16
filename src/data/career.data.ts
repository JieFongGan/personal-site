import type { CareerType } from "@/types/career.types";
import { 
    SiHtml5, 
    SiCss3, 
    SiJavascript, 
    SiMysql, 
    SiCplusplus, 
    SiPhp, 
    SiDotnet, 
    SiKotlin, 
    SiSwift, 
    SiReact, 
    SiNodedotjs, 
    SiNextdotjs, 
    SiPostgresql, 
    SiTypescript, 
    SiTailwindcss 
} from 'react-icons/si';

export const careerData: CareerType[] = [
    {
        category: "education",
        title: "Diploma in Information Technology",
        organization: "Tunku Abdul Rahman University College (TARC)",
        organizationUrl: "https://tarc.edu.my/",
        location: "Setapak, Kuala Lumpur, Malaysia",
        startDate: new Date(2020, 5),
        endDate: new Date(2022, 5),
        isCurrent: false,
        description: `Introduced me to the world of IT and gave me a strong foundation in core concepts and development practices. 
        I started with the basics of programming, using **C++** as my first language, which helped me build problem-solving skills and understand object-oriented principles. 
        Throughout the course, I learned how software development works—from coding and debugging to the overall development flow. 
        I also explored areas like *web development*, *databases*, and *system design*, which gave me hands-on experience and a practical understanding of how IT solutions are built.`,
        learnedSkills: [
            {
                name: "HTML",
                icon: SiHtml5,
                style: "text-orange-500",
            },
            {
                name: "CSS",
                icon: SiCss3,
                style: "text-blue-500",
            },
            {
                name: "JavaScript",
                icon: SiJavascript,
                style: "text-yellow-400",
            },
            {
                name: "MySQL",
                icon: SiMysql,
                style: "text-blue-600",
            },
            {
                name: "C++",
                icon: SiCplusplus,
                style: "text-blue-700",
            },
        ],
    },
    {
        category: "education",
        title: "Bachelor of Information Technology (Honours) in Information Security",
        organization: "Tunku Abdul Rahman University of Management and Technology (TARUMT)",
        organizationUrl: "https://tarc.edu.my/",
        location: "Setapak, Kuala Lumpur, Malaysia",
        startDate: new Date(2022, 7),
        endDate: new Date(2024, 8),
        isCurrent: false,
        description: `Focused on understanding how security works in the real world of the internet—protecting data, networks, and systems from threats. 
        I learned not just the theory but the practical side of cybersecurity, including *ethical hacking*, *cryptography*, and *penetration testing*. 
        The program gave me insights into how attackers exploit systems and how to build defenses to prevent it. 
        I also explored topics like **network security**, **risk assessment**, and **IT governance**, which helped me see the bigger picture of securing information in today's connected world.`,
        learnedSkills: [
            {
                name: "PHP",
                icon: SiPhp,
                style: "text-indigo-500",
            },
            {
                name: "asp.net",
                icon: SiDotnet,
                style: "text-purple-600",
            },
            {
                name: "Kotlin",
                icon: SiKotlin,
                style: "text-orange-600",
            },
        ]
    },
    {
        category: "internship",
        title: "Web Developer",
        organization: "Lakaran Cinta Sistem Empire",
        organizationUrl: "https://www.lakarancintasistem.com/",
        location: "Petaling Jaya, Shah Alam, Malaysia",
        startDate: new Date(2021, 10),
        endDate: new Date(2021, 12),
        isCurrent: false,
        description: `Worked on a web development project for a local business, creating a responsive and user-friendly website using **HTML**, **CSS**, and **JavaScript**. 
        Focused on building intuitive layouts, styling, and interactive features to enhance the user experience.`
    },
    {
        category: "internship",
        title: "Software Developer",
        organization: "Advanced Product Design Sdn. Bhd.",
        organizationUrl: "https://biocryptodisk.com/",
        location: "Skudai, Malaysia",
        startDate: new Date(2024, 2),
        endDate: new Date(2024, 8),
        isCurrent: false,
        description: `Worked on a video conferencing software project, contributing to both web and desktop platforms. 
        Developed and maintained PHP-based web applications, focusing on backend logic and integration. 
        Gained experience in iOS and macOS application development, implementing features and optimizing performance. 
        Collaborated with cross-functional teams to ensure seamless user experience across platforms.`,
        learnedSkills: [
            {
                name: "Swift",
                icon: SiSwift,
                style: "text-orange-500",
            },
        ]
    },
    {
        category: "job",
        title: "Full-Stack Web Developer",
        organization: "Morning Geek",
        startDate: new Date(2024, 9),
        endDate: new Date(),
        isCurrent: true,
        description: `Responsible for end-to-end development across both frontend and backend systems, 
        including system architecture design and technical decision-making, while leveraging modern frameworks and tools 
        to build scalable and efficient web applications.`,
        learnedSkills: [
            {
                name: "React",
                icon: SiReact,
                style: "text-cyan-400",
            },
            {
                name: "Node.js",
                icon: SiNodedotjs,
                style: "text-green-500",
            },
            {
                name: "Next.js",
                icon: SiNextdotjs,
                style: "text-black-500",
            },
            {
                name: "PostgreSQL",
                icon: SiPostgresql,
                style: "text-blue-600",
            },
            {
                name: "TypeScript",
                icon: SiTypescript,
                style: "text-blue-500",
            },
            {
                name: "Tailwind CSS",
                icon: SiTailwindcss,
                style: "text-cyan-400",
            },
        ]
    }
]