import './App.css';
import Users from "./users/users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./add/addUser";
import EditUser from './edit/editUser';
import Footer from './footer/footer';

function App() {
  
  return (
    <>
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} exact />
          <Route path='/:id' element={<EditUser />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
    </>
  );
}

export default App;