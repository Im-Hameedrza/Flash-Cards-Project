import { AcademicCapIcon } from "@heroicons/react/20/solid";
import { useIsMastered } from "../../Context/IsMasteredProvider";

export default function ProgressBar({ step }) {
  const { isMastered, setIsMastered } = useIsMastered();
  const total = 5;

  const percentage = (step / total) * 100;

  if (step / total === 1) {
    setIsMastered(true);
  } else setIsMastered(false);

  return isMastered ? (
    <Mastered />
  ) : (
    <ProgressStatus percentage={percentage} step={step} total={total} />
  );
}

function ProgressStatus({ percentage, step, total }) {
  return (
    <div className="flex items-center gap-4 p-3">
      <div className="w-[64px] h-[10px] rounded-full border border-[var(--neutral-900)] bg-[var(--neutral-0)] overflow-hidden">
        <div
          className="h-full bg-[var(--neutral-900)] transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div>{`${step} / ${total}`}</div>
    </div>
  );
}

function Mastered() {
  return (
    <div className="rounded-full m-2 bg-[var(--teal-400)] px-3 outline-2 flex py-1 gap-2 items-center">
      <AcademicCapIcon className="size-5" />
      Mastered 5/5
    </div>
  );
}
