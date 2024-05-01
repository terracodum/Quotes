import { useEffect, useState } from "react";
import Quote from "./Quote.tsx";
import "./QuotePage.css";

type Props = {
    type:string
}
const API = 'https://api.quotable.io/';


function QuotePage(prop: Props) {
    const [quoteList, setQuoteList] = useState([]);
    
    class QuoteCls {
        public Id: string;
        // The quotation text
        public Content: string;
        // The full name of the author
        public Author: string;
        // The `slug` of the quote author
        public AuthorSlug: string;
        // An array of tag names for this quote
        public Tags: string[];
    
        constructor(id: string, content: string, author: string, authorSlug: string, tags: string[] ) {
            this.Id = id;
            this.Content = content;
            this.Author = author;
            this.AuthorSlug = authorSlug;
            this.Tags = tags;
        }
    }
    
    function FetchRandomQuotes() {
            let resTags = [];
            return fetch (API + "quotes/random?limit=20",{method:"GET"}) 
                .then((res)=> res.json())
                .then((list) => {
                    for (let i = 0; i < list.length; i++ ) {
                        resTags.push(new QuoteCls(list[i]._id, list[i].content, list[i].author, list[i].authorSlug, list[i].tags));
                    }
                    return resTags;
                })
    };
    
    function FetchAuthorQuotes(id: string) {
        let resTags = [];
        return fetch (API + "/quotes?author="+ id,{method:"GET"}) 
            .then((res)=> res.json())
            .then((list) => {
                for (let i = 0; i < list.length; i++ ) {
                    resTags.push(new QuoteCls(list[i]._id, list[i].content, list[i].author, list[i].authorSlug, list[i].tags));
                }
                return resTags;
            })
    };
    
    function FetchTagQuotes(id: string) {
        let resTags = [];
        return fetch (API + "/quotes?tag="+ id,{method:"GET"}) 
            .then((res)=> res.json())
            .then((list) => {
                for (let i = 0; i < list.length; i++ ) {
                    resTags.push(new QuoteCls(list[i]._id, list[i].content, list[i].author, list[i].authorSlug, list[i].tags));
                }
                return resTags;
            })
    };
    useEffect(() => {
        if (prop.type === "random") {
            FetchRandomQuotes()
            .then((data: any) => {
                console.log(data);
                setQuoteList(data);
            }
    
            )
        } else if (prop.type === "author") {
            FetchAuthorQuotes(location.pathname.replace("/quotes/author/", ""))
            .then((data: any) => {
                console.log(data);
                setQuoteList(data);
            });
        } else if (prop.type === "tag") {
            FetchTagQuotes(location.pathname.replace("/quotes/author/", ""))
            .then((data: any) => {
                console.log(data);
                setQuoteList(data);
            });
        }
    
    }, [location.pathname])
    function ToQuote(quote: QuoteCls) {
        return <Quote id={quote.Id} content={quote.Content} tags={quote.Tags} author={quote.Author} authorSlug={quote.AuthorSlug}/>
    }
    return (
        <>
        {prop.type == "random" &&
            <>
                <h2>Random Quotes</h2>
                <div className="list-quotes">
                    {
                        quoteList.map((quote: QuoteCls) => ToQuote(quote))
                    }
                </div>
            </>
        }
        {prop.type == "author" &&
            <>
                <h2>Author Quotes</h2>
                <div className="list-quotes">

                </div>
            </>
        }
        {
            prop.type == "tag" &&
            <>
                <h2>Tag Quotes</h2>
                <div className="list-quotes">

                </div>
            </>
        }

        </>
    );
};

export default QuotePage;