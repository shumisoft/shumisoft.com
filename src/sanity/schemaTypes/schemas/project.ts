import { ProjectsIcon } from "@sanity/icons";
import { Rule } from "sanity";

export default {
    name: "projects",
    Title: "Projects",
    type: "document",
    icon: ProjectsIcon,
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            description: "The title of the project",
            validation: (rule: Rule) => rule.required().min(3),
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            description: "A short description of the project",
        },
        {
            name: "url",
            title: "URL",
            description: "URL to the source code (e.g., GitHub, GitLab, etc.)",
            type: "url",
            validation: (rule: Rule) => rule.uri({ scheme: ["http", "https"] }),
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "tags" }],
                },
            ],
            validation: (Rule: Rule) => Rule.unique(),
            description: "Select tags for this project.",
        },
        {
            name: "weight",
            title: "Weight",
            description: "Order by weight (ascending)",
            type: "number",
        },
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "weight",
        },
    },
};
