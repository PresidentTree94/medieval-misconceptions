import Link from "next/link";

export default function Section({ tiny, title, subtext, type, number = 0, children }: {
  tiny: string;
  title: string;
  subtext: string;
  type: string;
  number: number;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-tiny">{tiny}</p>
        <h2 className="my-2">{title}</h2>
        <p className="text-sm text-subtext">{subtext}</p>
        {children}
        <div className="text-center mt-8">
          <Link href={"/" + type} className="inline-flex items-center gap-2 text-sm font-medium bg-foreground text-background-light px-6 py-3 rounded-full">View all {number} {type}<i className="ri-arrow-right-line text-sm"></i></Link>
        </div>
      </div>
    </section>
  );
}