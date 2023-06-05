import React from "react";
import { Song } from "@/types";
import useLoadImage from "@/hooks/useLoadImage";
import PlayButton from "./PlayButton";
import Image from "next/image";

interface SongItemProps {
  onClick: (id: string) => void;
  data: any;
  key: string;
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  const imageUrl = useLoadImage(data);
  

  return (
    <div
      onClick={() => onClick(data.id)}
      className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 "
    >
      <div className=" relative aspect-square w-full h-full rounded-md overflow-hidden ">
        <Image src={imageUrl || ""} alt="image" fill className="object-cover" />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p className=" text-neutral-400 text-sm pb-4 w-full truncate ">
          By {data.author}
        </p>
      </div>
      <div className=" absolute bottom-24 right-5 ">
        <PlayButton />
      </div>
    </div>
  );
};

export default SongItem;
