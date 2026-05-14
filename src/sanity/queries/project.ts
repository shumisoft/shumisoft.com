import { groq } from "next-sanity";
import { client } from "../lib/client";
import { Project } from "@/types/project";

export const getProjects = async (): Promise<Project[]> =>
    client.fetch(groq`
        *[_type == "projects"] | order(weight asc) {
            _id,
            title,
            description,
            url,
            "tags": tags[] -> {
                _id,
                title
            }
        }
    `);
