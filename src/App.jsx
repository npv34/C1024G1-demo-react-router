import { Route, Routes } from 'react-router';
import './App.css'
import Login from "./pages/Login/index.jsx";
import Register from "./pages/Register/index.jsx";
import UserList from "./pages/Users/UserList/index.jsx";
import Main from "./components/Layout/Main/index.jsx";
import Dashboard from "./pages/Dashboard/index.jsx"
import UserEdit from "./pages/Users/UserEdit/index.jsx";
function App() {

    return (
        <>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/admin" element={<Main/>} >
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="users" element={<UserList/>} />
                    <Route path="users/:uid/edit" element={<UserEdit/>} />
                </Route>
            </Routes>
        </>
    )
}

export default App
