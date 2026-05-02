import AllCatagories from "../Main/AllCatagories";
import HideMastered from "../Main/HideMastered";
import ShuffleBtn from "../Main/ShuffleBtn";

function ActionBtns({
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
      <div className="p-3 flex justify-between my-5 border-[var(--neutral-600)]">
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
    </div>
  );
}

export default ActionBtns;
