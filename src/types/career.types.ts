import type { IconType } from 'react-icons';

export type IconItem = {
    name: string;
    icon: IconType;
    style: string;
    link?: string;
};

export type CareerType = {
    category: "education" | "internship" | "job",
    title: string,
    organization: string,
    organizationUrl?: string,
    location?: string,
    startDate: Date,
    endDate: Date,
    isCurrent: boolean,
    description: string,
    learnedSkills?: IconItem[];
}