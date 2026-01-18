import { SanityGallery } from "@/app/types/sanity/gallery";

export interface ActivityDetail {
    _id: string;
    _type: string;
    title: string;
    subtitle?: string;
    body?: any[];
    gallery?: SanityGallery;
    slug: {
        _type: "slug";
        current: string;
    };
}
