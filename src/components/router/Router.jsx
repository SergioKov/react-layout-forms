import { Route, Routes } from "react-router-dom";
import Layout from "../../layouts/Layout";
import Contact from "../../pages/Contact";
import About from "../../pages/About";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<h1>HOME</h1>} />  
                <Route path='/about' element={<About />} />  
                <Route path='/contact' element={<Contact />} />  

            </Route>
        </Routes>
    );
}


export default Router;