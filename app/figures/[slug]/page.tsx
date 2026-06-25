import Image from "next/image";
import { client } from "@/sanity/lib/client"
import { getFigureBySlug } from "@/sanity/lib/queries";
import { FigureType } from "@/types/figureType";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";

export default async function FigureSlug(props: { params: { slug: string } }) {

  const { slug } = await props.params;
  const figureData = await client.fetch<FigureType>(getFigureBySlug, { slug }, { next: { tags: ["figureDocument"] } });

  const stats = [
    { label: "Born", text: figureData.born },
    { label: "Died", text: figureData.died },
    { label: "Card", text: "Info" },
    { label: "Card", text: "Info" }
  ];

  return (
    <main>
      <div className="!max-w-3xl lg:!max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="relative aspect-square max-w-95 w-full rounded-2xl overflow-hidden">
            <Image src={figureData.image ? urlFor(figureData.image).url() : "https://placehold.co/512/png"} alt={figureData.image ? figureData.image.alt : ""} fill sizes="100%" className="object-cover" />
          </div>
          <div className="w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl">{figureData.name}</h1>
            <p className="text-primary text-base md:text-lg mt-3">{figureData.tagline}</p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {stats.map((s, index) => (
                <div key={index} className="bg-background-dark p-4 rounded-xl border border-secondary">
                  <p className="text-xs font-semibold uppercase tracking-wider text-tiny">{s.label}</p>
                  <p className="text-sm font-medium">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <article className="max-w-3xl mx-auto mt-12 border-t border-secondary pt-10">
          <PortableText value={figureData.body} />
        </article>
      </div>
    </main>
  );
}