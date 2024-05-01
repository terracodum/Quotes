import "./Tags.css";

type Props = {
    type: string,
    name: string,
    id: string,
    count: string
}

function Tag(prop: Props) {
    
    return (
        <>
        { (prop.type === "author") &&
            <>
            <a onClick={() => {window.history.replaceState(null, "Quotes", `/quotes/author/${prop.id}`)}} href={`/quotes/author/${prop.id}`}className="card">
                <h4>{prop.name}</h4>
                <h5 className="count">{prop.count}</h5>
            </a>
            </>
        }
        { (prop.type === "tag") &&

            <a onClick={(event) => { window.history.replaceState(null, "Quotes", `/quotes/tag/${prop.name}`)}} href={`/quotes/tag/${prop.name}`} className="card" >
                <h4>{ prop.name }</h4>
            </a>
        }
        </>
            
        
    );
};


export default Tag;