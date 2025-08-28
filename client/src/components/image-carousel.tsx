import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Image } from "@shared/schema";

interface ImageCarouselProps {
  images: Image[];
  alt: string;
  mushroomName: string;
}

export default function ImageCarousel({ images, alt, mushroomName }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImageObj = images[currentIndex];
  const currentImage = currentImageObj?.url || "https://via.placeholder.com/800x400?text=No+Image+Available";

  return (
    <div className="mb-8">
      <div className="relative rounded-xl overflow-hidden bg-muted">
        <img
          src={currentImage}
          alt={alt}
          className="w-full h-96 object-cover"
          data-testid="img-carousel-current"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-3xl font-bold mb-2" data-testid="text-mushroom-title">
            {mushroomName}
          </h1>
          {currentImageObj && (
            <p className="text-sm text-white/90" data-testid="text-image-attribution">
              {currentImageObj.attribution} and {currentImageObj.date}, used under {currentImageObj.license.includes('creativecommons.org') ? 'Creative Commons' : currentImageObj.license}
            </p>
          )}
        </div>
        
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
              onClick={prevImage}
              data-testid="button-carousel-prev"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
              onClick={nextImage}
              data-testid="button-carousel-next"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 flex space-x-1">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setCurrentIndex(index)}
                data-testid={`button-carousel-dot-${index}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
