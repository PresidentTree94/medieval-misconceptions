import { Image } from "sanity";

export type FigureType = {
  name: string;
  slug: string;
  image: Image & { alt: string };
  born: string;
  died: string;
  tagline: string;
  body: any;
}