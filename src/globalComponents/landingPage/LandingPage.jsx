import { AboutUs, IntroPage, Pilates, Pricing, Trainers } from "./components";
import { LanguageContext } from "../../services";
import { useContext, useEffect } from "react";

export const LandingPage = () => {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const body = document.getElementById("body");
    const logo = document.querySelector(".logo");
    if (language === "en") {
      logo.style.fontFamily = "Kanit, sans-serif";
      body.style.fontFamily = "Kanit, sans-serif";
    } else {
      body.style.fontFamily = "Contractica R";
      body.style.fontFeatureSettings = `"case"`;
      logo.style.fontFamily = "Kanit, sans-serif";
    }
  });

  return (
    <div id="landing-page">
      <IntroPage />
      <AboutUs />
      <Pilates />
      <Trainers />
      <Pricing />
    </div>
  );
};
