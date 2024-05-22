import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

export default function Education() {
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
    <div className="max-md:flex-col mx-auto flex  gap-8 ">
      <div className="card-div border-2 border-gray-200">
        <img
          src="/assets/icons/online-education.png"
          alt="masters"
          height={100}
          width={100}
        />
        <h1 className="px-4 text-center font-montserrat text-lg font-medium ">
          Masters in computer applications
        </h1>
        <p className="px-4 font-poppins text-center text-stone-400 text-sm leading-8 font-normal">
          Islamic University Of Science And Technology Awantipora,Pulwama
        </p>
        <p className="font-poppins text-center text-stone-400 text-sm font-medium">
          2020-2023
        </p>
      </div>
      <div className="card-div border-2 border-gray-200">
        <img
          src="/assets/icons/bachelor.png"
          alt="masters"
          height={100}
          width={100}
        />
        <h1 className="text-center px-4 font-montserrat text-lg font-medium ">
          Bachelors in computer applications
        </h1>
        <p className="px-4 font-poppins leading-8 text-center text-stone-400 text-sm font-normal">
          Masters Institute Of Information And Technology ,Pulwama
        </p>
        <p className="font-poppins text-center text-stone-400 text-sm font-medium">
          2016-2020
        </p>
      </div>
    </div>
  );
}
