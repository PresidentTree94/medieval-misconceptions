import { client } from "@/sanity/lib/client"
import { getAllFigures } from "@/sanity/lib/queries";
import FigurePage from "./Figures";

export default async function Figures() {

  const figureData = await client.fetch(getAllFigures, {}, { next: { tags: ["figureDocument"] } });

  return (
    <FigurePage data={figureData} />
  );
}