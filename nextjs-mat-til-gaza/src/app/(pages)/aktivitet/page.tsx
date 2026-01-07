import { client } from "@/app/lib/sanity/client";
import AktivitetCard from "@/app/components/AktivitetCard";
import {
    OCT_2024_QUERY, NOV_2024_QUERY, DES_2024_QUERY, JAN_2025_QUERY, APR_2025_QUERY,
    STATUS_UPDATE_121125_QUERY, STATUS_UPDATE_271225_QUERY, SPLEIS_INITIATIV_QUERY
} from "@/app/types/sanity/groq_queries";


export default async function Page() {

    // Fetch data for each entry
    const oct_2024 = await client.fetch(OCT_2024_QUERY);
    const nov_2024 = await client.fetch(NOV_2024_QUERY);
    const des_2024 = await client.fetch(DES_2024_QUERY);
    const jan_2025 = await client.fetch(JAN_2025_QUERY);
    const apr_2025 = await client.fetch(APR_2025_QUERY);
    const status_update_121125 = await client.fetch(STATUS_UPDATE_121125_QUERY);
    const status_update_271225 = await client.fetch(STATUS_UPDATE_271225_QUERY);
    const spleis_initiativ = await client.fetch(SPLEIS_INITIATIV_QUERY);

    return (
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl justify-center mx-auto px-4 py-6">

            <section className=""><AktivitetCard data={oct_2024} index1={4} index2={0} index3={1} /></section>
            <section className=""><AktivitetCard data={nov_2024} index1={4} index2={0} index3={1} /></section>
            <section className=""><AktivitetCard data={des_2024} index1={1} index2={0} index3={2} /></section>
            <section className=""><AktivitetCard data={jan_2025} index1={0} index2={1} index3={2} /></section>
            <section className=""><AktivitetCard data={apr_2025} index1={5} index2={0} index3={4} /></section>
            <section className=""><AktivitetCard data={status_update_121125} /></section>
            <section className=""><AktivitetCard data={status_update_271225} /></section>
            <section className=""><AktivitetCard data={spleis_initiativ} /></section>

            <div className="mb-12"></div>

        </main>

    );
}
