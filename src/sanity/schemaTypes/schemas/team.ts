import { UsersIcon } from "@sanity/icons";
import { Rule } from "sanity";

export default {
    name: "team",
    title: "Team",
    type: "document",
    icon: UsersIcon,
    description: "This member will be visible under 'The Team' section",
    fields: [
        {
            name: "name",
            title: "Member Name",
            type: "string",
            description: "Full name of the member.",
            validation: (rule: Rule) =>
                rule
                    .required()
                    .min(3)
                    .max(45)
                    .warning("Name must be between 3 and 45 characters long."),
        },
        {
            name: "role",
            title: "Role",
            type: "string",
            description: "Member's job title or role.",
            validation: (rule: Rule) => rule.required(),
        },
        {
            name: "bio",
            title: "Bio",
            type: "text",
            description: "A short introduction about the member.",
        },
        {
            name: "avatar",
            title: "Avatar",
            type: "image",
            description: "A profile photo of the member.",
            fields: [
                {
                    name: "alt",
                    title: "Alternative Text",
                    type: "string",
                    description: "Describe the image for accessibility.",
                },
            ],
            options: {
                hotspot: true,
            },
        },
        {
            name: "links",
            title: "Links",
            type: "array",
            description: "Member’s professional links.",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "type",
                            title: "Platform",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Portfolio", value: "portfolio" },
                                    { title: "GitHub", value: "github" },
                                    { title: "LinkedIn", value: "linkedin" },
                                ],
                            },
                            validation: (Rule: Rule) => Rule.required(),
                        },
                        {
                            name: "url",
                            title: "URL",
                            type: "url",
                            validation: (Rule: Rule) =>
                                Rule.required().uri({
                                    scheme: ["http", "https"],
                                }),
                        },
                    ],
                },
            ],
        },
        {
            name: "weight",
            title: "Weight",
            description: "Lower values appear first in the list.",
            type: "number",
        },
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "role",
        },
    },
};
