import "./Page.css";
import QuotePage from "./QuotePage.tsx";
import Search from "./Search.tsx";


function Page() {
    return (
        <div className="overlay">
            
            <div className="page">
                <div className="quotes">
                    <QuotePage />
                </div>

                <div className="search">
                    <Search />
                </div>



            </div>


        </div>
    );
}

export default Page;