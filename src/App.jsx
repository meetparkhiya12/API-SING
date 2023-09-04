import { Route, Routes } from "react-router"
import Header from "./Componets/Header/Header.jsx"

import Home from "./Componets/Home/Home.jsx"
import Student from "./Componets/Student/Student.jsx"
import ViewStudent from "./Componets/ViewStudent/viewstudent.jsx"
import Gita from "./Componets/Gita/Gita.jsx"
import Edit from "./Componets/Edit/Edit.jsx"
import SingUp from "./Componets/SingUp/SingUp.jsx"
import Singin from "./Componets/SignIn/Singin.jsx"





function App() {


  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/student" element={<Student />}></Route>
      <Route path="/view" element={<ViewStudent/>}></Route>
      <Route path="/edit" element={<Edit/>}></Route>
      <Route path="/gita" element={<Gita/>}></Route>
      <Route path="/singUp" element={<SingUp/>} ></Route>
      <Route path="/singIn" element={<Singin/>} ></Route>



    </Routes>
     </>
     
  )
}

export default App
