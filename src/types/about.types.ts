import type { IconItem } from '@/types/career.types';

export type AboutType = {
    name: string;
    title: string;
    avatarUrl: string;
    address: string;
    social: IconItem[];
    summary: string; // short version
    bio: string; // long version
};