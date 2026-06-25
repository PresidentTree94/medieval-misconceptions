import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client"
import { getFigureBySlug } from "@/sanity/lib/queries";
import { FigureType } from "@/types/figureType";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";

export default async function FigureSlug(props: { params: { slug: string } }) {

  const { slug } = await props.params;
  const figureData = await client.fetch<FigureType>(getFigureBySlug, { slug }, { next: { tags: ["figureDocument"] } });
  const { name, image, born, died, father, mother, tagline, body } = figureData;
  const textClass = "text-sm font-medium";

  return (
    <main>
      <div className="!max-w-3xl lg:!max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="relative aspect-square max-w-95 w-full rounded-2xl overflow-hidden">
            <Image src={image ? urlFor(image).url() : "https://placehold.co/512/png"} alt={image ? image.alt : ""} fill sizes="100%" className="object-cover" />
          </div>
          <div className="w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl">{name}</h1>
            <p className="text-primary text-base md:text-lg mt-3">{tagline}</p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="bg-background-dark p-4 rounded-xl border border-secondary">
                <p className="text-xs font-semibold uppercase tracking-wider text-tiny">Born</p>
                <p className={textClass}>{born}</p>
              </div>
              <div className="bg-background-dark p-4 rounded-xl border border-secondary">
                <p className="text-xs font-semibold uppercase tracking-wider text-tiny">Died</p>
                <p className={textClass}>{died}</p>
              </div>
              <div className="bg-background-dark p-4 rounded-xl border border-secondary">
                <p className="text-xs font-semibold uppercase tracking-wider text-tiny">Father</p>
                {father.slug ? <Link href={`/figures/${father.slug}`} className={`${textClass} underline`}>{father.name}</Link> : <p className={textClass}>{father.name}</p>}
              </div>
              <div className="bg-background-dark p-4 rounded-xl border border-secondary">
                <p className="text-xs font-semibold uppercase tracking-wider text-tiny">Mother</p>
                {mother.slug ? <Link href={`/figures/${mother.slug}`} className={`${textClass} underline`}>{mother.name}</Link> : <p className={textClass}>{mother.name}</p>}
              </div>
            </div>
          </div>
        </div>
        <article className="max-w-3xl mx-auto mt-12 border-t border-secondary pt-10">
          <PortableText value={body} />
        </article>
      </div>
    </main>
  );
}