import { useState } from "react";

export default function EditCardModal({
  isEditModal,
  setIsEditModal,
  id,
  question,
  answer,
  category,
  knownCount,
  setFlashCards,
}) {
  const [editedCard, setEditedCard] = useState({
    question: "",
    answer: "",
    category: "",
  });

  if (!isEditModal) return null;

  function hanldeQuestionEdit(e) {
    const value = e.currentTarget.value;
    setEditedCard((prev) => ({ ...prev, question: value }));
  }

  function hanldeAnswerEdit(e) {
    const value = e.currentTarget.value;
    setEditedCard((prev) => ({ ...prev, answer: value }));
  }

  function hanldeCategoryEdit(e) {
    const value = e.currentTarget.value;
    setEditedCard((prev) => ({ ...prev, category: value }));
  }

  function handleSubmitEdit(e) {
    e.preventDefault();
    const cardId = Number(e.currentTarget.id);

    setFlashCards((prevCards) =>
      prevCards.map((card) =>
        Number(card.id) === cardId
          ? {
              id: card.id,
              question: editedCard.question || card.question,
              answer: editedCard.answer || card.answer,
              category: editedCard.category || card.category,
              knownCount: 0,
            }
          : card,
      ),
    );
  }

  function closeModal() {
    setIsEditModal(false);
  }

  return (
    <div
      onClick={closeModal}
      className=" fixed inset-0 z-50 flex items-center justify-center bg-black/20"
    >
      {/* Modal Box */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[360px] rounded-[16px] border-[3px] border-[#3b1f12] bg-white px-5 py-6 shadow-md relative"
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-[24px] font-bold text-[#3b1f12]"
        >
          ×
        </button>

        <h2 className="mb-6 text-[26px] font-bold text-[#2b160c]">
          Edit your card
        </h2>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-[17px] font-bold text-[#3b1f12]">
              Question
            </label>
            <input
              type="text"
              onChange={hanldeQuestionEdit}
              defaultValue={question}
              className="h-[58px] w-full rounded-[6px] border border-[#3b1f12] px-4 text-[17px] outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-[17px] font-bold text-[#3b1f12]">
              Answer
            </label>
            <textarea
              onChange={hanldeAnswerEdit}
              defaultValue={answer}
              className="h-[106px] w-full resize-none rounded-[6px] border border-[#3b1f12] px-4 py-3 text-[17px] outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-[17px] font-bold text-[#3b1f12]">
              Category
            </label>
            <input
              type="text"
              defaultValue={category}
              onChange={hanldeCategoryEdit}
              className="h-[58px] w-full rounded-[6px] border border-[#3b1f12] px-4 text-[17px] outline-none"
            />
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              id={id}
              onClick={handleSubmitEdit}
              className="h-[48px] rounded-full border-2 border-[#3b1f12] bg-[#ffcc33] px-6 text-[17px] font-bold shadow-[0_3px_0_#3b1f12]"
            >
              Update Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
