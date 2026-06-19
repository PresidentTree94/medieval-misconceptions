import { client } from "@/sanity/lib/client"
import { getAllTopics } from "@/sanity/lib/queries";
import TopicPage from "./Topics";

export default async function Topics() {

  const topicData = await client.fetch(getAllTopics, {}, { next: { tags: ["topicDocument"] } });

  return (
    <TopicPage data={topicData} />
  );
}