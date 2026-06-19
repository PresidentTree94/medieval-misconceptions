import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client"
import { getAllArticles, getAllCategories, getAllFigures, getAllTopics } from "@/sanity/lib/queries";
import { ArticleType } from "@/types/articleType";
import { CategoryType } from "@/types/categoryType";
import { TopicType } from "@/types/topicType";
import { FigureType } from "@/types/figureType";
import Section from "@/components/Section";
import Article from "@/components/Article";
import Category from "@/components/Category";
import Figure from "@/components/Figure";

export default async function Home() {

  const articleData = await client.fetch(getAllArticles, {}, { next: { tags: ["articleDocument"] } });
  const categoryData = await client.fetch(getAllCategories, {}, { next: { tags: ["categoryDocument"] } });
  const topicData = await client.fetch(getAllTopics, {}, { next: { tags: ["topicDocument"] } });
  const figureData = await client.fetch(getAllFigures, {}, { next: { tags: ["figureDocument"] } });

  const stats = [
    { label: "Categories", number: categoryData.length },
    { label: "Topics", number: topicData.length },
    { label: "Figures", number: figureData.length }
  ];

  return (
    <main className="!py-0">
      <section className="relative min-h-screen flex">
        <Image src="/background.jpg" alt="Background" fill className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/25 to-background-light"></div>
        <div className="relative p-8 mt-16 w-full flex flex-col items-center justify-center">
          <div className="text-center flex flex-col items-center">
            <h1 className="text-background-light max-w-3xl text-4xl md:text-5xl lg:text-6xl">Everything You Know About the Middle Ages Is Probably Wrong</h1>
            <p className="font-body font-light text-lg md:text-xl text-background-light/85 max-w-xl mt-5 mb-8">Challenging centuries of embellished history, one well-researched article at a time. The truth is stranger — and more fascinating — than fiction.</p>
            <a href="#articles" className="bg-foreground text-background-light px-8 py-3.5 rounded-full font-medium text-sm flex items-center gap-2">Start Reading<i className="ri-arrow-down-line text-base"></i></a>
          </div>
          <Image src="/book.jpg" alt="Book" width={1} height={1} sizes="100vw" className="mt-20 max-w-5xl w-full mx-auto h-32 md:h-42 lg:h-52 rounded-2xl object-cover" />
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-0">
          <div className="sm:p-8 lg:p-12">
            <h2>Why We Started This Blog</h2>
            <p className="mt-4 mb-10 text-sm text-subtext">The Middle Ages span a thousand years of human history, yet pop culture reduces them to mud, misery, and monotony. We started this blog because the real stories are way more interesting — and we got tired of correcting the same myths at dinner parties.</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {stats.map((s, index) => (
                <div key={index}>
                  <p className="font-display text-3xl md:text-4xl font-bold text-primary">{s.number}</p>
                  <p className="text-xs md:text-sm text-subtext">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-[oklch(91%_0.04_25)]/70 via-[oklch(96%_0.02_25)]/50 to-accent/60 flex items-center justify-center rounded-xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-20 -left-28 w-64 h-64 rounded-full bg-[oklch(87%_0.09_86)]/40 blur-2xl"></div>
              <div className="absolute -bottom-16 -right-20 w-56 h-40 rounded-3xl bg-[oklch(84%_0.07_25)]/30 rotate-12 blur-xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[oklch(80%_0.12_85)]/25 blur-2xl"></div>
              <div className="absolute top-10 right-16 w-32 h-32 rounded-2xl bg-[oklch(75%_0.11_25)]/20 rotate-45 blur-lg"></div>
              <div className="absolute bottom-12 left-10 w-40 h-24 rounded-full bg-[oklch(87%_0.09_86)]/35 -rotate-12 blur-xl"></div>
              <div className="relative text-center p-10">
                <div className="w-32 h-32 bg-background-light/80 rounded-full mb-4 mx-auto flex items-center justify-center">
                  <i className="ri-book-open-line text-5xl text-primary"></i>
                </div>
                <p className="font-display text-xl font-semibold">Veritas in Lucem</p>
                <p className="text-xs text-subtext">Truth brought to light</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="articles">
        <div>
          <h2>Featured Articles</h2>
          <p className="text-sm mt-2 text-subtext">Our latest and most popular deep dives into the Middle Ages</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {articleData.slice(0, 6).map((a: ArticleType, index: number) => (
              <Article key={index} isLight data={a} />
            ))}
          </div>
        </div>
      </section>
      <Section
        tiny="Explore by theme"
        title="Popular Categories"
        subtext="Every article is organized into these major themes"
        type="categories"
        number={categoryData.length}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {categoryData.slice(0, 3).map((c: CategoryType, index: number) => (
            <Category key={index} data={c} />
          ))}
        </div>
      </Section>
      <Section
        tiny="Browse by subject"
        title="Hottest Topics"
        subtext="Dive into specific subjects that come up across all categories"
        type="topics"
        number={topicData.length}>
        <div className="flex flex-wrap gap-3 mt-10">
          {topicData.map((t: TopicType, index: number) => (
            <Link key={index} href={`/topics/${t.slug.current}`} className="text-sm font-medium bg-background-light px-4 py-2 rounded-full">{t.title}</Link>
          ))}
        </div>
      </Section>
      <Section
        tiny="Meet the people"
        title="Latest Historical Figures"
        subtext="The real people behind the myths, legends, and forgotten stories"
        type="figures"
        number={figureData.length}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {figureData.slice(0, 4).map((f: FigureType, index: number) => (
            <Figure key={index} data={f} />
          ))}
        </div>
      </Section>
    </main>
  );
}
