import { PortableText } from "@portabletext/react";
import { ArrowLeft, ChevronRight, Calendar } from "lucide-react";
import { client } from "@/app/lib/sanity/client";
import Link from "next/link";
import { DES_2024_QUERY } from "@/app/types/sanity/groq_queries";


export default async function Page() {

    // Fetch data for each entry
    const des_2024 = await client.fetch(DES_2024_QUERY);

    return (

        <main className="">

            <section className="px-4 md:px-16 py-4 md:py-16">


                <div>

                    <button className="text-slate-600 hover:text-black">
                        <Link href="/aktivitet" className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Tilbake
                        </Link>
                    </button>

                    <div className="flex items-center font-bold text-lg tracking-widest uppercase mb-8">
                        <Calendar className="w-4 h-4 mr-2" />
                        {des_2024.title}
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[60%_40%] px-4 md:px-16">

                    <div>
                        {des_2024.body && (
                            <div className="text-justify text-xl md:mt-16 md:mr-16">
                                <PortableText value={des_2024.body} />
                            </div>
                        )}
                    </div>

                    <div className="mt-4 md:mt-[-6rem]">
                        <video className="rounded-2xl w-full h-[500px] object-cover" autoPlay controls muted loop>
                            <source src="/videos/Shaimaas_ide.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                </div>

                <div className="grid col-span-2 justify-center items-center my-8">

                    <div className="text-center p-8 rounded-lg bg-cotton dark:bg-gray-900 shadow-md">

                        <div className="font-bold text-xl mb-2">
                            Vil du bidra til neste leveranse?
                        </div>
                        <div className="text-md mb-6">
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

