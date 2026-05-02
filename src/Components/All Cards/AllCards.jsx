import ActionBtns from "./ActionBtns";
import CreateCardForm from "./CreateCardForm";
import FlashCardItem from "./FlashCardItem";

function AllCards({
  isHideMastered,
  hideMasteredFlashCards,
  newFlashCards,
  shuffeldList,
  setShaffeledList,
  setIsHideMastered,
  flashCards,
  setFlashCards,
  selected,
  setSelected,
  categoriesList,
  index,
  setIndex,
}) {
  return (
    <div>
      <CreateCardForm
        setFlashCards={setFlashCards}
        newFlashCards={newFlashCards}
        flashCards={flashCards}
      />
      <ActionBtns
        setIndex={setIndex}
        hideMasteredFlashCards={hideMasteredFlashCards}
        selected={selected}
        setSelected={setSelected}
        categoriesList={categoriesList}
        flashCards={flashCards}
        shuffeldList={shuffeldList}
        setShaffeledList={setShaffeledList}
        index={index}
        setIsHideMastered={setIsHideMastered}
        isHideMastered={isHideMastered}
        newFlashCards={newFlashCards}
        setFlashCards={setFlashCards}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {newFlashCards.map((card) => (
          <FlashCardItem
            key={card.id}
            id={card.id}
            question={card.question}
            answer={card.answer}
            category={card.category}
            knownCount={card.knownCount}
            newFlashCards={newFlashCards}
            setFlashCards={setFlashCards}
          />
        ))}
      </div>
    </div>
  );
}

export default AllCards;
