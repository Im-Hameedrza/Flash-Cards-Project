import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Question from "./Question";
import Answer from "./Answer";
import Category from "./Category";
import { useState } from "react";

function CreateCardForm({ setFlashCards, newFlashCards, flashCards }) {
  const [creactedCard, setCreatedCard] = useState({
    question: "",
    answer: "",
    category: "",
    knownCount: 0,
  });

  return (
    <form className="w-full mt-10 rounded-[12px] border-[3px] border-[var(--neutral-900)] bg-[var(--neutral-0)] p-5 md:p-6 lg:p-7">
      <div className="flex flex-col gap-4">
        {/* Question */}
        <Question creactedCard={creactedCard} setCreatedCard={setCreatedCard} />

        {/* Answer */}
        <Answer creactedCard={creactedCard} setCreatedCard={setCreatedCard} />

        {/* Category */}
        <Category creactedCard={creactedCard} setCreatedCard={setCreatedCard} />

        {/* Submit btn */}
        <SubmitBtn
          setFlashCards={setFlashCards}
          flashCards={flashCards}
          creactedCard={creactedCard}
        />
      </div>
    </form>
  );
}

export default CreateCardForm;

function SubmitBtn({ setFlashCards, creactedCard, flashCards }) {
  const lastCardId = Number(flashCards.at(-1)?.id);

  function handleSubmitBtn(e) {
    if (
      !creactedCard.question ||
      !creactedCard.category ||
      !creactedCard.answer
    ) {
      e.preventDefault();
      alert("please fill required fields");
    } else {
      e.preventDefault();
      setFlashCards((prevcards) => [
        ...prevcards,
        {
          ...creactedCard,
          id: lastCardId + 1 || Number(flashCards.length) + 1,
        },
      ]);
    }
  }

  return (
    <button
      onClick={handleSubmitBtn}
      type="submit"
      className="mt-1 flex h-[40px] w-fit items-center gap-2 rounded-full border-[3px] border-[var(--neutral-900)] bg-[var(--yellow-500)] px-5 text-preset-6 text-[var(--neutral-900)] hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[var(--blue-400)]"
    >
      <PlusCircleIcon className="h-4 w-4" />
      Create Card
    </button>
  );
}
