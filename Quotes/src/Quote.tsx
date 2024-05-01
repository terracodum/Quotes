import "./Quote.css";


type Props = {
    id: string,
    // The quotation text
    content: string,
    // The full name of the author
    author: string,
    // The `slug` of the quote author
    authorSlug: string,
    // An array of tag names for this quote
    tags: string[],
}

function Quote(prop: Props) {
    return (
        <>
            <div className="quote-card">
                <p className="content">"{prop.content}"</p>
                <p className="author">— {prop.author}</p>
                <div className="tags-quote">
                    {
                        prop.tags.map((tag: string) => <p key={tag} className="tag-list">{tag}</p>)
                    }
                </div>
            </div>
        </>
    );
    
};

export default Quote;