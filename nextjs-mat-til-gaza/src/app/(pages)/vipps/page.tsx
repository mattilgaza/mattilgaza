import { client } from "@/app/lib/sanity/client";
import { PortableText } from "@portabletext/react";


const vipps_QUERY = `*[_type == "vipps" && slug.current == "vipps"][0]{title, subtitle, body}`;

export default async function OmOssPage() {
    const vipps = await client.fetch(vipps_QUERY);

    if (!vipps) return <p>Ingen innhold tilgjengelig.</p>;

    return (
        <main className="flex flex-col md:flex-row gap-6 mx-auto px-16 py-16 bg-slate-200 dark:text-slate-900">


            <section className="bg-vipps w-full flex flex-col justify-center mt-6 bg-cotton rounded-lg shadow-sm p-6 text-center">

                <div className="bg-vipps rounded-lg py-12">

                    <div className="text-2xl font-size-xl">{vipps.title}</div>
                    <div className="text-3xl font-size-xl font-bold text-cotton m-4">{vipps.subtitle}</div>

                </div>

            </section>

            <section className="w-full bg-cotton rounded-lg shadow-sm p-6 text-center mt-6">
                <div className="text-3xl font-size-xl mb-8"><PortableText value={vipps.body.slice(0, 1)} /></div>

                <div className="grid grid-cols-2 gap-6">

                    {/* LEFT COLUMN */}
                    <div className="text-right">
                        <div className="text-xl font-size-xl mb-4"><PortableText value={vipps.body.slice(1, 2)} /></div>
                        <div className="text-xl font-size-xl mb-4"><PortableText value={vipps.body.slice(3, 4)} /></div>
                        <div className="text-xl font-size-xl mb-4"><PortableText value={vipps.body.slice(5, 6)} /></div>
                        <div className="text-xl font-size-xl mb-4"><PortableText value={vipps.body.slice(7, 8)} /></div>
                        <div className="text-xl font-size-xl mb-4"><PortableText value={vipps.body.slice(9, 10)} /></div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="text-left font-bold">
                        <div className="text-xl font-size-xl mb-4 "><PortableText value={vipps.body.slice(2, 3)} /></div>
                        <div className="text-xl font-size-xl mb-4"><PortableText value={vipps.body.slice(4, 5)} /></div>
                        <div className="text-xl font-size-xl mb-4"><PortableText value={vipps.body.slice(6, 7)} /></div>
                        <div className="text-xl font-size-xl mb-4"><PortableText value={vipps.body.slice(8, 9)} /></div>
                        <div className="text-xl font-size-xl mb-4"><PortableText value={vipps.body.slice(10, 11)} /></div>
                    </div>

                </div>

            </section>

        </main>

    );
}
