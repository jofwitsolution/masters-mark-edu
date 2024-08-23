"use client";

import { CldUploadWidget } from "next-cloudinary";
import { Loader, Plus, Trash } from "lucide-react";

import { Button } from "../ui/button";
import Image from "next/image";

interface ImageData {
  url?: string | undefined;
  publicId?: string | undefined;
}

interface ImageUploadProps {
  value: ImageData[];
  onChange: (value: ImageData) => void;
  onRemove: (value: ImageData) => void;
  loadingRemove?: boolean;
}

const ImageUploader: React.FC<ImageUploadProps> = ({
  onChange,
  onRemove,
  value,
  loadingRemove = false,
}) => {
  const onUpload = (result: any) => {
    onChange({ url: result.info.secure_url, publicId: result.info.public_id });
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        {value.map((image) => (
          <div key={image.publicId} className="relative w-[200px] h-[200px]">
            <div className="absolute top-0 right-0 z-10">
              <Button
                type="button"
                onClick={() => onRemove(image)}
                size="sm"
                className="bg-red-1 text-white"
                disabled={loadingRemove}
              >
                {loadingRemove ? (
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

      <CldUploadWidget
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        onUpload={onUpload}
        // Set folder to "event-images" in Cloudinary
        options={{ folder: "/event-images" }}
      >
        {({ open }) => {
          return (
            <Button
              type="button"
              onClick={() => open()}
              className="bg-primary-100 text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              Upload Images
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUploader;
