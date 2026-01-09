import { client } from "@/app/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { OCT_2024_QUERY } from "@/app/types/sanity/groq_queries";
import SanityImageFrame from "@/app/components/sanity/SanityImageFrame";



export default async function Page() {

    // Fetch data for each entry
    const oct_2024 = await client.fetch(OCT_2024_QUERY);

    return (
        <main className="flex flex-col gap-6 max-w-7xl justify-center mx-auto px-4 py-6">


            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">

                <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center p-8 text-justify">

                    <div className="text-3xl font-size-xl mb-4"> {oct_2024.title} </div>
                    <div className="mb-4 font-semibold"> <PortableText value={oct_2024.body.slice(0, 1)} /> </div>

                </div>

                <video className="w-full rounded-lg shadow-sm mt-4 mb-4 border-4 border-white" autoPlay controls muted loop>
                    <source src="/videos/sending1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </section>

            <section>

                <SanityImageFrame
                    gallery={oct_2024.gallery.slice(0, 10)}
                    width={300}
                    height={400}
                    className="grid grid-cols-4 gap-4"
                />

            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 bg-gray-200 p-4">

                <div className="col-span-2 md:col-span-1 justify-center items-center px-8 text-justify mt-6">

                    <div className="mb-4 font-semibold"> <PortableText value={oct_2024.body.slice(1, 2)} /> </div>
                    <div className="mb-4"> <PortableText value={oct_2024.body.slice(2, 3)} /> </div>
                    <div className="mb-4"> <PortableText value={oct_2024.body.slice(3, 4)} /> </div>
                    <div className="mb-4"> <PortableText value={oct_2024.body.slice(4, 5)} /> </div>
                    <div className="mb-4"> <PortableText value={oct_2024.body.slice(5, 6)} /> </div>
                    <div className="mb-4"> <PortableText value={oct_2024.body.slice(6, 7)} /> </div>

                </div>

                <SanityImageFrame
                    gallery={oct_2024.gallery.slice(10)}
                    width={400}
                    height={500}
                    className="justify-self-center"
                />

                {/* Video 1 */}
                <div className="rounded-lg shadow-sm border-4 border-white aspect-video overflow-hidden">
                    <video
                        className="object-cover w-full h-full object-[80%_20%]"
                        autoPlay
                        controls
                        muted
                        loop
                    >
                        <source src="/videos/Hjemmet_ødelagt.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Video 2 */}
                <div className="rounded-lg shadow-sm border-4 border-white aspect-video overflow-hidden">
                    <video
                        className="object-cover w-full h-full object-[70%_30%]"
                        autoPlay
                        controls
                        muted
                        loop
                    >
                        <source src="/videos/Hjemmet_ødelagt2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </section>

            <section>

                <button className="mt-4 mb-12 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
                    <Link href="/aktivitet">Gå tilbake til alle aktiviteter</Link>
                </button>

            </section>

        </main>

    );
}
