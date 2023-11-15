import { Route, Routes } from "react-router-dom";
import { LanguageContextProvider } from "./services";
import StartTrial from "./pages/StartTrial";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Pilates from "./pages/Pilates";
import Box from "./pages/Box";
import Something from "./pages/Something";
import Blog4 from "./pages/Blog4";
import Blog5 from "./pages/Blog5";
import Blog6 from "./pages/Blog6";
import Header from "./globalComponents/header/Header";
import Footer from "./globalComponents/Footer";
import { MessengerChat } from "./globalComponents";
import Blog7 from "./pages/Blog7";
import Blog8 from "./pages/Blog8";

export default function App() {
  return (
    <>
      <LanguageContextProvider>
        <Header />
        <Routes>
          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/starttrial" element={<StartTrial />}></Route>
          <Route path="/pilates" element={<Pilates />}></Route>
          <Route path="/box" element={<Box />}></Route>
          <Route path="/something" element={<Something />}></Route>
          <Route path="/blog4" element={<Blog4 />}></Route>
          <Route path="/blog5" element={<Blog5 />}></Route>
          <Route path="/blog6" element={<Blog6 />}></Route>
          <Route path="/blog7" element={<Blog7 />}></Route>
          <Route path="/blog8" element={<Blog8 />}></Route>
        </Routes>
        <MessengerChat />
        <Footer />
      </LanguageContextProvider>
    </>
  );
}
