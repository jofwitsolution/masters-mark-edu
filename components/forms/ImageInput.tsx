"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  handleFileData: (data: string | ArrayBuffer | null) => void;
  isDisabled: boolean;
}

function ImageInput({ handleFileData, isDisabled }: Props) {
  const onDrop = useCallback(
    (acceptedFiles: Array<File>) => {
      const file = new FileReader();

      file.onload = function () {
        setPreview(file.result);
        handleFileData(file.result);
      };

      file.readAsDataURL(acceptedFiles[0]);
    },
    [handleFileData]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png", ".jpg"],
    },
    maxSize: 1024 * 1000,
    maxFiles: 1,
    disabled: isDisabled,
  });

  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  return (
    <div className="py-[0.75rem] w-full rounded bg-white">
      <div {...getRootProps()} className="relative size-full">
        <div className="flex w-full justify-center text-black px-2 py-4">
          <input {...getInputProps()} disabled={isDisabled} />
          {preview ? (
            <span className="font-semibold text-green-500">File added</span>
          ) : (
            <span>Choose file (max: 1MB)</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageInput;
