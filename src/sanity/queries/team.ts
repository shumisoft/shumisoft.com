import { groq } from "next-sanity";
import { client } from "../lib/client";
import { Member } from "@/types/team";

export const getTeam = async (): Promise<Member[]> =>
    await client.fetch(groq`
        *[_type == "team"] | order(weight asc) {
            _id,
            "avatar": {
                "url": avatar.asset -> url,
                "alt": avatar.alt
            },
            name,
            role,
            bio,
            links[] {
                type,
                url
            }
        }
    `);
