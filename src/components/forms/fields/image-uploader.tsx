"use client";

import React from "react";

import { Upload, X } from "lucide-react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { Controller, useFormContext } from "react-hook-form";
import FieldErrorMessage from "./field-error-message";

type ImageUploadProps = {
  name: string;
  label?: string;
  disableErrorMessage?: boolean;
  maxNumber?: number;
};

const ImageUpload = ({
  name,
  disableErrorMessage,
  label,
  maxNumber,
}: ImageUploadProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label && (
        <label className="my-4 block text-md font-medium text-dash-muted-foreground mb-1">
          {label}
        </label>
      )}
      <div className="w-full max-w-md mx-auto space-y-4 text-dash-muted-foreground">
        <Controller
          name={name}
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <ImageUploading
                multiple
                value={value || []}
                onChange={(imageList: ImageListType) => {
                  onChange(imageList); // Update react-hook-form field value
                }}
                maxNumber={maxNumber}
                dataURLKey="dataURL"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  <div className="space-y-4">
                    <div
                      onClick={onImageUpload}
                      {...dragProps}
                      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                        isDragging
                          ? "border-primary bg-primary/10"
                          : "border-gray-300 hover:border-primary"
                      }`}
                    >
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600">
                        {`Drag 'n' drop some images here, or click to select images`}
                      </p>
                    </div>

                    {imageList.length > 0 && (
                      <div className="grid grid-cols-3 gap-4">
                        {imageList.map((image, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={image.dataURL}
                              alt={`preview ${index}`}
                              className="w-full h-24 object-cover rounded-md"
                            />
                            <button
                              type="button"
                              onClick={() => onImageRemove(index)}
                              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity h-4 w-4 flex items-center justify-center cursor-pointer"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </ImageUploading>
              {error && !disableErrorMessage && (
                <FieldErrorMessage errorMessage={error.message} />
              )}
            </>
          )}
        />
      </div>
    </>
  );
};

export default ImageUpload;
