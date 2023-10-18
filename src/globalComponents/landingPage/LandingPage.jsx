import { AboutUs, IntroPage, Pilates, Pricing, Trainers } from "./components";

export const LandingPage = () => {
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
