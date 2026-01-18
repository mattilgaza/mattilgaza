import { client } from "@/app/lib/sanity/client";
import { AKTIVITET_QUERY } from "@/app/types/sanity/groq_queries";
import ActivityPage from "@/app/components/aktivitet/aktivitetPage";



export default async function Page() {

    const aktivitet = await client.fetch(AKTIVITET_QUERY);

    return <ActivityPage activities={aktivitet} />;
}
