"use client";

import React, { useState } from "react";
import { IMedia } from "@/lib/models/Media";
import { Button } from "@/components/ui/button";
import { Loader, Trash } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { deleteOneMedia } from "@/lib/actions/media.action";
import { toast } from "sonner";

const GalleryImages = ({ media }: { media: IMedia[] }) => {
  const pathname = usePathname();

  const [loadingDelete, setLoadingDelete] = useState(false);

  const handleDelete = async (publicId: string) => {
    setLoadingDelete(true);
    const result = await deleteOneMedia({ publicId, path: pathname });
    if (result?.error) {
      toast.error("Failed to delete media");
    } else {
      toast.success("Media deleted successfully");
    }
    setLoadingDelete(false);
  };
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        {media.map((image) => (
          <div key={image.publicId} className="relative w-[200px] h-[200px]">
            <div className="absolute top-0 right-0 z-10">
              <Button
                type="button"
                onClick={() => handleDelete(image.publicId)}
                size="sm"
                className="bg-red-1 text-white"
                disabled={loadingDelete}
              >
                {loadingDelete ? (
                  <Loader className="h-4 w-4 text-white" />
                ) : (
                  <Trash className="h-4 w-4" />
                )}
              </Button>
            </div>
            <Image
              src={image.url as string}
              alt="collection"
              className="object-cover rounded-lg"
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryImages;
