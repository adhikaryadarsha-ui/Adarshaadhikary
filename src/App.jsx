import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contactus from "./pages/ContactUs";
import Layout from "./components/Layout";
import ProjectList from "./pages/ProjectList";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<ProjectList />} />
          <Route path="contact" element={<Contactus />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
