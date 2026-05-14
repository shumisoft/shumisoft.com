import { PortableTextBlock } from "sanity";
import { Image } from "./team";

export type Hero = {
    tagline: string;
    excerpt: string;
};

export type Skill = {
    title: string;
    description: string;
    icon?: Image;
};

export type About = {
    title: string;
    description: PortableTextBlock[];
    skills: Skill[];
};

export type Landing = {
    hero: Hero;
    about: About;
};
