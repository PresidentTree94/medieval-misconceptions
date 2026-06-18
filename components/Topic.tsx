import Link from "next/link";

export default function Topic() {
  return (
    <Link href="/topics/test" className="text-sm font-medium bg-background-light px-4 py-2 rounded-full">Topic</Link>
  );
}