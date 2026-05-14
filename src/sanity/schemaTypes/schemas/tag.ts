import { TagIcon } from "@sanity/icons";
import { Rule } from "sanity";

export default {
    name: "tags",
    title: "Tags",
    type: "document",
    icon: TagIcon,
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule: Rule) =>
                rule
                    .required()
                    .min(2)
                    .max(30)
                    .warning(
                        "Tag title must be between 2 and 30 characters long.",
                    ),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 50,
            },
            validation: (rule: Rule) => rule.required(),
        },
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "slug.current",
        },
    },
};
