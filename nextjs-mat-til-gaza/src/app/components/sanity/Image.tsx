"use client";

import Image from "next/image";
import { useMemo } from "react";
import type { GalleryImage } from "@/app/types/sanity/gallery";
import { urlFor } from "@/app/lib/sanity/urlFor";

interface Props {
    image: GalleryImage;
    fill?: boolean;
    className?: string;
    priority?: boolean;
}

export default function SanityImage({
    image,
    fill = false,
    className = "",
    priority = false,
}: Props) {
    const imageUrl = useMemo(
        () => urlFor(image)?.auto("format").url(),
        [image]
    );

    if (!imageUrl) return null;

    return (
        <Image
            src={imageUrl}
            alt={image.alt ?? "Gallery Image"}
            priority={priority}
            fill={fill === true} // fills the parent container if true
            className={`object-cover transition-transform duration-300 hover:scale-105 hover:z-50 ${className}`}
            sizes="(max-width: 768px) 50vw, 33vw"
        />
    );
}
