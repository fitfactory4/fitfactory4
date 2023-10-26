import { Route, Routes } from "react-router-dom";
import { Home, Contact, Blog, StartTrial, Footer } from "./pages";
import { BlogPage } from "./pages/news/components/BlogPage";
import { BlogPageContextProvider, LanguageContextProvider } from "./services";
import { Header } from "./pages";

export default function App() {
  return (
    <>
      <LanguageContextProvider>
        <BlogPageContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/blogs" element={<Blog />}></Route>
            <Route path="/blogs/:url" element={<BlogPage />}></Route>
            <Route path="/start-trial" element={<StartTrial />}></Route>
          </Routes>
          <Footer />
        </BlogPageContextProvider>
      </LanguageContextProvider>
    </>
  );
}
