import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
      <AnimatePresence mode="wait">
        <motion.div
          key={current.src}
          className="hero-carousel-slide"
          style={{ backgroundImage: `url('${current.src}')` }}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      </AnimatePresence>
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
