import { client } from "@/sanity/lib/client"
import { getAllCategories } from "@/sanity/lib/queries";
import CategoryPage from "./Categories";

export default async function Categories() {

  const categoryData = await client.fetch(getAllCategories, {}, { next: { tags: ["categoryDocument"] } });

  return (
    <CategoryPage data={categoryData} />
  );
}