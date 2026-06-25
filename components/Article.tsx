import Link from "next/link";
import Image from "next/image";
import { ArticleType } from "@/types/articleType";
import { urlFor } from "@/sanity/lib/image";

export default function Article({ isLight, data }: { isLight?: boolean, data: ArticleType }) {

  const { title, slug, image, category, topics, publishedAt } = data;

  return (
    <Link href={`/articles/${slug.current}`} className={`${isLight ? "bg-background-light" : "bg-background-dark"} rounded-xl border border-secondary overflow-hidden group transition-colors hover:border-primary/25`}>
      <div className="relative aspect-video overflow-hidden">
        <Image src={image ? urlFor(image).url() : "https://placehold.co/400x256/png"} alt={image ? image.alt : ""} fill sizes="100%" className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <span className="uppercase text-xs font-semibold tracking-wide bg-accent px-2.5 py-1 rounded-full mb-2.5 inline-block text-subtext">{category.title}</span>
        <h3 className="font-semibold md:text-lg line-clamp-2 transition-colors group-hover:text-primary">{title}</h3>
        <p className="line-clamp-2 text-sm mt-2 text-subtext">This is a summary this is a summary.</p>
        <div className="mt-3 text-xs font-medium flex flex-wrap gap-1.5">
          {topics.map((t, index) => (
            <span key={index} className="inline-block bg-secondary px-2 py-0.5 rounded-full">{t.title}</span>
          ))}
        </div>
        <div className="text-xs flex justify-between mt-4">
          <p className="text-tiny flex items-center gap-1.5"><i className="ri-calendar-line text-xs"></i>{publishedAt.split("T")[0]}</p>
          <span className="font-medium text-primary flex items-center gap-1">Read article<i className="ri-arrow-right-line text-xs"></i></span>
        </div>
      </div>
    </Link>
  );
}