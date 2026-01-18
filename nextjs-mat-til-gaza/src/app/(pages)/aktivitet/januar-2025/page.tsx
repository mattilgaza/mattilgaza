import { client } from "@/app/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { JAN_2025_QUERY } from "@/app/types/sanity/groq_queries";
import SanityImageFrame from "@/app/components/sanity/SanityImageFrame";
import { ArrowLeft, Calendar } from "lucide-react";
import { SanityImageType } from "@/app/types/sanity/gallery";

export default async function Page() {

    const jan_2025 = await client.fetch(JAN_2025_QUERY);  // Fetch data

    return (
        <main className="bg-background">

            <section className="grid grid-cols-1 bg-slate-200 px-16 py-16">

                <div className="col-span-2">

                    <button className="text-slate-600 hover:text-black">
                        <Link href="/aktivitet" className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Tilbake
                        </Link>
                    </button>

                    <div className="flex items-center font-bold text-lg tracking-widest uppercase mb-8">
                        <Calendar className="w-4 h-4 mr-2" />
                        {jan_2025.title}
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[40%_60%] bg-slate-200 px-16">

                    <div>
                        {jan_2025.body && (
                            <div className="text-justify text-xl md:mr-16">
                                <PortableText value={jan_2025.body.slice(0, 1)} />
                            </div>
                        )}
                    </div>

                    <div className="justify-center items-center mt-8 md:mt-[-3rem]">
                        <video className="w-full xl:w-[80%] h-72 object-[90%_10%] object-cover rounded-lg shadow-sm xl:ml-12" autoPlay controls muted loop>
                            <source src="/videos/sending3.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                </div>

            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-16">

                {jan_2025.gallery.slice(0, 10).map((image: SanityImageType) => (
                    <div
                        key={image._key}
                        className="w-full max-w-md aspect-[4/5] hover:shadow-xl transition-shadow duration-300 mx-auto"
                    >
                        <SanityImageFrame
                            gallery={[image]} // single image per card
                            className="w-full h-full rounded-2xl overflow-hidden"
                        />
                    </div>
                ))}

            </section>


            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-16 pb-16 justify-center bg-gray-200">

                <div className="grid col-span-2 justify-center items-center my-8 shadow-lg">

                    <div className="text-center border-2 p-8 rounded-lg">

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

                    <button className="mt-4 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 shadow-[10px_10px_15px_rgba(0,0,0,0.35)]">
                        <Link href="/aktivitet">Gå tilbake til alle aktiviteter</Link>
                    </button>

                </div>

            </section>

        </main>

    );
}
