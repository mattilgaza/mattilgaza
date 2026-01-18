import { activityVideos } from "@/app/lib/activityVideos";

export function hasActivityVideo(slug?: string): boolean {
    if (!slug) return false;
    return Boolean(activityVideos[slug]);
}