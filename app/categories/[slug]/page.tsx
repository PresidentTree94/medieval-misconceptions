import { client } from "@/sanity/lib/client"
import { getArticlesByCategory, getCategoryBySlug } from "@/sanity/lib/queries";
import Slug from "@/components/Slug";

export default async function CategorySlug(props: { params: { slug: string } }) {

  const { slug } = await props.params;
  const categoryData = await client.fetch(getCategoryBySlug, { slug }, { next: { tags: ["categoryDocument"] } })
  const articleData = await client.fetch(getArticlesByCategory, { slug }, { next: { tags: ["articleDocument"] } });

  return (
    <Slug slugData={categoryData} articleData={articleData} />
  );
}