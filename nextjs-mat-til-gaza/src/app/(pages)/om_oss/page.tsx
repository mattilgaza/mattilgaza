import { client } from "@/app/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import { OM_OSS_QUERY } from "@/app/types/sanity/groq_queries";
import SanityImageFrame from "@/app/components/sanity/SanityImageFrame";

export default async function OmOssPage() {

    const om_oss = await client.fetch(OM_OSS_QUERY);

    return (
        <main className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto px-4 py-16">

            <section className="">

                <SanityImageFrame
                    gallery={om_oss.gallery}
                    width={300}
                    height={400}
                />

            </section>

            <section className="">

                <div className="">
                    <h2 className="text-3xl font-size-xl mb-4">{om_oss.title}</h2>
                    <div className="mb-4 "> <PortableText value={om_oss.body.slice(0, 1)} /> </div>
                    <div className="mb-4 "> <PortableText value={om_oss.body.slice(1, 2)} /> </div>
                    <div className="mb-4 "> <PortableText value={om_oss.body.slice(2, 3)} /> </div>
                    <div className="mb-4 "> <PortableText value={om_oss.body.slice(3, 4)} /> </div>
                    <div className="mb-4 "> <PortableText value={om_oss.body.slice(4, 5)} /> </div>
                    <div className="mb-4 "> <PortableText value={om_oss.body.slice(5, 6)} /> </div>
                </div>

            </section>

        </main>
    );
}
