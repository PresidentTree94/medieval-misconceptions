import Page from "@/components/Page";

export default function Figures() {
  return (
    <Page
      tiny="People Who Shaped the Era"
      title="Historical Figures"
      subtext="The real people behind the myths, legends, and forgotten stories. Discover who actually did what.">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10"></div>
    </Page>
  );
}