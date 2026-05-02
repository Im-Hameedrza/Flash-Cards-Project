import { ArrowPathIcon } from "@heroicons/react/24/outline";

function ResetProgressBtn({ setIsAnswer, setFlashCards, index,newFlashCards }) {

  const cardId = newFlashCards.find(
    (card) => Number(card.id) === Number(newFlashCards[index].id),
  );
  
  
  function handleResetProgress() {
    setIsAnswer(false);
    setFlashCards((prevCards) =>
      prevCards.map((card) =>
        Number(card.id) === Number(cardId.id)
          ? { ...card, knownCount: (card.knownCount = 0) }
          : card,
      ),
    );
  }
  return (
    <button
      onClick={handleResetProgress}
      className="w-full h-[48px] md:max-w-[183px] rounded-full border-[3px] border-[var(--neutral-900)] bg-[var(--neutral-0)] text-[var(--neutral-900)] text-preset-4-semibold flex items-center justify-center gap-2"
    >
      <ArrowPathIcon className="w-5 h-5" />
      <span>Reset Progress</span>
    </button>
  );
}

export default ResetProgressBtn;
