"use client";

import "react-image-gallery/styles/css/image-gallery.css";

import React, { useMemo, useRef, useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import ImagePlaceholder from "@/components/common/animations/image-placeholder";

type ListingImageGalleryProps = {
  listing: any;
};

export default function ListingImageGallery({
  listing,
}: ListingImageGalleryProps) {
  const imageGalleryRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = useMemo(
    () =>
      listing.attributes.property.images?.map((image: any, idx: number) => ({
        fullscreen: image.original,
        original: image.original,
        thumbnail: image.thumbnail,
        originalAlt: `${listing.attributes.property.mls_number} image ${idx + 1} of ${listing.attributes.property.images.length}`,
        thumbnailAlt: `Thumbnail #${idx + 1} of ${listing.attributes.property.images.length} for ${listing.attributes.property.mls_number}`,
        thumbnailTitle: `Thumbnail #${idx + 1} ${listing.attributes.property.images.length}`,
        loading: idx === 0 ? "eager" : "lazy",
      })),
    [
      listing.attributes.property.images,
      listing.attributes.property.mls_number,
    ],
  );

  useEffect(() => {
    const imagePromises = images.map((image: any) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.original;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch((error) => console.error("Error loading images:", error));
  }, [images]);

  const handleImageClick = () => {
    // @ts-ignore
    imageGalleryRef?.current?.toggleFullScreen();
  };

  const handleScreenChange = (bool: boolean) => {
    setIsFullScreen(bool);
  };

  if (!imagesLoaded) {
    return (
      <div className="w-full aspect-[4/3] max-h-[719px]">
        <ImagePlaceholder className="w-full h-full" />
      </div>
    );
  }

  if (!images?.length) {
    return null;
  }

  return (
    <>
      <section
        id="listing-slider"
        className="flex flex-row items-start justify-center gap-[1rem] self-stretch"
      >
        <ImageGallery
          items={images || []}
          showIndex
          onClick={handleImageClick}
          ref={imageGalleryRef}
          thumbnailPosition={isFullScreen ? "bottom" : "right"}
          onScreenChange={handleScreenChange}
        />
      </section>
      <style jsx global>{`
        .image-gallery-thumbnails {
          overflow-y: ${!isFullScreen ? "scroll" : "auto"};
        }
        .image-gallery-content .image-gallery-slide .image-gallery-image {
          max-height: ${!isFullScreen
            ? "719px !important"
            : "calc(100vh - 150px) !important"};
        }
        .image-gallery-thumbnail-image {
          max-height: 69px;
          object-fit: cover;
        }
        /* .image-gallery-slides {
           height: ${isFullScreen ? "89vh" : "auto"};
         } */
      `}</style>
    </>
  );
}
