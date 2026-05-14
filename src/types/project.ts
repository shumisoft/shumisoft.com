import { Tag } from "./tag";

export type Project = {
    _id: string;
    title: string;
    description: string;
    tags: Tag[];
    // stars: number;
    // forks: number;
    url: string;
};
