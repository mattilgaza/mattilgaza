"use client";

import SanityImage from "@/app/components/sanity/SanityImage";
import type { SanityImageType } from "@/app/types/sanity/gallery";
import Link from "next/link";

interface Props {
    data: {
        title: string;
        gallery: SanityImageType[];
        subtitle: string
    };
    index1?: number;
    index2?: number;
    index3?: number;
}

export default function AktivitetCard({
    data,
    index1 = -1,
    index2 = -1,
    index3 = -1,
}: Props) {

    const img1 = data.gallery?.[index1 ?? -1];
    const img2 = data.gallery?.[index2 ?? -1];
    const img3 = data.gallery?.[index3 ?? -1];

    const hasImages = img1 && img2 && img3;

    if (!hasImages) {

        return (
            <Link href={`/aktivitet/${data.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="flex flex-col justify-center mt-4 bg-cotton rounded-lg shadow-sm p-4 text-center h-full">

                    <div className="text-2xl font-semibold mb-8 text-gray-800">{data.title}</div>
                    <div className="text-2xl font-semibold mb-8 text-gray-800">{data.subtitle}</div>

                    <div className="text-sm text-gray-600 mt-6">
                        Klikk for å se mer
                    </div>

                </div>
            </Link>
        );
    }


    return (
        <Link href={`/aktivitet/${data.title.toLowerCase().replace(/\s+/g, "-")}`}>
            <div className="flex flex-col justify-center mt-4 bg-cotton rounded-lg shadow-sm p-4 text-center h-full">

                {/* Title */}
                <div className="text-2xl font-semibold mb-8 text-gray-800">
                    {data.title}
                </div>

                {/* Image Cluster Container */}
                <div className="flex justify-center items-center isolate gap-4">

                    {/* Left Image */}
                    <div className="relative w-24 h-32 z-10 translate-y-4 translate-x-6 -rotate-6 transition-transform duration-300 hover:scale-110 hover:z-50 overflow-hidden rounded-lg shadow-md border-4 border-white">
                        <SanityImage
                            SanityImage={data.gallery[index1]}
                        />
                    </div>

                    {/* Center Image */}
                    <div className="relative w-28 h-36 z-20 -translate-y-2 transition-transform duration-300 hover:scale-110 hover:z-50 overflow-hidden rounded-lg shadow-xl border-4 border-white">
                        <SanityImage
                            SanityImage={data.gallery[index2]}

                        />
                    </div>

                    {/* Right Image */}
                    <div className="relative w-24 h-32 z-10 translate-y-4 -translate-x-6 rotate-6 transition-transform duration-300 hover:scale-110 hover:z-50 overflow-hidden rounded-lg shadow-md border-4 border-white">
                        <SanityImage
                            SanityImage={data.gallery[index3]}
                        />
                    </div>

                </div>

                <div className="text-sm text-gray-600 mt-6">
                    Klikk for å se mer
                </div>
            </div>

        </Link>
    );
}

