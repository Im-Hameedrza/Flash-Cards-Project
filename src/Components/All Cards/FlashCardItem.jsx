import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import EditCardModal from "./EdtiCardModal";
import DeleteCardModal from "./DeleteCardModal";

function FlashCardItem({
  id,
  question,
  answer,
  category,
  knownCount,
  setFlashCards,
}) {
  const [isActionMenu, setIsActionMenu] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const percentage = (knownCount / 5) * 100;

  return (
    <article className="w-full rounded-[16px] border-[3px] border-[var(--neutral-900)] bg-[var(--neutral-0)] overflow-hidden">
      {/* Question */}
      <div className="px-4 py-4 md:px-5 md:py-5 border-b border-[var(--neutral-900)]">
        <h3 className="text-preset-4-semibold md:text-preset-3 min-h-[39px] text-[var(--neutral-900)]">
          {question}
        </h3>
      </div>

      {/* Answer */}
      <div className="min-h-[124px] px-4 py-4 md:px-5 md:py-5">
        <p className="text-preset-5-medium  text-[var(--neutral-600)] mb-2">
          Answer:
        </p>

        <p className="text-preset-5 min-h-[106px] md:text-preset-4 text-[var(--neutral-900)]">
          {answer}
        </p>
      </div>

      {/* Footer */}
      <div className="grid grid-cols-[1fr_1.2fr_40px] border-t border-[var(--neutral-900)]">
        {/* Category */}
        <div className="flex items-center justify-center px-3 py-3 border-r border-[var(--neutral-900)]">
          <span className="max-w-full truncate rounded-full border-2 border-[var(--neutral-900)] px-3 py-1 text-preset-6 text-[var(--neutral-900)]">
            {category}
          </span>
        </div>

        {/* Progress */}
        <div className="flex relative  items-center justify-center gap-3 px-3 py-3 border-r border-[var(--neutral-900)]">
          <div className="w-[64px] h-[8px] rounded-full border border-[var(--neutral-900)] bg-[var(--neutral-0)] overflow-hidden">
            <div
              className="h-full bg-[var(--neutral-900)]"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <span className="text-preset-6 text-[var(--neutral-900)]">
            {knownCount}/5
          </span>
          {isActionMenu === true ? (
            <ActionMenu
              setIsEditModal={setIsEditModal}
              id={id}
              setIsActionMenu={setIsActionMenu}
              setIsDeleteModal={setIsDeleteModal}
            />
          ) : (
            ""
          )}
        </div>

        {/* Menu */}

        <MenuActionBtn
          isActionMenu={isActionMenu}
          setIsActionMenu={setIsActionMenu}
        />
      </div>
      {isEditModal === true ? (
        <EditCardModal
          setIsEditModal={setIsEditModal}
          isEditModal={isEditModal}
          id={id}
          question={question}
          answer={answer}
          category={category}
          knownCount={knownCount}
          setFlashCards={setFlashCards}
        />
      ) : (
        ""
      )}
      {isDeleteModal === true ? (
        <DeleteCardModal
          id={id}
          question={question}
          answer={answer}
          category={category}
          knownCount={knownCount}
          setFlashCards={setFlashCards}
          setIsDeleteModal={setIsDeleteModal}
          isDeleteModal={isDeleteModal}
        />
      ) : (
        ""
      )}
    </article>
  );
}

export default FlashCardItem;

function MenuActionBtn({ setIsActionMenu, isActionMenu }) {
  function handleMenuActionBtn() {
    setIsActionMenu((prev) => !prev);
  }

  return (
    <button
      onClick={handleMenuActionBtn}
      type="button"
      aria-label="Card options"
      className="flex items-center justify-center text-[var(--neutral-900)] hover:bg-[var(--neutral-100)] focus:outline-none focus:ring-2 focus:ring-[var(--yellow-500)]"
    >
      <EllipsisVerticalIcon className="w-5 h-5" />
    </button>
  );
}

function ActionMenu({ id, setIsEditModal, setIsActionMenu, setIsDeleteModal }) {
  function handleEditCard(e) {
    setIsEditModal(true);
    setIsActionMenu(false);
  }

  function handleDeleteCard(e) {
    console.log(e.currentTarget.id);
    setIsDeleteModal(true);
    setIsActionMenu(false);
  }

  return (
    <div className="absolute bottom-10  w-[208px] rounded-[14px] border-2 border-[#3b1f12] bg-white overflow-hidden shadow-md">
      <button
        onClick={handleEditCard}
        id={id}
        className="w-full h-[50px] flex items-center gap-4 px-7 text-[#2b160c] text-[22px] font-semibold hover:bg-[#f7f1ed]"
      >
        <PencilSquareIcon className="w-7 h-7" />
        <span>Edit</span>
      </button>

      <div className="h-[2px] bg-[#3b1f12]" />

      <button
        onClick={handleDeleteCard}
        id={id}
        className="w-full h-[50px] flex items-center gap-4 px-7 text-[#2b160c] text-[22px] font-semibold hover:bg-[#f7f1ed]"
      >
        <TrashIcon className="w-7 h-7" />
        <span>Delete</span>
      </button>
    </div>
  );
}
