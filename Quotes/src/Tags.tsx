import "./Tags.css";
import { useNavigate } from "react-router-dom";

type Props = {
  type: string;
  name: string;
  id: string;
  count: string;
};

function Tag(prop: Props) {
  const navigate = useNavigate();

  return (
    <>
      {prop.type === "author" && (
        <>
          <div
            onClick={() => navigate(`/quotes/author/${prop.id}`)}
            className="card"
          >
            <h4>{prop.name}</h4>
            <h5 className="count">{prop.count}</h5>
          </div>
        </>
      )}
      {prop.type === "tag" && (
        <div
          onClick={() => navigate(`/quotes/tag/${prop.name}`)}
          className="card"
        >
          <h4>{prop.name}</h4>
        </div>
      )}
    </>
  );
}

export default Tag;
