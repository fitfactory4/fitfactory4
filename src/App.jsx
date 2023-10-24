import { Route, Routes } from "react-router-dom";
import { Home, Contact, Blog, StartTrial, Footer } from "./pages";
import { BlogPage } from "./pages/news/components/BlogPage";
import { LanguageContextProvider } from "./services";
import { Header } from "./pages";
import { useContext, useEffect } from "react";

export default function App() {
  return (
    <>
      <LanguageContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blogs" element={<Blog />}></Route>
          <Route path="/blogs/:id" element={<BlogPage />}></Route>
          <Route path="/start-trial" element={<StartTrial />}></Route>
        </Routes>
        <Footer />
      </LanguageContextProvider>
    </>
  );
}
