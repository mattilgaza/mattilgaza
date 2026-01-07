import { client } from "@/app/lib/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
    projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;

const OM_OSS_QUERY = `*[_type == "om_oss" && slug.current == "om-oss"][0]{title, body, image}`;

export default async function OmOssPage() {
    const om_oss = await client.fetch(OM_OSS_QUERY);

    if (!om_oss) return <p>Ingen innhold tilgjengelig.</p>;

    return (
        <main className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto px-4 py-16">

            <section className="order-2 md:order-1  flex flex-col md:flex-row items-start gap-6 rounded-lg p-6">

                {om_oss.image && (
                    <div className="md:h-5/5 w-full flex justify-center">
                        <img
                            src={urlFor(om_oss.image)?.url()}
                            alt={om_oss.title}
                            className="rounded-lg shadow w-[80%] h-auto border-gray-400 border-2"
                        />
                    </div>
                )}

            </section>

            <section className="order-1 md:order-2 w-full md:w-3/5 flex flex-col justify-center mt-6 md:mt-0 bg-cotton rounded-lg shadow-sm p-6">

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
