import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";

function ShuffleBtn({
  newFlashCards,

  setShaffeledList,
}) {
  function handleShuffleBtn() {
    const shuffledArray = [...newFlashCards];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));

      [shuffledArray[i], shuffledArray[random]] = [
        shuffledArray[random],
        shuffledArray[i],
      ];
    }
    setShaffeledList(shuffledArray);
  }

  return (
    <button className="w-[120px] h-[44px] px-4 rounded-full border-2 border-[var(--neutral-600)] text-[var(--neutral-900)] text-preset-4-medium flex items-center justify-center gap-2">
      <ArrowsRightLeftIcon className="w-5 h-5" />
      <span className="text-[14px]">Shuffle</span>
    </button>
  );
}

export default ShuffleBtn;
