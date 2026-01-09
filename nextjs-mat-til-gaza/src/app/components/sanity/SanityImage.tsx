"use client";

import Image from "next/image";
import { useMemo } from "react";
import type { SanityImageType } from "@/app/types/sanity/gallery";
import { urlFor } from "@/app/lib/sanity/urlFor";

interface Props {
    SanityImage: SanityImageType;
    className?: string;
}

export default function SanityImage({
    SanityImage,
    className
}: Props) {

    const imageRef = SanityImage?.asset?._ref;

    const imageUrl = useMemo(() => {
        if (!imageRef) return null;
        return urlFor(SanityImage).auto("format").url();
    }, [imageRef]);

    if (!imageUrl) return null;

    return (
        <Image
            src={imageUrl}
            alt={SanityImage.alt ?? "Gallery Image"}
            fill={true}
            className={`object-fit transition-transform duration-300 hover:scale-105 hover:z-50 ${className}`}
        />
    );
}
