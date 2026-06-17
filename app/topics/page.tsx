import Page from "@/components/Page";

export default function Topics() {
  return (
    <Page
      tiny="Explore by subject"
      title="All Topics"
      subtext="Tags cut across categories — follow a thread and see how the same subject appears across all walks of life.">
      <div className="flex flex-wrap gap-3 mt-10">
        <a className="text-sm font-medium bg-background-dark px-4 py-2 rounded-full">Topic</a>
      </div>
    </Page>
  );
}