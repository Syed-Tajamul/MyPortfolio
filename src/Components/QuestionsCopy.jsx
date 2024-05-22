import { Link } from "react-router-dom";
export default function Questions({ questionElement, curOpen, setCurOpen }) {
  const { id, question, answer, link, tag, logo: Logo } = questionElement;
  // console.log(logo);
  const isOpen = curOpen === id;
  console.log(isOpen);
  function handleToggle() {
    setCurOpen((prevId) => (prevId === id ? null : id));
  }
  return (
    <>
      <div
        onClick={handleToggle}
        className="hover:ml-4 hover:transition-all hover:duration-300 transition-all duration-300  cursor-pointer flex flex-col justify-center items-start gap-4 w-full px-4 py-2  border-[1px] border-stone-700 rounded-lg"
      >
        <div
          className={`text-white text-lg font-medium w-full ${
            isOpen && "text-lime-300"
          } flex
          justify-between
          items-center
          w-full`}
        >
          <h1>
            <Logo className="inline-block m-2" /> {question}
          </h1>

          <span>{isOpen ? "-" : "+"}</span>
        </div>

        {isOpen ? (
          <>
            <p className=" text-stone-400 text-[15px] tracking-wide font-medium">
              {answer}
            </p>
            {link && (
              <Link
                to={link}
                className="text-sm text-lime-400 underline font-medium"
              >
                Explore my {tag}
              </Link>
            )}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
