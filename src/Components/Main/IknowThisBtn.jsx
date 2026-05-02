import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useIsMastered } from "../../Context/IsMasteredProvider";

function IknowThisBtn({ setFlashCards, index, newFlashCards }) {
  const { isMastered } = useIsMastered();
  const cardId = newFlashCards.find(
    (card) => Number(card.id) === Number(newFlashCards[index].id),
  );

  function handleAddToKnownCount(e) {
    setFlashCards((prevCards) =>
      prevCards.map((card) =>
        Number(card.id) === Number(cardId.id)
          ? { ...card, knownCount: card.knownCount + 1 }
          : card,
      ),
    );
  }

  return (
    <button
      onClick={handleAddToKnownCount}
      disabled={isMastered}
      id={cardId.id}
      className=" w-full md:w-45 disabled:opacity-50 p-3 h-[48px] rounded-full border-[3px] border-[var(--neutral-900)] bg-[var(--yellow-500)] text-[var(--neutral-900)] text-preset-4-semibold flex items-center justify-center gap-2"
    >
      <CheckCircleIcon className="w-5 h-5" />
      {isMastered ? <span>Already Mastered</span> : <span>I Know This</span>}
    </button>
  );
}

export default IknowThisBtn;
