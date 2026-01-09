import { client } from "@/app/lib/sanity/client";
import Link from "next/link";
import { NOV_2024_QUERY } from "@/app/types/sanity/groq_queries";
import SanityImageFrame from "@/app/components/sanity/SanityImageFrame";

export default async function Page() {

    // Fetch data for each entry
    const nov_2024 = await client.fetch(NOV_2024_QUERY);

    return (
        <main className="flex flex-col gap-6 max-w-7xl justify-center mx-auto px-4 py-6">


            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">

                <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center p-8 text-justify">

                    <div className="text-3xl font-size-xl mb-4"> {nov_2024.title} </div>

                </div>

                <video className="w-full rounded-lg shadow-sm mt-4 mb-4 border-4 border-white" autoPlay controls muted loop>
                    <source src="/videos/sending2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </section>

            <section>

                <div className="max-w-7xl mx-auto">
                    <SanityImageFrame
                        gallery={nov_2024.gallery.slice(0, 4)}
                        width={400}
                        height={300}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
                    />
                </div>

                <div className="max-w-7xl mx-auto">
                    <SanityImageFrame
                        gallery={nov_2024.gallery.slice(4, 8)}
                        width={300}
                        height={400}
                        className="grid grid-cols-1 md:grid-cols-4 gap-4"
                    />
                </div>

            </section>

            <section className="mb-12">

                <button className="mt-4 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
                    <Link href="/aktivitet">Gå tilbake til alle aktiviteter</Link>
                </button>

            </section>

        </main>

    );
}
