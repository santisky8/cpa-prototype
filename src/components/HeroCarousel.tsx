import { useEffect, useState } from "react";

export interface CarouselImage {
  src: string;
  alt: string;
}

interface HeroCarouselProps {
  images: CarouselImage[];
  className?: string;
  interval?: number;
}

export default function HeroCarousel({ images, className, interval = 6000 }: HeroCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  const current = images[index];

  return (
    <div className={`hero-carousel${className ? ` ${className}` : ""}`} role="img" aria-label={current.alt}>
      <div key={current.src} className="hero-carousel-slide fade-in" style={{ backgroundImage: `url('${current.src}')` }} />
      {images.length > 1 && (
        <div className="hero-carousel-dots">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className={i === index ? "active" : ""}
              aria-label={`Show image ${i + 1} of ${images.length}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
