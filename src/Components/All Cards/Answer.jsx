function Answer({ setCreatedCard }) {
  function handleAnswerInput(e) {
    const value = e.target.value;
    setCreatedCard((prevcard) => ({ ...prevcard, answer: value }));
    return value;
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="text-preset-6 text-[var(--neutral-900)]">Answer</label>
      <textarea
        onChange={handleAnswerInput}
        placeholder="e.g., Paris"
        className="min-h-[88px] w-full resize-none rounded-[6px] border border-[var(--neutral-600)] bg-[var(--neutral-0)] px-4 py-3 text-preset-5 text-[var(--neutral-900)] placeholder:text-[var(--neutral-600)] focus:outline-none focus:ring-2 focus:ring-[var(--yellow-500)]"
      />
    </div>
  );
}

export default Answer;
