import { useContext } from "react";
import { NavBar } from "./components";
import { LanguageContext } from "../../services";

export const Header = () => {
  const { langs, language } = useContext(LanguageContext);

  return (
    <header className="header">
      <NavBar langs={langs} language={language} />
    </header>
  );
};
