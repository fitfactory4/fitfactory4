import { useContext, useEffect } from "react";
import { NavBar } from "./components";
import { LanguageContext } from "../../services";

export default function Header() {
  const { langs, language } = useContext(LanguageContext);

  return (
    <header id="main-header" className="header">
      <NavBar langs={langs} language={language} />
    </header>
  );
}
