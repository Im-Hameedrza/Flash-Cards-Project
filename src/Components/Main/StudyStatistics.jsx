import {
  Squares2X2Icon,
  SparklesIcon,
  BookOpenIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";

export default function StudyStatistics({ newFlashCards }) {
  const showNumOfMastered = () => {
    const numOfMastered = newFlashCards.filter((card) => card.knownCount === 5);
    return numOfMastered;
  };

  const showNumOfInProgress = () => {
    const NumOfInProgress = newFlashCards.filter(
      (card) => card.knownCount < 5 && card.knownCount > 0,
    );
    return NumOfInProgress;
  };

  const showNumOfNotStarted = () => {
    const showNumOfNotStarted = newFlashCards.filter(
      (card) => card.knownCount === 0,
    );
    return showNumOfNotStarted;
  };

  const stats = [
    {
      title: "Total cards",
      value: newFlashCards.length,
      bgColor: "bg-[var(--blue-400)]",
      icon: <Squares2X2Icon className="w-10 h-10" />,
    },
    {
      title: "Mastered",
      value: showNumOfMastered().length,
      bgColor: "bg-[var(--teal-400)]",
      icon: <SparklesIcon className="w-10 h-10" />,
    },
    {
      title: "In Progress",
      value: showNumOfInProgress().length,
      bgColor: "bg-[var(--pink-500)]",
      icon: <BookOpenIcon className="w-10 h-10" />,
    },
    {
      title: "Not Started",
      value: showNumOfNotStarted().length,
      bgColor: "bg-[var(--pink-400)]",
      icon: <InboxIcon className="w-10 h-10" />,
    },
  ];

  return (
    <section className="w-full max-w-[370px] md:max-w-[704px] lg:min-w-[810px] xl:min-w-[400px] rounded-[24px] xl:min-h-[709px]  border-[3px] border-[var(--neutral-900)] bg-[var(--neutral-0)] p-5 md:p-6">
      <h2 className="text-preset-1-mobile md:text-[32px] md:leading-[120%] md:font-bold text-[var(--neutral-900)]">
        Study Statistics
      </h2>

      <div className="mt-6  grid md:grid-cols-2 gap-4 xl:grid-cols-1">
        {stats.map((item) => (
          <div
            key={item.title}
            className="overflow-hidden rounded-[22px]  border-[3px] border-[var(--neutral-900)] bg-[var(--neutral-0)] flex md:min-h-[140px] max-h-[150px]"
          >
            <div className="flex-1 px-6 py-5 flex flex-col justify-between">
              <p className="text-preset-3 text-[var(--neutral-900)]">
                {item.title}
              </p>

              <p className="text-[48px] leading-none font-bold text-[var(--neutral-900)]">
                {item.value}
              </p>
            </div>

            <div
              className={`w-[122px] border-l-2 border-[var(--neutral-900)] flex items-center justify-center text-[var(--neutral-900)] ${item.bgColor}`}
            >
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
