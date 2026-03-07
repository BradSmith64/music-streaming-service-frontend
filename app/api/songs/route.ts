import { SongMetaData } from "@/app/types/song";

export interface GetSongsResponse
{
    items: SongMetaData[],
};

export async function GET() {
    const response = await fetch(`${process.env.BACKEND_API_URL}/songs`);
    return response;
}