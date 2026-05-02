import React from "react";

function Category({ creactedCard, setCreatedCard }) {
  function handleCategoryInput(e) {
    const value = e.target.value;
    setCreatedCard((prevcard) => ({ ...prevcard, category: value }));
    return value;
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="text-preset-6 text-[var(--neutral-900)]">
        Category
      </label>
      <input
        onChange={handleCategoryInput}
        type="text"
        placeholder="e.g., Geography"
        className="h-[56px] w-full rounded-[6px] border border-[var(--neutral-600)] bg-[var(--neutral-0)] px-4 text-preset-5 text-[var(--neutral-900)] placeholder:text-[var(--neutral-600)] focus:outline-none focus:ring-2 focus:ring-[var(--yellow-500)]"
      />
    </div>
  );
}

export default Category;
