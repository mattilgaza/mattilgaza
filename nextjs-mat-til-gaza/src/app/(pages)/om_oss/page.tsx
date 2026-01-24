import { client } from "@/app/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import { OM_OSS_QUERY, OM_FORENINGEN_QUERY } from "@/app/types/sanity/groq_queries";
import SanityImageFrame from "@/app/components/sanity/SanityImageFrame";

export default async function Page() {

    const om_oss = await client.fetch(OM_OSS_QUERY);
    const om_foreningen = await client.fetch(OM_FORENINGEN_QUERY);

    return (
        <main className="grid grid-cols-1">

            <section className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mt-4 md:mt-12 mx-auto items-center">

                <div className="px-4 lg:px-12">

                    <div className="text-2xl md:text-4xl mb-4">{om_oss.title}</div>
                    {/* <div className="text-justify"> */}

                    <div className="mb-4 "> <PortableText value={om_oss.body.slice(0, 1)} /> </div>
                    <div className="mb-4 "> <PortableText value={om_oss.body.slice(1, 2)} /> </div>
                    <div className="mb-4 "> <PortableText value={om_oss.body.slice(2, 3)} /> </div>
                    <div className="mb-4 "> <PortableText value={om_oss.body.slice(3, 4)} /> </div>
                    <div className="mb-4 "> <PortableText value={om_oss.body.slice(4, 5)} /> </div>
                    <div className="mb-4 "> <PortableText value={om_oss.body.slice(5, 6)} /> </div>

                    {/* </div> */}


                    <div className="my-8">

                        <button>
                            <a
                                href="/aktivitet"
                                className="text-sm md:text-md lg:text-2xl shadow-[10px_10px_15px_rgba(0,0,0,0.35)] font-bold text-cotton mb-6 bg-gray-900 border-2 border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-700">
                                Se hvordan donasjonene hjelper!
                            </a>
                        </button>

                    </div>
                </div>

                <div className="mx-8 md:mx-8 lg:mx-12 xl:mx-16 h-[30rem]">
                    <SanityImageFrame
                        gallery={om_oss.gallery}
                        className="h-full w-full object-cover"
                    />
                </div>

            </section>
            <hr className="mx-12 mt-12" />

            <section className="grid grid-cols-1 rounded-lg p-8 mb-12">

                <div className="mx-auto mb-4">
                    <div className="text-4xl mb-4 font-bold">{om_foreningen.title}</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <div className="border-2 rounded-lg bg-cotton dark:bg-gray-900 text-xl p-4 text-center">
                        <PortableText value={om_foreningen.body.slice(0, 1)} />
                    </div>

                    <div className="border-2 rounded-lg bg-cotton dark:bg-gray-900 text-xl p-4 text-center">
                        <PortableText value={om_foreningen.body.slice(1, 2)} />
                    </div>

                    <div className="border-2 rounded-lg bg-cotton dark:bg-gray-900 text-xl p-4 text-center">
                        <PortableText value={om_foreningen.body.slice(2, 3)} />
                        <PortableText value={om_foreningen.body.slice(3, 4)} />
                    </div>

                </div>

            </section>

        </main>
    );
}
