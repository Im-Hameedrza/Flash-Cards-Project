import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function AllCatagories({
  setIndex,
  selected,
  setSelected,
  categoriesList,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" h-[44px] md:max-w-[170px] px-4 rounded-full border-2 border-[var(--neutral-600)] text-[var(--neutral-900)] text-preset-4-medium flex items-center justify-between"
      >
        <span className="text-[12px]">{selected}</span>
        <ChevronDownIcon className="w-5 h-5" />
      </button>
      {isOpen ? (
        <DropDown
          categoriesList={categoriesList}
          selected={selected}
          setIndex={setIndex}
          setSelected={setSelected}
        />
      ) : (
        ""
      )}
    </div>
  );
}

function DropDown({ categoriesList, setSelected, setIndex, selected }) {
  return (
    <div className="w-70 mt-1 border-1 rounded-xl text-preset-4-medium flex gap-2 flex-col absolute z-100 bg-white">
      <label htmlFor="" className="p-2 px-4 border-b flex gap-3 items-center">
        <input
          className="w-5 h-5  accent-[var(--yellow-500)] border border-[var(--neutral-900)]"
          type="radio"
          name="category" // IMPORTANT (same name = one selection)
          value={"AllCatagories"}
          checked={selected === "AllCatagories"}
          onChange={(e) => {
            setSelected(e.target.value);
            setIndex(0);
          }}
        />
        <span className="text-preset-">All Catagories</span>
      </label>
      {categoriesList.map((category) => (
        <label
          key={category}
          htmlFor=""
          className="p-2 px-4 border-b flex gap-3 items-center"
        >
          <input
            className="w-5 h-5  accent-[var(--yellow-500)] border border-[var(--neutral-900)]"
            type="radio"
            name="category" // IMPORTANT (same name = one selection)
            value={category}
            checked={selected === category}
            onChange={(e) => {
              setSelected(e.target.value);
              setIndex(0);
            }}
          />
          <span className="text-preset-">{category}</span>
        </label>
      ))}
    </div>
  );
}
