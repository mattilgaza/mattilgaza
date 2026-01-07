import { client } from "@/app/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import { SPLEIS_INITIATIV_QUERY } from "@/app/types/sanity/groq_queries";

const spleis_initiativ = await client.fetch(SPLEIS_INITIATIV_QUERY);

{/* Spleis Initiativ */ }

export default async function Page() {
    return (
        <main className="flex flex-col gap-6 max-w-7xl justify-center mx-auto px-4 py-6">
            <section className="p-6 bg-cotton rounded-lg shadow-sm border-2 text-justify">

                <div className="text-2xl font-bold mb-4">{spleis_initiativ.title}</div>
                <div className="text-1xl font-bold mb-4">{spleis_initiativ.subtitle}</div>
                <div className="mb-4"> < PortableText value={spleis_initiativ.body.slice(0, 1)} /> </div>
                <div className="mb-4"> < PortableText value={spleis_initiativ.body.slice(1, 2)} /> </div>

            </section>
        </main>
    );
}
