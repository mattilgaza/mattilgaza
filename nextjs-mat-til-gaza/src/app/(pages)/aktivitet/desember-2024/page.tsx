import { client } from "@/app/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { DES_2024_QUERY } from "@/app/types/sanity/groq_queries";

export default async function Page() {

    // Fetch data for each entry
    const des_2024 = await client.fetch(DES_2024_QUERY);

    return (
        <main className="flex flex-col gap-0 max-w-7xl justify-center mx-auto px-4 py-6">


            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                <div className="pr-24 text-justify mt-4">
                    <div className="text-3xl font-size-xl mb-4"> {des_2024.title} </div>
                    <div className="mb-4 font-semibold"> <PortableText value={des_2024.body.slice(0, 1)} /> </div>
                    <div className="mb-4 font-semibold"> <PortableText value={des_2024.body.slice(1, 2)} /> </div>
                    <div className="mb-4 font-semibold"> <PortableText value={des_2024.body.slice(2, 3)} /> </div>
                    <div className="mb-4 font-semibold"> <PortableText value={des_2024.body.slice(3, 4)} /> </div>
                </div>

                <div className="flex mt-4">

                    <video
                        className="object-cover aspect-[9/10] rounded-lg shadow-sm border-4 border-white mb-4"
                        autoPlay
                        controls
                        muted loop>
                        <source src="/videos/Shaimaas_ide.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                </div>

            </section>

            <section className="mb-12">

                <button className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
                    <Link href="/aktivitet">Gå tilbake til alle aktiviteter</Link>
                </button>

            </section>

        </main>

    );
}
