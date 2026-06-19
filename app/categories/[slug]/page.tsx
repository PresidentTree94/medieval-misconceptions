import { client } from "@/sanity/lib/client"
import { getArticlesByCategory } from "@/sanity/lib/queries";
import { ArticleType } from "@/types/articleType";
import Article from "@/components/Article";

export default async function CategorySlug(props: { params: { slug: string } }) {

  const { slug } = await props.params;
  const categoryData = await client.fetch(getArticlesByCategory, { slug }, { next: { tags: ["articleDocument"] } });

  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {categoryData.map((c: ArticleType, index: number) => (
          <Article key={index} data={c} />
        ))}
      </div>
    </main>
  );
}