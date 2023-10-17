import { Route, Routes } from "react-router-dom";
import { Home, Contact, News, StartTrial } from "./pages";
import NavBar from "./pages/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/start-trial" element={<StartTrial />}></Route>
      </Routes>
    </>
  );
}
