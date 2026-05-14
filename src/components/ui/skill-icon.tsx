import Image from "next/image";

export default function SkillIcon({ url, alt }: { url: string; alt: string }) {
    const isSvg = url.endsWith(".svg") || url.includes(".svg?");

    if (isSvg) {
        return (
            <span
                className="w-5 h-5 text-primary block"
                style={{
                    backgroundColor: "currentColor",
                    maskImage: `url(${url})`,
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskImage: `url(${url})`,
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                }}
                aria-label={alt}
            />
        );
    }

    return (
        <Image
            src={url}
            alt={alt}
            width={20}
            height={20}
            className="w-5 h-5 object-contain"
        />
    );
}
