import { client } from "@/app/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import { Globe } from "lucide-react"


const VIPPS_QUERY = `*[_type == "vipps" && slug.current == "vipps"][0]{title, subtitle, body}`;

export default async function OmOssPage() {

    const vipps = await client.fetch(VIPPS_QUERY);

    return (
        <main className="grid grid-col-1 max-w-5xl mx-auto px-4 md:px-16 py-4 md:py-16">


            <section className="w-full justify-center shadow-sm text-center">

                <div className="bg-vipps rounded-[2.5rem] p-8">

                    <div className="text-2xl font-size-xl">{vipps.title}</div>
                    <div className="text-3xl font-size-xl font-bold text-cotton m-4">{vipps.subtitle}</div>

                </div>

            </section>

            <section className="w-full rounded-lg shadow-sm pt-4 md:p-12 text-center mb-24">

                <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-900/20 text-white flex flex-col animate-in fade-in slide-in-from-right-8 duration-700">
                    <div className="flex justify-between items-start mb-10">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20">
                            <Globe className="w-8 h-8" />
                        </div>
                        <div className="bg-white/5 px-4 py-2 rounded-full border border-white/10 text-xs font-bold text-white/40 uppercase tracking-widest">
                            International Transfer
                        </div>
                    </div>

                    <div className="flex-grow">
                        <h2 className="text-3xl font-bold mb-4">Bankoverføring</h2>
                        <p className="text-white/50 mb-8 leading-relaxed">
                            For større bidrag eller internasjonale donasjoner kan du benytte våre bankdetaljer.
                        </p>

                        <div className="space-y-4">

                            <div
                                className="bg-white/5 border border-white/10 rounded-2xl p-5 cursor-pointer hover:bg-white/10 transition-all group"
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">IBAN</span>
                                </div>
                                <div className="text-lg md:text-xl font-mono font-bold tracking-wider"><PortableText value={vipps.body.slice(4, 5)} /> </div>
                            </div>

                            <div
                                className="bg-white/5 border border-white/10 rounded-2xl p-5 cursor-pointer hover:bg-white/10 transition-all group"
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">BIC / SWIFT</span>
                                </div>
                                <div className="text-lg font-mono font-bold tracking-wider"><PortableText value={vipps.body.slice(6, 7)} /></div>
                            </div>

                            <div
                                className="bg-white/5 border border-white/10 rounded-2xl p-5 cursor-pointer hover:bg-white/10 transition-all group"
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">BANK</span>
                                </div>
                                <div className="text-lg md:text-xl font-mono font-bold tracking-wider"><PortableText value={vipps.body.slice(8, 9)} /> </div>
                            </div>

                            <div
                                className="bg-white/5 border border-white/10 rounded-2xl p-5 cursor-pointer hover:bg-white/10 transition-all group"
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">ADDRESS</span>
                                </div>
                                <div className="text-lg md:text-xl font-mono font-bold tracking-wider"><PortableText value={vipps.body.slice(10, 11)} /> </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </main>

    );
}
