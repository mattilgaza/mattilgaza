import { client } from "@/app/lib/sanity/client";
import { PortableText } from "@portabletext/react";


const OM_FORENINGEN_QUERY = `*[_type == "om_foreningen" && slug.current == "om-foreningen"][0]{title, body}`;

export default async function OmForeningenPage() {
    const om_foreningen = await client.fetch(OM_FORENINGEN_QUERY);

    if (!om_foreningen) return <p>Ingen innhold tilgjengelig.</p>;

    return (
        <main className="flex flex-col md:flex-row gap-6 max-w-7xl justify-around mx-auto px-4 py-6">


            <section className="flex flex-col justify-center mt-6 bg-cotton rounded-lg shadow-sm p-6 text-center">

                <div className="text-left">
                    <div className="text-3xl font-size-xl mb-4 font-bold">{om_foreningen.title}</div>

                    <div className="text-2xl font-size-xl mb-4 bg-background rounded-lg p-2"><PortableText value={om_foreningen.body.slice(0, 1)} /></div>
                    <div className="text-2xl font-size-xl mb-4 bg-background rounded-lg p-2"><PortableText value={om_foreningen.body.slice(1, 2)} /></div>
                    <div className="text-2xl font-size-xl mb-4 bg-background rounded-lg p-2"><PortableText value={om_foreningen.body.slice(2, 3)} /></div>
                    <div className="text-2xl font-size-xl mb-8 bg-background rounded-lg p-2"><PortableText value={om_foreningen.body.slice(3, 4)} /></div>

                </div>

            </section>

            <section className="w-4/5 md:w-1/3 flex flex-col justify-center text-left mt-4 md:mt-60 ml-8">

                <div className="">

                    <button>
                        <a href="/om_oss" className="text-2xl font-size-xl font-bold text-cotton mb-6 bg-gray-800 border-2 border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-700">Les mer om oss</a>
                    </button>

                    <div className="text-2xl font-size-xl my-6"><PortableText value={om_foreningen.body.slice(4, 5)} /></div>
                    <div className="text-2xl font-size-xl mb-4"><PortableText value={om_foreningen.body.slice(5, 6)} /></div>

                </div>

            </section>

        </main>

    );
}
