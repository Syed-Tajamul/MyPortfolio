import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { skills } from "../Constants";
import Skill from "./Skill";
import { Toaster } from "react-hot-toast";

export default function Skills() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card-div");
    cards.forEach((card) => {
      VanillaTilt.init(card, {
        // max: 15,
        // speed: 600,
        max: 12,
        speed: 400,
        // glare: true,
        // "max-glare": 0.5,
      });
    });

    return () => {
      cards.forEach((card) => {
        card.vanillaTilt.destroy();
      });
    };
  }, []);
  return (
    <div className="container-card-div ">
      <Toaster />
      {skills.map((skill) => (
        <Skill skill={skill} key={skill.id} />
      ))}
    </div>
  );
}
