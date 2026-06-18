import Link from "next/link";

export default function Category() {
  return (
    <Link href="/categories/test" className="bg-background-dark p-6 rounded-xl">
      <div className="w-12 h-12 bg-foreground rounded-lg mb-5 flex justify-center items-center">
        <i className="ri-book-shelf-line text-xl text-background-light"></i>
      </div>
      <h3 className="font-bold text-lg">Category Title</h3>
      <p className="mt-2 mb-4 text-sm text-subtext">Description about what the category entails goes here description about what the category entails goes here.</p>
      <span className="text-xs font-medium text-primary flex items-center gap-1">Browse articles<i className="ri-arrow-right-line text-xs"></i></span>
    </Link>
  );
}