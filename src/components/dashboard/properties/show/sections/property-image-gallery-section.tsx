"use client";

import React, { useState } from "react";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface ImageItem {
  original: string;
  thumbnail: string;
}

interface PropertyImageGalleryProps {
  images: ImageItem[];
}

const PropertyImageGallery: React.FC<PropertyImageGalleryProps> = ({
  images,
}) => {
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMainImageClick = () => {
    setShowFullscreen(true);
  };

  return (
    <div className="relative">
      <div className="mb-2">
        <Image
          src={images[currentIndex].original}
          alt={`Property Image ${currentIndex + 1}`}
          width={800}
          height={600}
          className="w-full h-auto rounded-lg cursor-pointer"
          onClick={handleMainImageClick}
        />
      </div>
      <div className="flex overflow-x-auto space-x-2 pb-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex-shrink-0 cursor-pointer ${
              index === currentIndex ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              src={image.thumbnail}
              alt={`Thumbnail ${index + 1}`}
              width={100}
              height={75}
              className="rounded"
            />
          </div>
        ))}
      </div>
      {showFullscreen && (
        <div className="fixed inset-0 z-50 bg-black">
          <ImageGallery
            items={images}
            startIndex={currentIndex}
            onSlide={setCurrentIndex}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={true}
            onScreenChange={() => setShowFullscreen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default PropertyImageGallery;
