import { CategoryType } from "@/types/categoryType";
import { TopicType } from "@/types/topicType";
import { ArticleType } from "@/types/articleType";
import Article from "./Article";

export default async function Slug({ slugData, articleData }: {
  slugData: CategoryType | TopicType;
  articleData: ArticleType[];
}) {

  const isCategory = "icon" in slugData;

  return (
    <main>
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-foreground text-background-light rounded-xl flex items-center justify-center">
            <i className={`${isCategory ? slugData.icon : "ri-price-tag-3-line"} text-2xl`}></i>
          </div>
          <div>
            <p className="tiny">{isCategory  ? "category" : "topic"}</p>
            <h1 className="text-3xl md:text-4xl">{slugData.title}</h1>
          </div>
        </div>
        <p className="text-sm text-subtext max-w-2xl">{isCategory ? slugData.description : `Articles tagged with "${slugData.title}" — exploring this topic across different categories.`}</p>
        <span className="inline-block mt-4 text-xs font-medium text-subtext">{articleData.length} article{articleData.length !== 1 && "s"}</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {articleData.map((c, index: number) => (
            <Article key={index} data={c} />
          ))}
        </div>
      </div>
    </main>
  );
}