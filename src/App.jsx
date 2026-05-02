import "./App.css";
import NavBar from "./Components/Header/NavBar";
import StudyLayout from "./Components/Main/StudyLayout";
import StudyStatistics from "./Components/Main/StudyStatistics";
import data from "../data.json";
import { useState } from "react";

import IsMasteredProvider from "./Context/IsMasteredProvider";
import AllCards from "./Components/All Cards/AllCards";

function App() {
  const [active, setActive] = useState("all");
  const [flashCards, setFlashCards] = useState(data.flashcards);
  const [selected, setSelected] = useState("AllCatagories");
  const categoriesList = [...new Set(flashCards.map((card) => card.category))];
  const [isHideMastered, setIsHideMastered] = useState(false);
  const [shuffeldList, setShaffeledList] = useState([]);
  const [index, setIndex] = useState(0);

  const newShuffeledList = shuffeldList.length > 0 ? shuffeldList : flashCards;

  const newFlashCard =
    selected === "AllCatagories"
      ? flashCards
      : newShuffeledList.filter((card) => card.category === selected);

  const hideMasteredFlashCards =
    isHideMastered === false
      ? newFlashCard
      : newFlashCard.filter((card) => Number(card.knownCount) !== 5);

  console.log(flashCards);

  return (
    <IsMasteredProvider>
      <div className="min-h-screen bg-[#f7f3f0]">
        <div className="py-4 grid mx-auto w-full max-w-[370px] md:max-w-[760px] lg:max-w-[1300px] px-4 md:px-6 lg:px-8">
          <div className="">
            <NavBar active={active} setActive={setActive} />
          </div>
          {/* Study layout */}
          {active === "study" ? (
            <StudySection
              isHideMastered={isHideMastered}
              hideMasteredFlashCards={hideMasteredFlashCards}
              newFlashCard={newFlashCard}
              setIsHideMastered={setIsHideMastered}
              flashCards={flashCards}
              setFlashCards={setFlashCards}
              selected={selected}
              setSelected={setSelected}
              categoriesList={categoriesList}
              index={index}
              shuffeldList={shuffeldList}
              setShaffeledList={setShaffeledList}
              setIndex={setIndex}
            />
          ) : (
            <AllCards
              newFlashCards={
                isHideMastered === true ? hideMasteredFlashCards : newFlashCard
              }
              setIsHideMastered={setIsHideMastered}
              flashCards={flashCards}
              shuffeldList={shuffeldList}
              setShaffeledList={setShaffeledList}
              setFlashCards={setFlashCards}
              selected={selected}
              setSelected={setSelected}
              categoriesList={categoriesList}
              isHideMastered={isHideMastered}
              index={index}
              setIndex={setIndex}
            />
          )}
        </div>
      </div>
    </IsMasteredProvider>
  );
}

export default App;

function StudySection({
  isHideMastered,
  hideMasteredFlashCards,
  newFlashCard,
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
    <div className="flex flex-col xl:flex-row justify-center items-center">
      <div className="flex1">
        <StudyLayout
          newFlashCards={
            isHideMastered === true ? hideMasteredFlashCards : newFlashCard
          }
          setIsHideMastered={setIsHideMastered}
          flashCards={flashCards}
          shuffeldList={shuffeldList}
          setShaffeledList={setShaffeledList}
          setFlashCards={setFlashCards}
          selected={selected}
          hideMasteredFlashCards={hideMasteredFlashCards}
          setSelected={setSelected}
          categoriesList={categoriesList}
          isHideMastered={isHideMastered}
          index={index}
          setIndex={setIndex}
        />
      </div>
      <div>
        <StudyStatistics
          newFlashCards={
            isHideMastered === true ? hideMasteredFlashCards : newFlashCard
          }
        />
      </div>
    </div>
  );
}
