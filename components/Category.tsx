import Link from "next/link";
import { CategoryType } from "@/types/categoryType";

export default function Category({ data }: { data: CategoryType }) {

  const { title, slug, icon, description } = data;

  return (
    <Link href={`/categories/${slug.current}`} className="bg-background-dark p-6 rounded-xl group hover:bg-secondary/50 transition-colors">
      <div className="w-12 h-12 bg-foreground rounded-lg mb-5 flex justify-center items-center transition-colors group-hover:bg-primary">
        <i className={`${icon} text-xl text-background-light`}></i>
      </div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="mt-2 mb-4 text-sm text-subtext">{description}</p>
      <span className="text-xs font-medium text-primary flex items-center gap-1">Browse articles<i className="ri-arrow-right-line text-xs"></i></span>
    </Link>
  );
}