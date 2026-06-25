import Link from "next/link";
import Image from "next/image";
import { FigureType } from "@/types/figureType";
import { urlFor } from "@/sanity/lib/image";

export default function Figure({ data }: { data: FigureType }) {
  return (
    <Link href={`/figures/${data.slug.current}`} className="bg-background-dark rounded-xl border border-secondary overflow-hidden group transition-colors hover:border-primary/25">
      <div className="relative aspect-square overflow-hidden">
        <Image src={data.image ? urlFor(data.image).url() : "https://placehold.co/256/png"} alt={data.image ? data.image.alt : ""} fill sizes="100%" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background-dark to-transparent"></div>
      </div>
      <div className="p-4">
        <h3 className="font-bold transition-colors group-hover:text-primary">{data.name}</h3>
        <span className="text-tiny text-xs font-medium">{data.born} - {data.died}</span>
        <p className="text-sm text-subtext mt-1">{data.tagline}</p>
      </div>
    </Link>
  );
}