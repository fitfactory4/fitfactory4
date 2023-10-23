import { Route, Routes } from "react-router-dom";
import { Home, Contact, Blog, StartTrial, Footer } from "./pages";
import NavBar from "./pages/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blogs" element={<Blog />}></Route>
        <Route path="/start-trial" element={<StartTrial />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
