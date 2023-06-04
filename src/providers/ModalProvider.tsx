"use client";

import AuthModal from "@/components/AuthModal";
import Modal from "@/components/Modal";
import UploadModal from "@/components/UploadModal";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal/>
      <UploadModal/>
    </>
  );
};

export default ModalProvider;
