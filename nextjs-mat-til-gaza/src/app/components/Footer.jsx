import { client } from "@/app/lib/sanity/client";

const FOOTER_QUERY = `*[_type == "forside" && slug.current == "footer"][0]{title}`;

export default async function Footer() {
    const data = await client.fetch(FOOTER_QUERY);

    return (
        <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4 text-center shadow-inner animate-fade-in z-50">
            <h3>{data?.title ?? "Footer"}</h3>
        </footer>

    );
}
