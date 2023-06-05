import React, { useState } from "react";
import Modal from "./Modal";
import useUploadModal from "@/hooks/useUploadModal";
import { FieldValues, SubmitHandler, set, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { toast } from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import uniqid from "uniqid";
import {
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

interface UploadModalProps {}

const UploadModal: React.FC<UploadModalProps> = () => {
  const uploadModal = useUploadModal();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();
  const router = useRouter()

  const { register, reset, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
    },
  });

  const onChange = () => {
    if (uploadModal.isOpen) {
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);
      const image = values.image?.[0];
      const { title, author } = values;

      if (!title || !author || !image || !user) {
        if (!user) {
          toast.error("Please login to upload a song");
        } else {
          toast.error("Please fill all the fields ");
        }
        return;
      }

      const uniqueID = uniqid();

      // // upload image
      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from("images")
          .upload(`image-${uniqueID}`, image, {
            cacheControl: "3600",
            upsert: false,
          });

      // // check image upload error
      if (imageError) {
        toast.error("Fail to upload the image, try again laster");
        console.error(imageError);
        setIsLoading(false)
        return;
      }

      // save song information
      const {error: supabaseError} = await supabaseClient.from("songs").insert({
        user_id: user.id,
        title: values.title, 
        author: values.author, 
        image_path: "imageData.path"
      });

      if(supabaseError){
        toast.error("Fail to upload the song, try again laster");
        console.error(supabaseError);
        setIsLoading(false)
        return;
      }

      router.refresh();
      setIsLoading(false);
      toast.success("Song is adding success")
      reset();
      uploadModal.onClose();
      
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="add a song"
      description="adding a song"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form
        className="flex flex-col gap-y-4"
        action=""
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Song title"
        />
        <Input
          id="Author"
          disabled={isLoading}
          {...register("author", { required: true })}
          placeholder="Author name"
        />
        <div className="pb-1">Select a image</div>
        <Input
          id="image"
          type="file"
          disabled={isLoading}
          accept="image/*"
          {...register("image", { required: true })}
        />
        <div>
          <Button disabled={isLoading} type="submit">
            Create
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default UploadModal;
