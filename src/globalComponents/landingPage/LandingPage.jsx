import {
  AboutUs,
  Blogs,
  IntroPage,
  PilatesHome,
  Pricing,
  Trainers,
} from "./components";
import { LanguageContext } from "../../services";
import { useContext, useEffect } from "react";

export const LandingPage = () => {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const body = document.getElementById("body");
    const logo = document.querySelector(".logo");
    const globe = document.querySelector(".globe-svg");
    globe.style.display = "block";
    if (language === "en") {
      logo.style.fontFamily = "Kanit, sans-serif";
      body.style.fontFamily = "Kanit, sans-serif";
    } else {
      body.style.fontFamily = "FiraGo";
      body.style.fontFeatureSettings = `"case"`;
      logo.style.fontFamily = "Kanit, sans-serif";
    }
    const header = document.getElementById("main-header");
    const footer = document.getElementById("main-footer");
    header.style.display = "block";
    footer.style.display = "block";
  });

  return (
    <div id="landing-page">
      <IntroPage />
      <AboutUs />
      {language === "ka" && <Blogs />}
      <PilatesHome />
      <Trainers />
      <Pricing />
    </div>
  );
};
