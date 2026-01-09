import { client } from "@/app/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import SanityImageFrame from "@/app/components/sanity/SanityImageFrame";
import type { SanityImageOrGallery, SanityImageType } from "@/app/types/sanity/gallery";
import Link from "next/link";
import { JAN_2025_QUERY } from "@/app/types/sanity/groq_queries";

export default async function Page() {

    // Fetch data
    const jan_2025 = await client.fetch(JAN_2025_QUERY);

    // Set image types for gallery
    const gallery: SanityImageOrGallery = jan_2025.gallery as SanityImageType[];

    return (
        <main className="flex flex-col gap-0 max-w-7xl justify-center mx-auto px-4 py-6">


            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-4">

                {/* Title + Body */}
                <div className="">
                    <div className="text-3xl font-bold mb-6">{jan_2025.title}</div>

                    <div className="text-2xl font-semibold pr-12 text-justify">
                        <PortableText value={jan_2025.body} />
                    </div>
                </div>

                {/* Video*/}
                <div className="flex justify-center items-center">
                    <video
                        controls
                        muted
                        loop
                        autoPlay
                        className="w-full max-h-72 object-[90%_10%] object-cover rounded-lg shadow-sm border-4 border-white"
                    >
                        <source src="/videos/sending3.mp4" type="video/mp4" />
                    </video>
                </div>

            </section>

            {/* Gallery*/}
            <SanityImageFrame
                gallery={jan_2025.gallery.slice(0, 10)}
                width={300}
                height={400}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
            />

            <section className="mb-12">

                <button className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 mt-4">
                    <Link href="/aktivitet">Gå tilbake til alle aktiviteter</Link>
                </button>

            </section>

        </main>

    );
}
