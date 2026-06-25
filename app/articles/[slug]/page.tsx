import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client"
import { getArticleBySlug } from "@/sanity/lib/queries";
import { ArticleType } from "@/types/articleType";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";

export default async function ArticleSlug(props: { params: { slug: string } }) {

  const { slug } = await props.params;
  const articleData = await client.fetch<ArticleType>(getArticleBySlug, { slug }, { next: { tags: ["articleDocument"] } });

  return (
    <main className="!py-0">
      <section className="relative h-90 md:h-120">
        <Image src={articleData.image ? urlFor(articleData.image).url() : "https://placehold.co/800x512/png"} alt={articleData.image ? articleData.image.alt : ""} fill sizes="100%" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/45 via-foreground/25 to-foreground/60"></div>
      </section>
      <article className="relative -mt-20 mb-16 px-10 max-w-3xl mx-auto">
        <div className="bg-background-light p-10 rounded-2xl border border-secondary">
          <div className="flex items-center gap-3">
            <Link href={`/categories/${articleData.category.slug.current}`} className="uppercase text-xs font-semibold tracking-wide bg-accent px-2.5 py-1 rounded-full inline-block text-subtext">{articleData.category.title}</Link>
            <p className="text-tiny flex items-center gap-1.5 text-xs">{articleData.publishedAt.split("T")[0]}</p>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl mt-5 mb-8">{articleData.title}</h1>
          <PortableText value={articleData.body} />
          <div className="flex flex-wrap items-center gap-2 mt-10 text-xs font-medium border-t border-secondary pt-6">
            <span>Topics:</span>
            {articleData.topics.map((t, index) => (
              <Link key={index} href={`/topics/${t.slug.current}`} className="bg-secondary px-3 py-1 rounded-full text-subtext">{t.title}</Link>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}