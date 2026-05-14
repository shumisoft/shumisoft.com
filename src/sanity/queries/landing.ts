import { groq } from "next-sanity";
import { client } from "../lib/client";
import { Landing } from "@/types/landing";

export const getLanding = async (): Promise<Landing> =>
    await client.fetch(groq`
        *[_type == "landing" && !(_id in path('drafts.**'))][0] {
            hero,
            about {
                title,
                description,
                skills[] {
                    title,
                    description,
                    "icon": {
                        "url": icon.asset -> url,
                    }
                }
            }
        }`);
