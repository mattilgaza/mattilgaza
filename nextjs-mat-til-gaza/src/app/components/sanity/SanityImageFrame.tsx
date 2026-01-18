import type { SanityGallery } from "@/app/types/sanity/gallery";
import SanityImage from "./SanityImage";

interface Props {
    gallery?: SanityGallery | SanityGallery[number];
    className?: string;
}

export default function SanityImageFrame({ gallery, className = "" }: Props) {
    const images = Array.isArray(gallery)
        ? gallery
        : gallery
            ? [gallery]
            : [];

    if (images.length === 0) return null;

    return (
        <>
            {images.map((img, i) => (
                <div
                    key={img._key ?? i}
                    className={`relative w-full h-full ${className}`}
                >
                    <SanityImage SanityImage={img} />
                </div>
            ))}
        </>
    );
}
