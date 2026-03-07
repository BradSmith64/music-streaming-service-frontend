'use client'

import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SongMetaData } from "./types/song";
import { GetSongsResponse } from "./api/songs/route";
import { LikeSongResponse } from "./api/songs/[id]/likes/route";

import { ThumbsUp } from "lucide-react";

export default function Home() {
  const [songs, setSongs] = useState<SongMetaData[]>([]);

  async function fetchData() {
    const songsResponse = await fetch("/api/songs");
    const songsJson : GetSongsResponse = await songsResponse.json();
    
    setSongs(songsJson.items);
  };

  async function likeSong(id : number) {
    
    setSongs(prevSongs =>
      prevSongs.map( ( song ) => song.id === id ? { ...song, liked: true, likeCount: song.likeCount + 1 } : song )
    );

    const likeResponse = await fetch(`/api/songs/${id}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async function unlikeSong(id : number) {
    
    setSongs(prevSongs =>
      prevSongs.map( ( song ) => song.id === id ? { ...song, liked: false, likeCount : song.likeCount - 1 } : song )
    );

    const unlikeResponse = await fetch(`/api/songs/${id}/likes`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col gap-4 min-h-screen w-full max-w-3xl items-stretch py-32 px-16 bg-white dark:bg-black">
        { songs && songs.length > 0 ? songs.map( ( song ) => <Card key={ song.id } className="w-full">
          <CardHeader>
            <CardTitle>{ song.title }</CardTitle>
            <CardDescription>{ song.albumTitle }</CardDescription>
            <CardAction className="flex gap-2 items-center">{ song.likeCount } Likes { song.liked ? <ThumbsUp className="cursor-pointer" onClick={ () => unlikeSong(song.id) } fill="black" strokeWidth={0} /> : <ThumbsUp className="cursor-pointer" onClick={ () => likeSong(song.id) } /> }</CardAction>
          </CardHeader>
          <CardContent className="flex justify-end">
            <audio controls>
              <source src={ `${ song.url }` } type="audio/mpeg" />
              <span>Your browser does not support the audio element.</span>
            </audio>
          </CardContent>
        </Card> ) : "No songs found" }
        <footer className="mt-auto pt-8 text-right text-xs text-zinc-500 dark:text-zinc-400">
          <p>Songs from <a href="https://www.playonloop.com" target="_blank" rel="noopener noreferrer" className="hover:underline">PlayOnLoop.com</a></p>
          <p>Licensed under Creative Commons by Attribution 4.0</p>
        </footer>
      </main>
    </div>
  );
}
