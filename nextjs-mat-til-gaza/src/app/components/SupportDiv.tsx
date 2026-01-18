import { useState } from "react";
import { ActivityDetail } from "@/app/types/aktivitet/activityDetail";

export default function SupportSection() {

    const [selected, setSelected] = useState<ActivityDetail | null>(null);

    return (

        <div className="max-w-2xl mx-auto">

            <div className="border-2 p-8 shadow-lg rounded-lg">

                <div className="font-bold text-xl mb-2">
                    Vil du bidra til neste leveranse?
                </div>
                <div className=" text-md mb-6">
                    Ditt bidrag gjør det mulig for oss å fortsette dette arbeidet.
                </div>
                <a
                    href="/vipps"
                    onClick={() => setSelected(null)}
                    className="block w-full border-2 border-[red] py-3 bg-vipps text-white shadow-md rounded-xl font-bold text-center transition-all duration-150 ease-out active:scale-95 active:shadow-inner hover:bg-white hover:text-vipps"
                >
                    Støtt med Vipps
                </a>

            </div>

        </div>

    )
}