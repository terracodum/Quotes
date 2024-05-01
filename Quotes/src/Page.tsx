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
            <Route
              path="/"
              element={
                <>
                  <div className="qPage">
                    <QuotePage type="random" />
                  </div>
                  <div className="search">
                    <Search category="authors" />
                  </div>
                </>
              }
            />
            <Route
              path="/quotes/author/*"
              element={
                <>
                  <QuotePage type="author" />
                  <div className="search">
                    <Search category="authors" />
                  </div>
                </>
              }
            />
            <Route
              path="/quotes/tag/*"
              element={
                <>
                  <QuotePage type="tag" />
                  <div className="search">
                    <Search category="tags" />
                  </div>
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Page;
