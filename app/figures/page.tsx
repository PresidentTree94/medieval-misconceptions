import { client } from "@/sanity/lib/client"
import { getAllFigures } from "@/sanity/lib/queries";
import Page from "@/components/Page";
import { FigureType } from "@/types/figureType";
import Figure from "@/components/Figure";

export default async function Figures() {

  const figureData = await client.fetch(getAllFigures, {}, { next: { tags: ["figureDocument"] } });

  return (
    <Page
      tiny="People Who Shaped the Era"
      title="Historical Figures"
      subtext="The real people behind the myths, legends, and forgotten stories. Discover who actually did what.">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {figureData.map((f: FigureType, index: number) => (
          <Figure key={index} data={f} />
        ))}
      </div>
    </Page>
  );
}