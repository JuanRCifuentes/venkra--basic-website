import { HashRouter, Routes, Route } from "react-router-dom";

import AppUI from './AppUI'
import About from "../pages/About";
import Home from "../pages/home/Home";
import Products from "../pages/catalogue/Products";
import Categories from "../pages/catalogue/Categories";
import Catalogue from "../pages/catalogue/Catalogue";
import SingleProduct from "../pages/catalogue/SingleProduct";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import ScrollToTop from "../components/ScrollToTop";

export default function App() {

    

    return (
        <HashRouter>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<AppUI />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="catalogue" element={<Catalogue />}>
                            <Route index element={<Categories />} />
                            <Route path=":categoryId" element={<Products />} />
                            <Route path=":categoryId/:productId" element={<SingleProduct />}/>
                            <Route path="*" element={<Error />} />
                        </Route>
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<Error />} />
                    </Route>
                </Routes>
            </ScrollToTop>
        </HashRouter>
    );
}