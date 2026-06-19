import { client } from "@/sanity/lib/client"
import { getArticlesByTopic } from "@/sanity/lib/queries";
import { ArticleType } from "@/types/articleType";
import Article from "@/components/Article";

export default async function TopicSlug(props: { params: { slug: string } }) {

  const { slug } = await props.params;
  const topicData = await client.fetch(getArticlesByTopic, { slug }, { next: { tags: ["articleDocument"] } });

  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {topicData.map((t: ArticleType, index: number) => (
          <Article key={index} data={t} />
        ))}
      </div>
    </main>
  );
}