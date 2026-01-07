import type { GalleryImages } from "@/app/types/sanity/gallery";
import SanityImage from "@/app/components/sanity/Image";

interface Props {
    gallery: GalleryImages;
    className?: string;
    frameClassName?: string;
}

export default function ImageFrame({
    gallery,
    className = "",
    frameClassName = "aspect-square",
}: Props) {
    return (
        <div className={className}>
            {gallery.map((img, i) => (
                <div
                    key={img._key || i}
                    className={`
                        relative
                        rounded-lg
                        border-4
                        border-white
                        shadow-sm
                        ${frameClassName}
                    `}
                >
                    <SanityImage
                        image={img}
                        fill
                        className="object-cover"
                    />
                </div>
            ))}
        </div>
    );
}


// Usage example:

// Override when you want a different aspect ratio
// Example: 4/5 aspect ratio
//
// <ImageFrame
//     gallery={nov_2024.gallery}
//     frameClassName="aspect-[4/5] max-h-96"
// />