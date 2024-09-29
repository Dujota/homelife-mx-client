"use client";

import "react-image-gallery/styles/css/image-gallery.css";

import { useMemo, useRef, useState } from "react";
import ImageGallery from "react-image-gallery";

type ListingImageGalleryProps = {
  listing: any;
};

export default function ListingImageGallery({
  listing,
}: ListingImageGalleryProps) {
  const imageGalleryRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const images = useMemo(
    () =>
      listing.attributes.property.images?.map((image, idx) => ({
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

  const handleImageClick = () => {
    // @ts-ignore
    imageGalleryRef?.current?.toggleFullScreen();
  };

  const handleScreenChange = (bool: boolean) => {
    setIsFullScreen(bool);
  };

  return (
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
  );
}
