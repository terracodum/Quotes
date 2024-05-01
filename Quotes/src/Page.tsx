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
                        <Route path="/" element={<QuotePage type="random" />} />
                        <Route path="/quotes/author/*" element={<QuotePage type="author" />} />
                        <Route path="/quotes/tag/*" element={<QuotePage type="tag" />} />
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