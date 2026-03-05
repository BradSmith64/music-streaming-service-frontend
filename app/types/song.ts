export interface SongMetaData {
    id: number,
    title: string,
    albumTitle: string,
    releaseDate : Date | null,
    likeCount : number,
    liked: boolean,
    url : string | null
};