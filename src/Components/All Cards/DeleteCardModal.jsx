export default function DeleteCardModal({
  setIsDeleteModal,
  id,
  question,
  answer,
  category,
  knownCount,
  setFlashCards,
  isDeleteModal,
}) {
  function closeModal() {
    setIsDeleteModal(false);
  }

  function handleDelete() {
    setFlashCards((prevCards) =>
      prevCards.filter((card) => Number(card.id) !== Number(id)),
    );
    setIsDeleteModal(false);
  }

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[360px] rounded-[16px] border-[3px] border-[#3b1f12] bg-white overflow-hidden shadow-md"
      >
        {/* Content */}
        <div className="px-6 py-5">
          <h2 className="text-[22px] font-bold text-[#2b160c]">
            Delete this card?
          </h2>
          <p className="mt-2 text-[16px] text-[#5a3a2c]">
            This action can’t be undone.
          </p>
        </div>

        {/* Divider */}
        <div className="h-[2px] bg-[#3b1f12]" />

        {/* Buttons */}
        <div className="flex justify-end gap-3 px-6 py-4">
          <button
            onClick={closeModal}
            className="h-[44px] px-5 rounded-full border-2 border-[#3b1f12] text-[#2b160c] font-semibold hover:bg-[#f7f1ed]"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="h-[44px] px-5 rounded-full border-2 border-[#3b1f12] bg-[#ffcc33] text-[#2b160c] font-semibold shadow-[0_3px_0_#3b1f12]"
          >
            Delete Card
          </button>
        </div>
      </div>
    </div>
  );
}
