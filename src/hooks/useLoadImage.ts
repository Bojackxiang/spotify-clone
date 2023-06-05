import { Song } from "@/types";
import {
  SupabaseClient,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import React from "react";

export default function useLoadImage(song: Song) {
  const supaBaseCLient = useSupabaseClient();

  if (!song) {
    return null;
  }

  const { data: imageData } = supaBaseCLient.storage
    .from("images")
    .getPublicUrl(song.image_path);

  return imageData.publicUrl;
}

