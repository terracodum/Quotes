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
                <p>{prop.content}</p>
                <p>{prop.author}</p>
                {
                    prop.tags.map((tag: string) => <p className="taglist">{tag}</p>)
                }
            </div>
        </>
    );
    
};

export default Quote;