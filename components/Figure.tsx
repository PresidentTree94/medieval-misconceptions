export default function Figure() {
  return (
    <div className="bg-background-dark rounded-xl overflow-hidden">
      <div className="relative aspect-square">
        <img src="https://placehold.co/256" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background-dark to-transparent"></div>
      </div>
      <div className="p-4">
        <h3 className="font-bold">Name of Figure</h3>
        <span className="text-tiny text-xs font-medium">Lifespan</span>
        <p className="text-sm text-subtext mt-1">Tagline of the figure</p>
      </div>
    </div>
  );
}