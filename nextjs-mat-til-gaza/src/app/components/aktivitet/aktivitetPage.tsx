"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ActivityDetail } from "@/app/types/aktivitet/activityDetail";
import SanityImageFrame from "@/app/components/sanity/SanityImageFrame";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, ChevronRight, Calendar } from "lucide-react";
import { sortActivitiesByTitle } from "@/app/lib/sanity/sortActivities";
import { hasActivityVideo } from "@/app/lib/hasActivityVideo";
import SupportDiv from "@/app/components/SupportDiv";

interface Props {
    activities: ActivityDetail[];
}

export default function ActivityPage({ activities }: Props) {

    const router = useRouter();
    const [selected, setSelected] = useState<ActivityDetail | null>(null);
    const sortedActivities = [...activities].sort(sortActivitiesByTitle);

    const handleSelect = (activity: ActivityDetail) => {
        const slug = activity.slug?.current;

        if (hasActivityVideo(slug)) {
            router.push(`/aktivitet/${slug}`);
            return;
        }

        setSelected(activity);
    };

    const aktivitet_forside = sortedActivities.find((a) => a.slug?.current === "aktivitet-forside");

    // DETAIL VIEW
    if (selected) {
        return (
            <main className="mx-auto bg-background">

                <section className="bg-slate-200 p-16">

                    <button
                        onClick={() => setSelected(null)}
                        className="flex items-center gap-2 mb-8 text-slate-600 hover:text-black"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Tilbake
                    </button>
                    <div className="flex items-center font-bold text-lg tracking-widest uppercase mb-8">
                        <Calendar className="w-4 h-4 mr-2" />
                        {selected.title}
                    </div>

                    {selected.body && (
                        <div className="text-justify max-w-5xl">
                            <PortableText value={selected.body} />
                        </div>
                    )}

                </section>

                <section className="px-16 pt-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                        {selected.gallery?.map((galleryItem, i) => (
                            <div
                                key={galleryItem._key || i}
                                onClick={() => setSelected(selected)}
                                className="w-full max-w-md aspect-[4/3] border-2 rounded-3xl bg-cotton hover:shadow-xl transition-shadow duration-300"
                            >

                                {selected.gallery?.[0] && (
                                    <SanityImageFrame
                                        gallery={[galleryItem]}
                                        className="w-full h-full rounded-2xl overflow-hidden"
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                </section>

                <div className="mx-16 mb-24 mt-12"><SupportDiv /></div>

            </main>
        );
    }

    // LIST VIEW
    return (
        <main className="pt-16 pb-32 mx-auto px-16 bg-background">

            <section>

                <div className="max-w-4xl">

                    <div className="text-5xl font-black mb-4">{aktivitet_forside?.title}</div>

                    <div className="text-lg">
                        <PortableText value={aktivitet_forside?.body} />
                    </div>

                </div>

                <hr className="my-8" />

                <div className="grid grid-cols-1 xl:grid-cols-[60%_40%] gap-8 items-start">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {sortedActivities.map((activity) => (
                            <div
                                key={activity._id}
                                onClick={() => handleSelect(activity)}
                                className="group cursor-pointer border-2 rounded-3xl bg-cotton p-6 hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Card Hand Stack Visual */}
                                <div className="relative h-64 mb-10 perspective-1000">

                                    {/* Bottom card */}
                                    <div className="absolute inset-0 bg-slate-100 rounded-3xl shadow-md border border-slate-200 overflow-hidden transform -rotate-6 group-hover:-rotate-12 transition-all duration-500 opacity-80 scale-95 translate-y-4">
                                        {activity.gallery?.[2] && (
                                            <SanityImageFrame
                                                gallery={activity.gallery.slice(2, 3)}
                                                className="w-full h-full"
                                            />
                                        )}
                                    </div>

                                    {/* Middle card */}
                                    <div className="absolute inset-0 bg-slate-100 rounded-3xl shadow-lg border border-slate-200 overflow-hidden transform rotate-3 group-hover:rotate-6 transition-all duration-500 opacity-90 translate-y-2">
                                        {activity.gallery?.[1] && (
                                            <SanityImageFrame
                                                gallery={activity.gallery.slice(1, 2)}
                                                className="w-full h-full"
                                            />
                                        )}
                                    </div>

                                    {/* Top card */}
                                    <div className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden transform group-hover:-translate-y-4 transition-all duration-500 z-10">
                                        {activity.gallery?.[0] && (
                                            <SanityImageFrame
                                                gallery={activity.gallery.slice(0, 1)}
                                                className="w-full h-full"
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* Text info */}
                                <div className="space-y-3">
                                    <div className="flex items-center text-vipps-500 font-bold text-sm tracking-widest uppercase">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {activity.title}
                                    </div>

                                    <div className="text-slate-500 text-sm line-clamp-2 leading-relaxed overflow-hidden">
                                        {activity.subtitle}
                                    </div>

                                    <div className="flex items-center gap-2 text-slate-900 font-bold text-sm pt-2 group-hover:translate-x-1 transition-transform">
                                        Se detaljer <ChevronRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mr-0 md:mr-8"><SupportDiv /></div>

                </div>

            </section>

        </main >

    );
}