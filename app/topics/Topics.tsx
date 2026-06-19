import Page from "@/components/Page";
import Topic from "@/components/Topic";
import { TopicType } from "@/types/topicType";

export default function TopicPage({ data }: { data: TopicType[] }) {
  return (
    <Page
      tiny="Explore by subject"
      title="All Topics"
      subtext="Tags cut across categories — follow a thread and see how the same subject appears across all walks of life.">
      <div className="flex flex-wrap gap-3 mt-10">
        {data.map((d, index) => (
          <Topic key={index} data={d} />
        ))}
      </div>
    </Page>
  );
}