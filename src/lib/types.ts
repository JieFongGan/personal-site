export type IconItem = {
    name: string;
    icon: string;
    style: string;
    link?: string;
};

export type AboutType = {
    name: string;
    title: string;
    address: string;
    social: IconItem[];
    summary: string;
    bio: string;
};

export type CareerType = {
    category: "education" | "internship" | "job";
    title: string;
    organization: string;
    organizationUrl?: string;
    location?: string;
    startDate: Date;
    endDate?: Date;
    isCurrent: boolean;
    description: string;
    learnedSkills?: IconItem[];
};