import {
  ChevronDownIcon,
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  ArrowPathIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import IknowThisBtn from "./IknowThisBtn";
import ResetProgressBtn from "./ResetProgressBtn";
import AllCatagories from "./AllCatagories";
import HideMastered from "./HideMastered";
import ShuffleBtn from "./ShuffleBtn";

export default function StudyLayout({
  flashCards,
  setFlashCards,
  setSelected,
  selected,
  categoriesList,
  newFlashCards,
  setIsHideMastered,
  isHideMastered,
  shuffeldList,
  setShaffeledList,
  index,
  setIndex,
}) {
  const [isAnswer, setIsAnswer] = useState(false);
  const card = newFlashCards[index];

  if (newFlashCards === undefined || newFlashCards.length === 0)
    <p>array is empty, go to all cards and create new array</p>;

  function handleShowAnswer() {
    setIsAnswer(true);
  }

  function incOrDecindex(e) {
    const name = e.currentTarget.name;

    if (name === "inc") {
      setIndex((prev) => (prev < newFlashCards.length - 1 ? prev + 1 : prev));
    }

    if (name === "dec") {
      setIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }

    setIsAnswer(false);
  }

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="min-w-[338px] rounded-[24px] lg:min-w-[816px] md:min-w-[704px] border-[3px] border-[var(--neutral-900)] bg-[var(--neutral-0)] overflow-hidden">
        {/* Top controls */}
        <div className="p-3 flex justify-between border-b-2 border-[var(--neutral-600)]">
          <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            <AllCatagories
              flashCards={flashCards}
              setIndex={setIndex}
              selected={selected}
              setSelected={setSelected}
              index={index}
              categoriesList={categoriesList}
            />
            <HideMastered
              setIndex={setIndex}
              setIsHideMastered={setIsHideMastered}
              isHideMastered={isHideMastered}
              isHideMastered={isHideMastered}
            />
          </div>
          <ShuffleBtn
            newFlashCards={newFlashCards}
            setFlashCards={setFlashCards}
            shuffeldList={shuffeldList}
            setShaffeledList={setShaffeledList}
            flashCards={flashCards}
          />
        </div>

        {/* Card section */}
        <div className="p-4 border-b-2 border-[var(--neutral-600)]">
          <div className="rounded-[22px] flex flex-col justify-center gap-2 md:min-h-[425px] border-[3px] border-[var(--neutral-900)] bg-[var(--pink-400)] px-5 py-5  relative overflow-hidden">
            {/* category badge */}
            <div className="relative z-10 flex justify-center">
              <span className="inline-flex items-center md:p-4 h-[32px] px-4 rounded-full border-2 border-[var(--neutral-900)] bg-[var(--neutral-100)] text-[var(--neutral-900)] text-preset-5-medium">
                {card.category}
              </span>
            </div>

            {/* decorative stars */}
            <div className="absolute right-8 top-10 text-[28px] z-10">✦</div>
            <div className="absolute left-9 bottom-20 text-[30px] z-10">✦</div>

            {/* content */}
            <div className="flex flex-col p-5 md:p-15 justify-between">
              <div className="gap-10 flex flex-col items-center justify-center text-center">
                <h2 className="text-[24px]  lg:text-[40px] md:text-[32px] leading-[120%] font-bold text-[var(--neutral-900)] md:max-w-[600px] max-w-[250px]">
                  {isAnswer ? card.answer : card.question}
                </h2>

                <p className=" text-preset-4 text-(--neutral-900) opacity-80">
                  <button onClick={handleShowAnswer}>
                    {isAnswer ? "" : "Click to reveal answer"}
                  </button>
                </p>
              </div>

              {/* progress */}
              <div className="flex items-center justify-center gap-3">
                {isAnswer ? "" : <ProgressBar step={card.knownCount} />}
              </div>
            </div>
          </div>

          {/* action buttons */}
          <div className="mt-5 space-y-3 md:flex md:justify-center md:gap-5">
            <IknowThisBtn
              flashCards={flashCards}
              setFlashCards={setFlashCards}
              index={index}
              setIndex={setIndex}
              newFlashCards={newFlashCards}
              setSelected={setSelected}
            />

            <ResetProgressBtn
              newFlashCards={newFlashCards}
              setFlashCards={setFlashCards}
              setIsAnswer={setIsAnswer}
              index={index}
            />
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="px-4 py-5 flex items-center justify-between">
          <button
            name="dec"
            onClick={incOrDecindex}
            className="w-12 h-12 rounded-full border-2 border-[var(--neutral-600)] flex items-center justify-center text-[var(--neutral-900)]"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          <p className="text-preset-4-medium text-[var(--neutral-600)]">
            Card {index + 1} of {newFlashCards.length}
          </p>

          <button
            name="inc"
            onClick={incOrDecindex}
            className="w-12 h-12 rounded-full border-2 border-[var(--neutral-600)] flex items-center justify-center text-[var(--neutral-900)]"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
