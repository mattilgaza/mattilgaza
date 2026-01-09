import type { SanityImageOrGallery } from "@/app/types/sanity/gallery";
import SanityImage from "@/app/components/sanity/SanityImage";

interface Props {
    gallery?: SanityImageOrGallery;
    width?: number;
    height?: number;
    className?: string;
}

export default function SanityImageFrame({
    gallery,
    width = 300,
    height = 300,
    className = "",
}: Props) {
    const images = Array.isArray(gallery) ? gallery : gallery ? [gallery] : [];

    return (
        <div className={`flex ${className}`}>
            {images.map((img, i) => (
                <div
                    key={img._key ?? i}
                    className="relative rounded-lg border-4 border-white shadow-sm"
                    style={{ width, height }}
                >
                    <SanityImage SanityImage={img} />
                </div>
            ))}
        </div>
    );
}

