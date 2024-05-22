export default function HamburgerMenu({ isClicked, setIsClicked }) {
  function handleClick(e) {
    e.stopPropagation();
    setIsClicked((prev) => !prev);
  }
  return (
    <div
      className={` transition-all duration-500 border-[1px] px-2 py-2 rounded-md border-white flex flex-col gap-1 md:hidden ${
        isClicked && "hamburger"
      }`}
      onClick={handleClick}
    >
      <div className="w-[20px] bg-white h-[2px] "></div>
      <div className="w-[20px] bg-white h-[2px] "></div>
      <div className="w-[20px] bg-white h-[2px] "></div>
    </div>
  );
}
