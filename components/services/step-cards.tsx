type StepsProps = {
  children: React.ReactNode;
  step: number;
};

export default function StepCard({ children, step }: StepsProps) {
  return (
    <div className="rounded-2xl bg-[#191919] text-white w-full h-full overflow-hidden flex flex-col justify-between gap-4 relative">
      <div className="p-4 w-1/2">{children ?? ""}</div>
      <label className="absolute text-9xl font-medium right-0 bottom-0 pr-4">
        {step.toLocaleString().length === 1 ? `0${step}` : step}
      </label>
      <span className="bg-[#dd272d] w-full px-4 py-2 text-xl font-medium">
        STEP
      </span>
    </div>
  );
}
