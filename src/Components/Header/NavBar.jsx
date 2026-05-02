import smallLogo from "../../assets/logo/logo-small.svg";
import logo from "../../assets/logo/Logo.svg";

export default function NavBar({ active, setActive }) {
  const isDesktop = window.innerWidth >= 768;
  return (
    <div className="flex justify-between items-center">
      {/* Logo */}
      <div>{isDesktop ? <Logo /> : <SmallLogo />}</div>
      {/* Nav */}
      <div className="inline-flex p-1 shadow-md/120 rounded-full border-2 border-[var(--neutral-900)] bg-[var(--neutral-0)]">
        {/* Study Mode */}
        <button
          onClick={() => setActive("study")}
          className={`tab text-preset-4-semibold
          ${active === "study" ? "tab-active" : "tab-not-active"}
        `}
        >
          Study Mode
        </button>

        {/* All Cards */}
        <button
          onClick={() => setActive("all")}
          className={`tab text-preset-4-semibold
          ${active === "all" ? "tab-active" : "tab-not-active"}
        `}
        >
          All Cards
        </button>
      </div>
    </div>
  );
}

function SmallLogo() {
  return <img className="w-10" src={smallLogo} alt="Logo" />;
}

function Logo() {
  return <img className="w-40" src={logo} alt="Logo" />;
}
