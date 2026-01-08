// app/page.tsx (or pages/index.tsx in Pages Router)
import { client } from "@/app/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { FORSIDE_HEADER_QUERY, INTRO_QUERY } from "@/app/types/sanity/groq_queries"
import { Quote } from "lucide-react";

export default async function Page() {
  const forside_header = await client.fetch(FORSIDE_HEADER_QUERY);
  const introduksjon = await client.fetch(INTRO_QUERY);

  return (
    <>
      <main className="flex flex-col">

        <section className="relative w-full min-h-[100svh] overflow-hidden bg-gray-700">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/sending_4.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white p-6 text-center">
            <div className="text-4xl md:text-6xl font-bold mb-8">
              {forside_header.title}
            </div>
            <div className="text-2xl font-bold mb-8">
              <PortableText value={forside_header.body.slice(0, 1)} />
            </div>
            <div className="text-xl md:text-3xl">
              {forside_header.subtitle}
            </div>
          </div>
        </section>

        <section className="max-w-8xl grid grid-cols-1 xl:grid-cols-2 gap-4 mx-auto items-center my-4">

          <div className="relative flex justify-center items-center py-12">
            {/* Background quote */}
            <Quote
              className="
                absolute
                inset-0
                m-auto
                w-32 h-32 xl:w-72 h-72
                text-gray-400
                opacity-15
                pointer-events-none
              "
            />

            {/* Subtitle */}
            <div className="relative z-10 text-xl md:text-3xl drop-shadow-md text-center max-w-2xl px-4">
              {introduksjon.subtitle}
            </div>
          </div>


          {/* Text body */}
          <div className="text-lg text-justify py-8 relative max-w-2xl mx-auto p-6 space-y-4">
            <PortableText value={introduksjon.body.slice(0, 1)} />
            <PortableText value={introduksjon.body.slice(1, 2)} />
            <PortableText value={introduksjon.body.slice(2, 3)} />
            <PortableText value={introduksjon.body.slice(3, 4)} />
            <PortableText value={introduksjon.body.slice(4, 5)} />
          </div>

        </section>
        <hr className="mb-8 mx-8" />
        <section className="max-w-8xl grid grid-cols-1 xl:grid-cols-2 gap-4 mx-auto items-center mb-24 text-lg text-justify">

          <div className="">
            <Link
              href="/om_oss"
              className="px-6 mx-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            >
              Les mer om oss
            </Link>
          </div>

          <div className="relative max-w-2xl mx-auto px-6">
            <PortableText value={introduksjon.body.slice(5, 6)} />
          </div>

        </section>

      </main>

    </>
  );
}

