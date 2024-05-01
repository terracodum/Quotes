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
            <a href={"/quotes/author/"+ prop.id} className="card">
                <h4>{prop.name}</h4>
                <h5 className="count">{prop.count}</h5>
            </a>
            </>
        }
        { (prop.type === "tag") &&

            <a href={"/quotes/tag/"+ prop.name} className="card" >
                <h4>{ prop.name }</h4>
            </a>
        }
        </>
            
        
    );
};


export default Tag;