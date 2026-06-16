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
          <div className="mt-20 max-w-5xl w-full mx-auto h-52 rounded-2xl overflow-hidden">
            <img src="book.jpg" alt="book" className="w-full h-full object-cover" />
          </div>
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
        </div>
      </section>
      <section>
        <div>
          <h2>Categories</h2>
        </div>
      </section>
      <section>
        <div>
          <h2>Topics</h2>
        </div>
      </section>
      <section>
        <div>
          <h2>Historical Figures</h2>
        </div>
      </section>
      <section><div>Newsletter</div></section>
    </main>
  );
}
