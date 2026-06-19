import Link from "next/link";
import { client } from "@/sanity/lib/client"
import { getAllTopics } from "@/sanity/lib/queries";
import Page from "@/components/Page";
import { TopicType } from "@/types/topicType";

export default async function Topics() {

  const topicData = await client.fetch(getAllTopics, {}, { next: { tags: ["topicDocument"] } });

  return (
    <Page
      tiny="Explore by subject"
      title="All Topics"
      subtext="Tags cut across categories — follow a thread and see how the same subject appears across all walks of life.">
      <div className="flex flex-wrap gap-3 mt-10">
        {topicData.map((t: TopicType, index: number) => (
          <Link key={index} href={`/topics/${t.slug.current}`} className="text-sm font-medium bg-secondary px-5 py-2.5 rounded-full">{t.title}</Link>
        ))}
      </div>
    </Page>
  );
}