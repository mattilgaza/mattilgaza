// app/page.tsx (or pages/index.tsx in Pages Router)
import { client } from "@/app/lib/sanity/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { FORSIDE_HEADER_QUERY, INTRO_QUERY } from "@/app/types/sanity/groq_queries"

export default async function Page() {
  const forside_header = await client.fetch(FORSIDE_HEADER_QUERY);
  const introduksjon = await client.fetch(INTRO_QUERY);

  return (
    <>
      <main className="max-w-5xl mx-auto px-6 py-16 grid gap-4">

        {/* Header */}
        <section className="p-6 text-center">
          <div className="text-gray-600 text-3xl mb-6">{forside_header.title}</div>
          <div className="text-4xl font-size-xl mt-2">{forside_header.subtitle}</div>
        </section>

        {/* Content */}

        {/* Section 2 - Video */}
        <section className="p-6 bg-cotton rounded-lg shadow-sm border-2 text-justify">

          <div className="font-bold"> < PortableText value={introduksjon.body.slice(0, 1)} /> </div>
          <div> < PortableText value={introduksjon.body.slice(1, 2)} /> </div>

          <video className="w-full md:w-[75%] rounded-lg shadow-sm mt-4 mb-4 border-4 border-gray-600" autoPlay controls muted loop>
            <source src="/videos/sending2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="mb-4"> < PortableText value={introduksjon.body.slice(2, 3)} /> </div>

          <div> < PortableText value={introduksjon.body.slice(3, 4)} /> </div>
          <div className="mb-4"> < PortableText value={introduksjon.body.slice(4, 5)} /> </div>
          <div> < PortableText value={introduksjon.body.slice(5, 6)} /> </div>
          <div> < PortableText value={introduksjon.body.slice(6, 7)} /> </div>

          <button className="mt-4 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
            <Link href="/om_oss">Les mer</Link>
          </button>

        </section>

      </main>

    </>
  );
}
