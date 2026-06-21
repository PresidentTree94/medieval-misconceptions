export default function Page({ tiny, title, subtext, children }: {
  tiny: string;
  title: string;
  subtext: string;
  children: React.ReactNode;
}) {
  return (
    <main>
      <div>
        <p className="tiny">{tiny}</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl my-3">{title}</h1>
        <p className="text-subtext text-sm max-w-lg">{subtext}</p>
        {children}
      </div>
    </main>
  );
}