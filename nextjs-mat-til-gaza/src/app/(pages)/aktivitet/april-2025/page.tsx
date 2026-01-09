import { client } from "@/app/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import SanityImageFrame from "@/app/components/sanity/SanityImageFrame";
import { APR_2025_QUERY } from "@/app/types/sanity/groq_queries";

export default async function Page() {

    // Fetch data
    const apr_2025 = await client.fetch(APR_2025_QUERY);

    return (
        <main className="flex flex-col gap-6 max-w-7xl justify-center mx-auto px-4 py-6">


            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">

                <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center p-8 text-justify">

                    <div className="text-3xl font-size-xl mb-4"> {apr_2025.title} </div>
                    <div className="mb-4 font-semibold"> <PortableText value={apr_2025.body.slice(0, 1)} /> </div>

                </div>

                <video className="w-full rounded-lg shadow-sm mt-4 border-4 border-white" autoPlay controls muted loop>
                    <source src="/videos/sending_4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </section>

            <section className="grid gap-6">

                {/* Gallery*/}
                <SanityImageFrame
                    gallery={apr_2025.gallery.slice(0, 4)}
                    width={600}
                    height={300}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto"
                />

                <SanityImageFrame
                    gallery={apr_2025.gallery.slice(4, 6)}
                    width={600}
                    height={400}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto"
                />

            </section>

            <section className="flex flex-col gap-6 max-w-3xl justify-center mx-auto px-4 mb-12">

                <video className="w-full rounded-lg shadow-sm mt-4 mb-4 border-4 border-white" autoPlay controls muted loop>
                    <source src="/videos/sending_4_2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </section>

        </main>

    );
}
