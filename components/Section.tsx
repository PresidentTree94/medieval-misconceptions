export default function Section({ tiny, title, subtext, type, children }: {
  tiny: string;
  title: string;
  subtext: string;
  type: string;
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
          <button className="text-sm font-medium bg-foreground text-background-light px-6 py-3 rounded-full">View all 0 {type}</button>
        </div>
      </div>
    </section>
  );
}