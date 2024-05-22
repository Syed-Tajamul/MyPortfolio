export default function DeletedWhoAmI() {
  return (
    <div>
      <div className="w-1/2 flex justify-center items-center cursor-pointer">
        <img
          ref={tiltRef}
          className="w-[400px] h-[400px] ml-12 mb-12  preserve-3d rounded-xl"
          src="/assets/images/newdev.jpg"
        />
      </div>{" "}
      <p className=" text-normal font-semibold text-stone-400  leading-[1.575rem] max-w-lg text-justify">
        <span className="text-[#90D26D]">
          Welcome to my world of innovation and creativity!
        </span>{" "}
        Welcome to my world of innovation and creativity! I'm Syed Tajamul, a
        passionate front-end developer from Rajpora, Jammu and Kashmir. Armed
        with a Master's in Computer Applications (MCA), I'm venturing into the
        dynamic realm of software development. Specializing in React.js, HTML,
        CSS, and Tailwind CSS, I create visually stunning and user-friendly web
        experiences, driven by curiosity and a thirst for innovation. Despite
        being a fresher, I bring boundless enthusiasm and a drive to contribute
        to impactful projects.
      </p>
      <button className="mb-20 font-semibold hover:bg-white hover:text-black mt-1 px-12 py-4 border-2 border-white rounded-full transition-all duration-300 hover:transition-all hover:duration-300">
        mailto:syedtawseef@gmail.com !
      </button>
    </div>
  );
}
