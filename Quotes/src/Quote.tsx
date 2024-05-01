import "./Quote.css";
import unLikeHeart from "./assets/heart-svgrepo-com.svg";
import likeHeart from "./assets/heart-svgrepo-com copy.svg";
import { useState } from "react";

type Props = {
  id: string;
  // The quotation text
  content: string;
  // The full name of the author
  author: string;
  // The `slug` of the quote author
  authorSlug: string;
  // An array of tag names for this quote
  tags: string[];
};

function Likes({ id }: { id: string }) {
  const [like, setLike] = useState(localStorage.getItem(id));

  function click() {
    if (localStorage.getItem(id)) {
      setLike(null);
      localStorage.removeItem(id);
    } else {
      setLike("true");
      localStorage.setItem(id, String(true));
    }
  }

  return (
    <div onClick={click}>
      {like ? (
        <img className="heart" alt="like" src={likeHeart} />
      ) : (
        <img className="heart" alt="like" src={unLikeHeart} />
      )}
    </div>
  );
}

function Quote(prop: Props) {
  return (
    <>
      <div className="quote-card">
        <p className="content">"{prop.content}"</p>
        <p className="author">— {prop.author}</p>
        <div className="like">
          <Likes id={prop.id} />
        </div>
        <div className="tags-quote">
          {prop.tags.map((tag: string) => (
            <p key={tag} className="tag-list">
              {tag}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Quote;
