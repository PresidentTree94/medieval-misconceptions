import { client } from "@/sanity/lib/client"
import { getTopicBySlug, getArticlesByTopic } from "@/sanity/lib/queries";
import Slug from "@/components/Slug";

export default async function TopicSlug(props: { params: { slug: string } }) {

  const { slug } = await props.params;
  const topicData = await client.fetch(getTopicBySlug, { slug }, { next: { tags: ["topicDocument"] } })
  const articleData = await client.fetch(getArticlesByTopic, { slug }, { next: { tags: ["articleDocument"] } });

  return (
    <Slug slugData={topicData} articleData={articleData} />
  );
}