import { client } from "@/app/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import SanityImageFrame from "@/app/components/sanity/SanityImageFrame";
import { APR_2025_QUERY } from "@/app/types/sanity/groq_queries";
import { SanityImageType } from "@/app/types/sanity/gallery";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";

export default async function Page() {

    // Fetch data
    const apr_2025 = await client.fetch(APR_2025_QUERY);

    return (
        <main>

            <section className="grid grid-cols-1 px-4 md:px-16 py-4 md:py-16">

                <div className="col-span-2">

                    <button className="hover:underline">
                        <Link href="/aktivitet" className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Tilbake
                        </Link>
                    </button>

                    <div className="flex items-center font-bold text-lg tracking-widest uppercase mb-8">
                        <Calendar className="w-4 h-4 mr-2" />
                        {apr_2025.title}
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[40%_60%]">

                    <div>
                        {apr_2025.body && (
                            <div className="text-justify text-xl md:mr-16">
                                <PortableText value={apr_2025.body.slice(0, 1)} />
                            </div>
                        )}
                    </div>

                    <div className="mt-8 md:mt-[-3rem]">
                        <video className="rounded-2xl" autoPlay controls muted loop>
                            <source src="/videos/sending_4.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                </div>

            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-16">

                {apr_2025.gallery.slice(0, 10).map((image: SanityImageType) => (
                    <div
                        key={image._key}
                        className="w-full max-w-md aspect-[4/3] hover:shadow-xl transition-shadow duration-300 mx-auto"
                    >
                        <SanityImageFrame
                            gallery={[image]} // single image per card
                            className="w-full h-full rounded-2xl overflow-hidden"
                        />
                    </div>
                ))}

            </section>

            <section className="grid grid-cols-1 p-4 mx-auto mb-12">

                <div className="max-w-3xl md:px-16 mx-auto">

                    <video className="w-full rounded-lg" autoPlay controls muted loop>
                        <source src="/videos/sending_4_2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                </div>

                <div className="grid col-span-2 justify-center items-center my-8">

                    <div className="text-center p-8 rounded-lg bg-cotton dark:bg-gray-900 shadow-md">

                        <div className="font-bold text-xl mb-2">
                            Vil du bidra til neste leveranse?
                        </div>
                        <div className=" text-md mb-6">
                            Ditt bidrag gjør det mulig for oss å fortsette dette arbeidet.
                        </div>
                        <a
                            href="/vipps"
                            className="block border-2 border-[red] py-3 bg-vipps text-white shadow-[10px_10px_15px_rgba(0,0,0,0.35)] rounded-xl font-bold text-center transition-all duration-150 ease-out active:scale-95 active:shadow-inner hover:bg-white hover:text-vipps"
                        >
                            Støtt med Vipps
                        </a>

                    </div>

                </div>

                <div className="grid col-span-2 justify-center items-center mb-12">

                    <button className="flex items-center gap-2 mb-8 hover:underline">
                        <Link href="/aktivitet"><ArrowLeft className="w-4 h-4 inline-block mr-2" />Tilbake</Link>
                    </button>

                </div>

            </section>

        </main>

    );
}
