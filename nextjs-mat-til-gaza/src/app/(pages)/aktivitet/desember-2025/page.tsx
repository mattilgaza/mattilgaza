import { client } from "@/app/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import { STATUS_UPDATE_271225_QUERY } from "@/app/types/sanity/groq_queries";

const status_update_271225 = await client.fetch(STATUS_UPDATE_271225_QUERY);

{/* Status Update - 27-12-2025 */ }
export default async function Page() {

    return (
        <main className="flex flex-col gap-6 max-w-7xl justify-center mx-auto px-4 py-6">
            <section className="p-6 bg-cotton rounded-lg shadow-sm border-2 text-justify">

                <h3 className="text-2xl font-bold mb-4">{status_update_271225.title}</h3>
                <div className="mb-4"> < PortableText value={status_update_271225.body.slice(0, 1)} /> </div>
                <div className="mb-4"> < PortableText value={status_update_271225.body.slice(1, 2)} /> </div>
                <div className="mb-4"> < PortableText value={status_update_271225.body.slice(2, 3)} /> </div>
                <div className="mb-4"> < PortableText value={status_update_271225.body.slice(3, 4)} /> </div>
                <div className="mb-4 font-bold"> < PortableText value={status_update_271225.body.slice(4, 5)} /> </div>
                <div className="mb-4"> < PortableText value={status_update_271225.body.slice(5, 6)} /> </div>

            </section>
        </main>
    );
}