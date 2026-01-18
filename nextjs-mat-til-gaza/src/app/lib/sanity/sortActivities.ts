const monthOrder: Record<string, number> = {
    Januar: 1,
    Februar: 2,
    Mars: 3,
    April: 4,
    Mai: 5,
    Juni: 6,
    Juli: 7,
    August: 8,
    September: 9,
    Oktober: 10,
    November: 11,
    Desember: 12,
};

export function sortActivitiesByTitle(a: { title: string }, b: { title: string }) {
    const [monthA, yearA] = a.title.split(" ");
    const [monthB, yearB] = b.title.split(" ");

    const yearDiff = parseInt(yearA) - parseInt(yearB); // ascending year
    if (yearDiff !== 0) return yearDiff;

    const monthDiff = (monthOrder[monthA] || 0) - (monthOrder[monthB] || 0); // ascending month
    return monthDiff;
}
