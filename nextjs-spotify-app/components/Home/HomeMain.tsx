import React from "react";
import Header from "../Navigation/Header";
import TopArtist from "./TopArtists/TopArtists";
import PlayerMain from "../SongPlayer/PlayerMain";
import TopTracks from "./TopTracks/TopTracks";
import { useSession } from "next-auth/react";
import YourPlaylist from "./Playlist/YourPlaylist";
function HomeMain() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-scroll scrollbar-hide">
      <div className="relative">
        <Header />
      </div>
      <div>
        <TopArtist />
      </div>
      <div className="text-zinc-300 md:grid md:grid-cols-2">
        <div className="hidden md:block">
          <PlayerMain />
        </div>

        <TopTracks />
      </div>
      <div>
        <YourPlaylist />
      </div>
    </div>
  );
}

export default HomeMain;