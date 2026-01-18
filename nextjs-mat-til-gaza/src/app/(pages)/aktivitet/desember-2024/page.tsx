import { PortableText } from "@portabletext/react";
import { ArrowLeft, ChevronRight, Calendar } from "lucide-react";
import { client } from "@/app/lib/sanity/client";
import Link from "next/link";
import { DES_2024_QUERY } from "@/app/types/sanity/groq_queries";


export default async function Page() {

    // Fetch data for each entry
    const des_2024 = await client.fetch(DES_2024_QUERY);

    return (

        <main className="bg-background">

            <section className="bg-slate-200 px-16 py-16">


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

                <div className="bg-slate-200 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[60%_40%] px-16">

                    <div>
                        {des_2024.body && (
                            <div className="text-justify text-xl mt-16 mr-16">
                                <PortableText value={des_2024.body} />
                            </div>
                        )}
                    </div>

                    <div className="mt-[-6rem]">
                        <video className="rounded-2xl w-full h-[500px] object-cover" autoPlay controls muted loop>
                            <source src="/videos/Shaimaas_ide.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                </div>

            </section>

        </main>
    );
}

