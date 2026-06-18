import Page from "@/components/Page";
import Topic from "@/components/Topic";

export default function Topics() {
  return (
    <Page
      tiny="Explore by subject"
      title="All Topics"
      subtext="Tags cut across categories — follow a thread and see how the same subject appears across all walks of life.">
      <div className="flex flex-wrap gap-3 mt-10">
        <Topic />
      </div>
    </Page>
  );
}