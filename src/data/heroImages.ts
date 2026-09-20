import type { CarouselImage } from "../components/HeroCarousel";

function unsplash(id: string, w = 1200, q = 85): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const homeHeroImages: CarouselImage[] = [
  { src: unsplash("1556761175-b413da4baf72"), alt: "Team collaborating in a modern office" },
  { src: unsplash("1543269865-cbf427effbad"), alt: "Colleagues celebrating a successful project" }
];

export const cpaHeroImages: CarouselImage[] = [
  { src: unsplash("1523240795612-9a054b0db644", 1000), alt: "Small group studying together in a library" },
  { src: unsplash("1600880292203-757bb62b4baf", 1000), alt: "Students discussing coursework over coffee" }
];

export const learnHeroImages: CarouselImage[] = [
  { src: unsplash("1524178232363-1fb2b075b655", 1000), alt: "Professional development seminar in progress" },
  { src: unsplash("1460925895917-afdab827c52f", 1000), alt: "Laptop displaying a learning progress dashboard" }
];

export const reportingHeroImages: CarouselImage[] = [
  { src: unsplash("1551434678-e076c223a692", 1000), alt: "Two professionals reviewing financial reports" },
  { src: unsplash("1454165804606-c3d57bc86b40", 1000), alt: "Close-up of hands reviewing financial documents" }
];

export const storeHeroImages: CarouselImage[] = [
  { src: unsplash("1524995997946-a1c2e315a42f", 1000), alt: "Bright modern library with curved bookshelves" },
  { src: unsplash("1513475382585-d06e58bcb0e0", 1000), alt: "Selecting a book from a well-stocked shelf" }
];

export const articleHeroImages: CarouselImage[] = [
  { src: unsplash("1516321318423-f06f85e504b3", 1000), alt: "Working on a laptop" },
  { src: unsplash("1531482615713-2afd69097998", 1000), alt: "Two colleagues reviewing data on a laptop" }
];

export const taxHeroImages: CarouselImage[] = [
  { src: unsplash("1568992687947-868a62a9f521", 1000), alt: "Team meeting in a bright, modern space" },
  { src: unsplash("1590283603385-17ffb3a7f29f", 1000), alt: "Financial market data on a dark dashboard" }
];

export const blueMountainImage = unsplash("1483728642387-6c3bdd6c93e5", 900, 88);
