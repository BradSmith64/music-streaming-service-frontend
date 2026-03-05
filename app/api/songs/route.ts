import { SongMetaData } from "@/app/types/song";

export interface GetSongsResponse
{
    items: SongMetaData[],
};

export async function GET() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_ENV_URL}/songs`);
    return response;
}