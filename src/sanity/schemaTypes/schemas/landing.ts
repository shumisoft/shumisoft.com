import { DashboardIcon } from "@sanity/icons";
import { title } from "process";
import { Rule } from "sanity";

export default {
    singleton: true,
    name: "landing",
    title: "Landing",
    type: "document",
    description: "A short description",
    icon: DashboardIcon,
    fields: [
        {
            name: "hero",
            title: "Hero Section",
            description: "the hero section of the landing page",
            type: "object",
            fields: [
                {
                    name: "tagline",
                    title: "Tagline",
                    type: "string",
                    description: "a short tagline",
                },
                {
                    name: "excerpt",
                    title: "Excerpt",
                    type: "text",
                    description: "a short description",
                },
            ],
        },
        {
            name: "about",
            title: "About Section",
            description: "the about section of the landing page",
            type: "object",
            fields: [
                {
                    name: "title",
                    title: "Section Title",
                    type: "string",
                    description: "a short title for the about section",
                },
                {
                    name: "description",
                    title: "Section Description",
                    type: "array",
                    description: "a short description",
                    of: [{ type: "block" }],
                },
                {
                    name: "skills",
                    title: "Skills",
                    description:
                        "a list of skills to display in the about section",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                {
                                    name: "title",
                                    title: "Skill Title",
                                    type: "string",
                                    description: "a short title for the skill",
                                    validation: (Rule: Rule) => Rule.required(),
                                },
                                {
                                    name: "description",
                                    title: "Skill Description",
                                    type: "text",
                                    description:
                                        "a short description for the skill",
                                    validation: (Rule: Rule) => Rule.required(),
                                },
                                {
                                    name: "icon",
                                    title: "Skill Icon",
                                    type: "image",
                                    description:
                                        "an icon representing the skill (optional)",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: "hero.tagline",
            subtitle: "hero.tagline",
        },
    },
};
