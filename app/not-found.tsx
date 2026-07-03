"use client";
import { usePathname } from "next/navigation";
import Placeholder from "@/components/Placeholder";

export default function NotFound() {

  const pathname = usePathname();
  const placeholderType = (() => {
    if (pathname.includes("/articles/")) {
      return "article";
    }
    if (pathname.includes("/categories/")) {
      return "category";
    }
    if (pathname.includes("/topics/")) {
      return "topic";
    }
    if (pathname.includes("/figures/")) {
      return "figure";
    }
    return "page";
  })();

  return (
    <main className="flex items-center">
      <div className="w-full">
        <Placeholder backgroundColor="background-dark" type={placeholderType} />
      </div>
    </main>
  );
}