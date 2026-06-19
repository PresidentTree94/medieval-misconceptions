import Link from "next/link";
import { TopicType } from "@/types/topicType";

export default function Topic({ data }: { data: TopicType }) {
  return (
    <Link href={`/topic/${data.slug}`} className="text-sm font-medium bg-background-light px-4 py-2 rounded-full">{data.title}</Link>
  );
}