import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
function App() {

  return ( 
<div>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="help" element={<Help />} />
          <Route path="project1" element={<Project1/>}/>
          <Route path="project2" element={<Project2/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  
</div>

   
  )
}

export default App
