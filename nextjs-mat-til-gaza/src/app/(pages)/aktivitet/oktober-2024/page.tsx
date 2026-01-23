import { client } from "@/app/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { OCT_2024_QUERY } from "@/app/types/sanity/groq_queries";
import SanityImageFrame from "@/app/components/sanity/SanityImageFrame";
import { ArrowLeft, Calendar } from "lucide-react";
import { SanityImageType } from "@/app/types/sanity/gallery";

export default async function Page() {

    const oct_2024 = await client.fetch(OCT_2024_QUERY);  // Fetch data

    return (
        <main className="">

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
                        {oct_2024.title}
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[40%_60%] px-4 md:px-16">

                    <div>
                        {oct_2024.body && (
                            <div className="text-justify text-xl md:mr-16">
                                <PortableText value={oct_2024.body.slice(0, 1)} />
                            </div>
                        )}
                    </div>

                    <div className="mt-8 md:mt-[-3rem]">
                        <video className="rounded-2xl" autoPlay controls muted loop>
                            <source src="/videos/sending1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                </div>

            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-16 bg-cotton dark:bg-gray-800">

                {oct_2024.gallery.slice(0, 10).map((image: SanityImageType) => (
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

            <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[70%_30%] xl:grid-cols-[60%_25%] justify-center items-center gap-4 md:p-16">

                <div className="justify-center items-center px-8 text-justify mt-6 mr-0 xl:mr-12">

                    <div className="mb-4 font-semibold"> <PortableText value={oct_2024.body.slice(1, 2)} /> </div>
                    <div className="mb-4"> <PortableText value={oct_2024.body.slice(2, 3)} /> </div>
                    <div className="mb-4"> <PortableText value={oct_2024.body.slice(3, 4)} /> </div>
                    <div className="mb-4"> <PortableText value={oct_2024.body.slice(4, 5)} /> </div>
                    <div className="mb-4"> <PortableText value={oct_2024.body.slice(5, 6)} /> </div>
                    <div className="mb-4"> <PortableText value={oct_2024.body.slice(6, 7)} /> </div>

                </div>

                <div className="w-full max-w-md aspect-[3/4] mx-auto p-4">
                    <SanityImageFrame
                        gallery={oct_2024.gallery.slice(10)}
                        className="w-full h-full rounded-2xl overflow-hidden"
                    />
                </div>

            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-16 pb-4 justify-center">

                <div className="col-span-2 md:col-span-1 rounded-lg shadow-sm border-4 border-white aspect-video overflow-hidden">
                    <video
                        className="object-cover w-full h-full object-[80%_20%]"
                        autoPlay
                        controls
                        muted
                        loop
                    >
                        <source src="/videos/Hjemmet_ødelagt.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="col-span-2 md:col-span-1 rounded-lg shadow-sm border-4 border-white aspect-video overflow-hidden">
                    <video
                        className="object-cover w-full h-full object-[70%_30%]"
                        autoPlay
                        controls
                        muted
                        loop
                    >
                        <source src="/videos/Hjemmet_ødelagt2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
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
