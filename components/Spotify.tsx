"use client";

import { SPOTIFY_CONFIG_URL } from "@/config/spotify.config";
import { useEffect, useState } from "react";

const Spotify = () => {
  const [songId, setSongId] = useState<String | null>(null);
  const [videoId, setVideoId] = useState<String | null>(null);

  useEffect(() => {
    const fetchSongData = async () => {
      try {
        const response = await fetch(`${SPOTIFY_CONFIG_URL}/songId.json`);

        if (!response.ok) {
          throw new Error("Failed to fetch the song data");
        }

        const jsonData = await response.json();
        // setSongId(jsonData.songId);
        setSongId("0yNiaePZow0ycdrmLV0J7y");
        setVideoId("HZsiToZ8zCI");
      } catch (err: any) {
        console.log(err.message);
      }
    };

    fetchSongData();
  }, []);

  return (
    <div className="w-full px-5 sm:ml-2 my-5 space-y-5">
      <iframe // spotify
        className="rounded-2xl sm:ml-[90px] sm:w-[648px] lg:w-[300px] lg:ml-[0px]"
        src={`https://open.spotify.com/embed/track/${songId}?utm_source=generator`}
        height="152"
        width="100%"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>

      <div
        className={`relative rounded-xl font-medium text-lg sm:mt-0 mt-5 sm:ml-[90px] lg:ml-0 sm:w-[650px] lg:max-w-[300px] border border-border shadow-md transition bg-black/10 min-h-44`}
      >
        <iframe // youtube
          className="w-full h-full rounded-xl absolute object-cover object-center -z-10"
          src={`
          https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&rel=0&fs=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Spotify;
