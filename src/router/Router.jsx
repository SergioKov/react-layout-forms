import { Route, Routes } from "react-router-dom";
import User from "../components/user/User";
import Users from "../components/users/Users";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Users />} />          
            <Route path='/user-details/:id' element={<User />} />
        </Routes>
    );
};

export default Router;