import "./Page.css";
import burgerSvg from "./assets/burger-menu-left-svgrepo-com.svg";
import QuotePage from "./QuotePage.tsx";
import Search from "./Search.tsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";

function IsMobile() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const aspectRatio = height / width;

  // проверяем, соответствует ли соотношение сторон экрана мобильным устройствам
  if (aspectRatio > 1.0 ) {
    return true;
  }

  return false;
}

function Page() {
  const [isMobileUser, setIsMobileUser] = useState(IsMobile());
  const [isOpen, setIsOpen] = useState(false);
  function OpenSearch() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  window.onresize = () => setIsMobileUser(IsMobile);
  return (
    <div className="overlay">
      <div className="page">
        <BrowserRouter>
          <Routes>
            {!isMobileUser && (
              <>
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
              </>
            )}
            {isMobileUser && (
              <>
                <Route
                  path="/"
                  element={
                    <div>
                      <button
                        className="search-btn"
                        type="button"
                        onClick={OpenSearch}
                      >
                        <img className="burger-img" src={burgerSvg} alt="svg" />
                      </button>

                      {!isOpen && (
                        <div className="qPage-mob">
                          <QuotePage type="random" />
                        </div>
                      )}
                      {isOpen && (
                        <div id="mobile-menu">
                          <div className="search-mob">
                            <Search category="authors" />
                          </div>
                        </div>
                      )}
                    </div>
                  }
                />
                <Route
                  path="/quotes/author/*"
                  element={
                    <div>
                      <button
                        className="search-btn"
                        type="button"
                        onClick={OpenSearch}
                      >
                        <img className="burger-img" src={burgerSvg} alt="svg" />
                      </button>

                      {!isOpen && (
                        <div className="qPage-mob">
                          <QuotePage type="author" />
                        </div>
                      )}
                      {isOpen && (
                        <div id="mobile-menu">
                          <div className="search-mob">
                            <Search category="authors" />
                          </div>
                        </div>
                      )}
                    </div>
                  }
                />
                <Route
                  path="/quotes/tag/*"
                  element={
                    <div>
                      <button
                        className="search-btn"
                        type="button"
                        onClick={OpenSearch}
                      >
                        <img className="burger-img" src={burgerSvg} alt="svg" />
                      </button>

                      {!isOpen && (
                        <div className="qPage-mob">
                          <QuotePage type="tag" />
                        </div>
                      )}
                      {isOpen && (
                        <div id="mobile-menu">
                          <div className="search-mob">
                            <Search category="tags" />
                          </div>
                        </div>
                      )}
                    </div>
                  }
                />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Page;
