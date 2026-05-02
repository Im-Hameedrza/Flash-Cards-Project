function HideMastered({ setIsHideMastered, setIndex, isHideMastered }) {
  return (
    <label
      onChange={(e) => {
        setIsHideMastered(e.target.checked);
        setIndex(0);
      }}
      className="  flex items-center gap-3 cursor-pointer text-[var(--neutral-900)] text-preset-4-medium"
    >
      <input
        type="checkbox"
        checked={isHideMastered}
        className="w-5 h-5 rounded border border-[var(--neutral-600)] accent-[var(--yellow-500)]"
      />
      <span>Hide Mastered</span>
    </label>
  );
}

export default HideMastered;
