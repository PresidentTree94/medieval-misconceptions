import { client } from "@/sanity/lib/client"
import { getAllCategories } from "@/sanity/lib/queries";
import Page from "@/components/Page";
import { CategoryType } from "@/types/categoryType";
import Category from "@/components/Category";
import Placeholder from "@/components/Placeholder";

export default async function Categories() {

  const categoryData = await client.fetch(getAllCategories, {}, { next: { tags: ["categoryDocument"] } });

  return (
    <Page
      tiny="Browse by theme"
      title="All Categories"
      subtext="Every article on Medieval Misconceptions lives in one of these categories. Pick a door and step through.">
      {categoryData.length === 0 ? (
        <Placeholder backgroundColor="background-dark" type="categories" />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.map((c: CategoryType, index: number) => (
            <Category key={index} data={c} />
          ))}
        </div>
      )}
    </Page>
  );
}