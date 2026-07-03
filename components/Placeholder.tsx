export default function Placeholder({ backgroundColor, type }: { backgroundColor: string; type: string }) {
  return (
    <div className={`bg-${backgroundColor} px-6 py-10 rounded-xl w-full`}>
      <p className="text-center text-subtext">No {type} available at the moment.</p>
    </div>
  );
}