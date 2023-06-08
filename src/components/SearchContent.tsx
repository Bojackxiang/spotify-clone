import { Song } from "@/types";
import React from "react";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";
import SearchResultItem from "@/app/search/components/SearchResultItem";

interface SearchContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {(songs || []).map((song: Song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <SearchResultItem song={song}/>
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
