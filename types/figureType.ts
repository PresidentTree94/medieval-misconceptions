import { Image } from "sanity";

export type FigureType = {
  name: string;
  slug: { current: string };
  image: Image & { alt: string };
  born: string;
  died: string;
  father: { name: string; slug: string | null; };
  mother: { name: string; slug: string | null; };
  tagline: string;
  body: any;
}