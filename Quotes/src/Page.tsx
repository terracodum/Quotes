import { useEffect } from "react";
import "./Page.css";
import QuotePage from "./QuotePage.tsx";
import Search from "./Search.tsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function Page() {

    return (
        <div className="overlay">
            <div className="page">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<QuotePage type="random" path="/" />} />
                        <Route path="/quotes/author/*" element={<QuotePage type="author" path={location.pathname.replace("/quotes/author/", "")} />} />
                        <Route path="/quotes/tag/*" element={<QuotePage type="tag"  path={location.pathname.replace("/quotes/tag/", "")}/>} />
                    </Routes>
                </BrowserRouter>
                <div className="search">
                    <Search />
                </div>
            </div>
        </div>
    );
}

export default Page;