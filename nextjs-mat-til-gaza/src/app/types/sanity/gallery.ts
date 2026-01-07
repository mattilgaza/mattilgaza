// app/types/sanity/gallery.ts

import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type GalleryImage = SanityImageSource & {
  _key: string;
  alt?: string;
};

export type GalleryImages = GalleryImage[];
