export default function ExpertizeNavigation({
  skills,
  certificate,
  education,
  setSkills,
  setEducation,
  setCertificate,
}) {
  function handleSkills() {
    setSkills(true);
    setCertificate(false);
    setEducation(false);
  }
  function handleCertifications() {
    setCertificate(true);
    setEducation(false);
    setSkills(false);
  }
  function handleCourses() {
    setEducation(true);
    setSkills(false);
    setCertificate(false);
  }
  return (
    <div className="font-poppins flex justify-between items-center gap-10  mx-auto border-[1px] border-textcolor dark:border-stone-700 bg-white dark:bg-stone-400/10 px-4 py-2 rounded-lg">
      <span
        onMouseOver={handleSkills}
        className={`  cursor-pointer  text-sm font-medium   hover:transition-all hover:duration-300  transition-all duration-300 ${
          skills && "text-textcolor dark:text-lime-400 underline"
        }`}
      >
        Skills
      </span>
      <span
        onMouseOver={handleCourses}
        className={`cursor-pointer  text-sm font-medium  hover:transition-all hover:duration-300  transition-all duration-300  ${
          education && "text-textcolor dark:text-lime-400 underline"
        }`}
      >
        Education
      </span>
      <span
        onMouseOver={handleCertifications}
        className={`cursor-pointer  text-sm font-medium  hover:transition-all hover:duration-300  transition-all duration-300  ${
          certificate && "text-textcolor dark:text-lime-400 underline"
        }`}
      >
        Certfications
      </span>
    </div>
  );
}
