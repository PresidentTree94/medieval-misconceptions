import Page from "@/components/Page";
import Category from "@/components/Category";

export default function Categories() {
  return (
    <Page
      tiny="Browse by theme"
      title="All Categories"
      subtext="Every article on Medieval Misconceptions lives in one of these categories. Pick a door and step through.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <Category />
      </div>
    </Page>
  );
}