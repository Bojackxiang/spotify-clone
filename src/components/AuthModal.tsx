"use client";

import React, { useEffect } from "react";
import Modal from "./Modal";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Auth } from "@supabase/auth-ui-react";
import useAuthModal from "@/hooks/useAuthModal";

interface AuthModalProps {
  children: React.ReactNode;
}

const AuthModal: React.FC<AuthModalProps> = ({ children }) => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModal();
  const authModal = useAuthModal();

  const onChange = (open: Boolean) => {
    if (open) {
      onClose();
    }
  };

  useEffect(() => {
    if (session) {
      authModal.onClose();
      router.refresh();
    }
  }, [session]);

  return (
    <Modal
      title="welcome back"
      description="Login in to your account"
      isOpen={isOpen}
      onChange={() => onChange(isOpen)}
    >
      <Auth
        supabaseClient={supabaseClient}
        providers={["github", 'google', ]}
        magicLink={true}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#22c55e",
              },
            },
          },
        }}
        theme="dark"
      />
    </Modal>
  );
};

export default AuthModal;
