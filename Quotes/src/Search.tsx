import { useState } from "react";

const API = "https://api.quotable.io/"

function Search() {
    
    const  [search, setSearch] = useState("authors");

    function Sorting(tag: string) {
        
    }




    return (
        <>
            <div className="prop">
                <p>Authors</p>
                <p>Tags</p>
            </div>
        </>
    );  
};

export default Search;