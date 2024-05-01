import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Quote from "./Quote.tsx";
import "./QuotePage.css";

type Props = {
  type: string;
};
const API = "https://api.quotable.io/";

function QuotePage(prop: Props) {
  const [quoteList, setQuoteList] = useState([]);
  const [types, setTypes] = useState(prop.type ? prop.type : "random"); //
  const location = useLocation();
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

    constructor(
      id: string,
      content: string,
      author: string,
      authorSlug: string,
      tags: string[],
    ) {
      this.Id = id;
      this.Content = content;
      this.Author = author;
      this.AuthorSlug = authorSlug;
      this.Tags = tags;
    }
  }

  function FetchRandomQuotes() {
    let resTags = [];
    return fetch(API + "quotes/random?limit=20", { method: "GET" })
      .then((res) => res.json())
      .then((list) => {
        for (let i = 0; i < list.length; i++) {
          resTags.push(
            new QuoteCls(
              list[i]._id,
              list[i].content,
              list[i].author,
              list[i].authorSlug,
              list[i].tags,
            ),
          );
        }
        return resTags;
      });
  }

  function FetchAuthorQuotes(id: string) {
    let resTags = [];
    return fetch(API + "quotes?author=" + id, { method: "GET" })
      .then((res) => res.json())
      .then((js) => js.results)
      .then((list) => {
        for (let i = 0; i < list.length; i++) {
          resTags.push(
            new QuoteCls(
              list[i]._id,
              list[i].content,
              list[i].author,
              list[i].authorSlug,
              list[i].tags,
            ),
          );
        }
        return resTags;
      });
  }

  function FetchTagQuotes(searchingTag: string) {
    let resTags = [];
    return fetch(API + "quotes?tags=" + searchingTag, { method: "GET" })
      .then((res) => res.json())
      .then((js) => js.results)
      .then((list) => {
        for (let i = 0; i < list.length; i++) {
          resTags.push(
            new QuoteCls(
              list[i]._id,
              list[i].content,
              list[i].author,
              list[i].authorSlug,
              list[i].tags,
            ),
          );
        }
        console.log(resTags);
        return resTags;
      });
  }
  useEffect(() => {
    setTypes(prop.type);
    if (types === "random") {
      FetchRandomQuotes().then((data: any) => {
        setQuoteList(data);
      });
    } else if (types === "author") {
      FetchAuthorQuotes(location.pathname.replace("/quotes/author/", "")).then(
        (data: any) => {
          setQuoteList(data);
        },
      );
    } else if (types === "tag") {
      FetchTagQuotes(location.pathname.replace("/quotes/tag/", "")).then(
        (data: any) => {
          setQuoteList(data);
        },
      );
    }
  }, [location, types]);
  function ToQuote(quote: QuoteCls) {
    return (
      <Quote
        key={quote.Id}
        id={quote.Id}
        content={quote.Content}
        tags={quote.Tags}
        author={quote.Author}
        authorSlug={quote.AuthorSlug}
      />
    );
  }
  return (
    <>
      {types === "random" && (
        <div className="quote-page">
          <h2>Random Quotes</h2>
          <div className="list-quotes">
            {quoteList.map((quote: QuoteCls) => ToQuote(quote))}
          </div>
        </div>
      )}
      {types === "author" && (
        <div className="quote-page">
          <h2>Author Quotes</h2>
          <div className="list-quotes">
            {quoteList.map((quote: QuoteCls) => ToQuote(quote))}
          </div>
        </div>
      )}
      {types === "tag" && (
        <div className="quote-page">
          <h2>Tag Quotes</h2>
          <div className="list-quotes">
            {quoteList.map((quote: QuoteCls) => ToQuote(quote))}
          </div>
        </div>
      )}
    </>
  );
}

export default QuotePage;
