export type Image = {
    url?: string;
    alt?: string;
};

export type SocialPlatform = "portfolio" | "github" | "linkedin";

export type MemberLink = {
    type: SocialPlatform;
    url: string;
};

export type Member = {
    _id: string;
    name: string;
    role: string;
    bio: string;
    avatar: Image;
    links?: MemberLink[];
};
