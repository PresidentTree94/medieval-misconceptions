import Link from "next/link";
import { CategoryType } from "@/types/categoryType";

export default function Category({ data }: { data: CategoryType }) {
  return (
    <Link href={`/categories/${data.slug.current}`} className="bg-background-dark p-6 rounded-xl group hover:bg-secondary/50 transition-colors">
      <div className="w-12 h-12 bg-foreground rounded-lg mb-5 flex justify-center items-center transition-colors group-hover:bg-primary">
        <i className={`${data.icon} text-xl text-background-light`}></i>
      </div>
      <h3 className="font-bold text-lg">{data.title}</h3>
      <p className="mt-2 mb-4 text-sm text-subtext">{data.description}</p>
      <span className="text-xs font-medium text-primary flex items-center gap-1">Browse articles<i className="ri-arrow-right-line text-xs"></i></span>
    </Link>
  );
}