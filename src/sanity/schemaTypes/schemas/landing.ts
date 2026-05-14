import { DashboardIcon } from "@sanity/icons";
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
    ],
    preview: {
        select: {
            title: "hero.tagline",
            subtitle: "hero.tagline",
        },
    },
};
