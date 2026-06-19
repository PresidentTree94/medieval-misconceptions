import { Image } from "sanity";

export type FigureType = {
  name: string;
  slug: { current: string };
  image: Image & { alt: string };
  born: string;
  died: string;
  tagline: string;
  body: any;
}