import { client } from "@/sanity/lib/client"
import { getAllCategories, getAllFigures, getAllTopics } from "@/sanity/lib/queries";
import HomePage from "@/components/Home";

export default async function Home() {

  const categoryData = await client.fetch(getAllCategories, {}, { next: { tags: ["categoryDocument"] } });
  const topicData = await client.fetch(getAllTopics, {}, { next: { tags: ["topicDocument"] } });
  const figureData = await client.fetch(getAllFigures, {}, { next: { tags: ["figureDocument"] } });

  return (
    <HomePage categories={categoryData} topics={topicData} figures={figureData} />
  );
}
