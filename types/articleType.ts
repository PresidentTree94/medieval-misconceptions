import { Image } from "sanity";
import { CategoryType } from "./categoryType";
import { TopicType } from "./topicType";

export type ArticleType = {
  title: string;
  slug: { current: string };
  image: Image & { alt: string };
  category: CategoryType;
  topics: TopicType[];
  body: any;
  publishedAt: string;
}