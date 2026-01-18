// app/types/sanity/gallery.ts

import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type SanityImageType = SanityImageSource & {
  _key?: string;
  alt?: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export type SanityGallery = SanityImageType[];
