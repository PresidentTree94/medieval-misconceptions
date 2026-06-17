import Section from "@/components/Section";

const stats = [
  { label: "Categories", number: 0 },
  { label: "Topics", number: 0 },
  { label: "Figures", number: 0 }
]

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen flex">
        <div className="absolute inset-0 overflow-hidden">
          <img src="background.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/25 to-background-light"></div>
        <div className="relative p-8 w-full flex flex-col items-center justify-center">
          <div className="text-center flex flex-col items-center">
            <h1>Everything You Know About the Middle Ages Is Probably Wrong</h1>
            <p className="font-body font-light text-xl text-background-light/85 max-w-xl mt-5 mb-8">Challenging centuries of embellished history, one well-researched article at a time. The truth is stranger — and more fascinating — than fiction.</p>
            <button className="bg-foreground text-background-light px-8 py-3.5 rounded-full font-medium text-sm">Start Reading</button>
          </div>
          <img src="book.jpg" alt="Book" className="mt-20 max-w-5xl w-full mx-auto h-52 rounded-2xl object-cover" />
        </div>
      </section>
      <section>
        <div className="grid grid-cols-2">
          <div className="p-12">
            <h2>Why We Started This Blog</h2>
            <p className="mt-4 mb-10 text-sm text-subtext">The Middle Ages span a thousand years of human history, yet pop culture reduces them to mud, misery, and monotony. We started this blog because the real stories are way more interesting — and we got tired of correcting the same myths at dinner parties.</p>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, index) => (
                <div key={index}>
                  <p className="font-display text-4xl font-bold text-primary">{s.number}</p>
                  <p className="text-sm text-subtext">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-[oklch(91%_0.04_25)]/70 via-[oklch(96%_0.02_25)]/50 to-[oklch(93%_0.06_87)]/60 flex items-center justify-center overflow-hidden">
            <div className="relative">
              <div className="absolute -top-20 -left-28 w-64 h-64 rounded-full bg-[oklch(87%_0.09_86)]/40 blur-2xl"></div>
              <div className="absolute -bottom-16 -right-20 w-56 h-40 rounded-3xl bg-[oklch(84%_0.07_25)]/30 rotate-12 blur-xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[oklch(80%_0.12_85)]/25 blur-2xl"></div>
              <div className="absolute top-10 right-16 w-32 h-32 rounded-2xl bg-[oklch(75%_0.11_25)]/20 rotate-45 blur-lg"></div>
              <div className="absolute bottom-12 left-10 w-40 h-24 rounded-full bg-[oklch(87%_0.09_86)]/35 -rotate-12 blur-xl"></div>
              <div className="relative text-center">
                <div className="w-32 h-32 bg-background-light/80 rounded-full mb-4 mx-auto"></div>
                <p className="font-display text-xl font-semibold">Veritas in Lucem</p>
                <p className="text-xs text-subtext">Truth brought to light</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2>Featured Articles</h2>
          <p className="text-sm mt-2 text-subtext">Our latest and most popular deep dives into the Middle Ages</p>
          <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="bg-background-light rounded-xl border border-[oklch(95%_0.018_82)] overflow-hidden">
              <img src="https://placehold.co/400x256" className="aspect-video w-full object-cover" />
              <div className="p-5">
                <span className="uppercase text-xs font-semibold tracking-wide bg-[oklch(93%_0.06_87)] px-2.5 py-1 rounded-full mb-2.5 inline-block">Category</span>
                <h3 className="font-semibold text-lg">Article Title Goes Here</h3>
                <p className="line-clamp-2 text-sm mt-2 mb-4">This is a summary this is a summary.</p>
                <p className="text-right text-xs text-tiny">Publish date</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section
        tiny="Explore by theme"
        title="Popular Categories"
        subtext="Every article is organized into these major themes"
        type="categories">
        <div className="grid grid-cols-3 gap-6 mt-10">
          <div className="bg-background-dark p-6 rounded-xl">
            <div className="w-12 h-12 bg-foreground rounded-lg mb-5"></div>
            <h3 className="font-bold text-lg">Category Title</h3>
            <p className="mt-2 mb-4 text-sm text-subtext">Description about what the category entails goes here description about what the category entails goes here.</p>
            <a className="text-xs font-medium text-primary">Browse articles</a>
          </div>
        </div>
      </Section>
      <Section
        tiny="Browse by subject"
        title="Hottest Topics"
        subtext="Dive into specific subjects that come up across all categories"
        type="topics">
        <div className="flex flex-wrap gap-3 mt-10">
          <a className="text-sm font-medium bg-background-light px-4 py-2 rounded-full">Topic</a>
        </div>
      </Section>
      <Section
        tiny="Meet the people"
        title="Latest Historical Figures"
        subtext="The real people behind the myths, legends, and forgotten stories"
        type="figures">
        <div className="grid grid-cols-4 gap-6 mt-10">
          <div className="bg-background-dark rounded-xl overflow-hidden">
            <div className="relative aspect-square">
              <img src="https://placehold.co/256" className="w-full h-full object-cover" />
              <div className="absolute"></div>
            </div>
            <div className="p-4">
              <h3 className="font-bold">Name of Figure</h3>
              <span className="text-tiny text-xs font-medium">Lifespan</span>
              <p className="text-sm text-subtext mt-2">Tagline of the figure</p>
            </div>
          </div>
        </div>
      </Section>
      {/*<section><div>Newsletter</div></section>*/}
    </main>
  );
}
