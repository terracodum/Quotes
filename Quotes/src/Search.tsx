import { useEffect, useState } from "react";
import "./Search.css";
import Tag from "./Tags.tsx"


const API = "https://api.quotable.io/"

function Search() {
    const [currentCategory, setCurrentCategory] = useState('authors');
    const [tags, setTags] = useState([]);
    const [authors, setAuthors] = useState([]);


    class Author {
        public Slug;
        public Name;
        public Count; 
        constructor(slug: string, name: string, count: string) {
            this.Slug = slug;
            this.Name = name;
            this.Count = count;
        }
    }

    class TagCls {
        public Id: string;
        public Name: string;
        constructor(id: string, name: string) {
            this.Id = id;
            this.Name = name;
        }    
    }

    function FetchAuthors() {
        let resAuthors = [];
        return fetch (API + "authors",{method:"GET"}) 
            .then((res)=> res.json())
            .then((data) => {
                let list = data.results;
                return list;
            })
            .then((list) => {
                for (let i = 0; i < list.length; i++ ) {
                    resAuthors.push(new Author(list[i].slug, list[i].name, list[i].quoteCount));
                }
                return resAuthors;
            })
    }
    function FetchTags() {
        let resTags = [];
        return fetch (API + "tags",{method:"GET"}) 
            .then((res)=> res.json())
            .then((list) => {
                for (let i = 0; i < list.length; i++ ) {
                    resTags.push(new TagCls(list[i]._id, list[i].name));
                }
                return resTags;
            })
    }

    useEffect(() => {
        if (currentCategory === 'authors') {
            FetchAuthors()
            .then((data: any) => {
                console.log(data);
                setAuthors(data);
            });
        } else if (currentCategory === 'tags') {
            FetchTags()
            .then((data: any) => {
                console.log(data);
                setTags(data);
            });
        }
    }, [currentCategory]);

    function ToTag(tag: TagCls) {
        return (
            <Tag 
                name={tag.Name} 
                id={tag.Id} 
                count={"-1"} 
                type="tag" 
            />
        )
    }
    function ToAuthor(author: Author) {
        return(
            <Tag
                name={author.Name}
                id={author.Slug}
                count={author.Count}
                type="author"
            />
        );
    };
    return (
        <>
            <div className="prop">
                <button 
                    className={"search-tag " + (currentCategory === 'authors' ? 'on' : 'off')}
                    onClick={() => setCurrentCategory('authors')}
                >
                    Authors
                </button>
                <button
                    className={"search-tag " + (currentCategory === 'tags' ? 'on' : 'off')}
                    onClick={() => setCurrentCategory('tags')}
                >
                    Tags
                </button>
            </div>
            <div className="search-tags">

                {currentCategory === 'authors' &&
                    <>
                    <h3>Authors</h3>
                    {
                        authors.map((author: Author) => ToAuthor(author))
                    }
                    </>
                }

                {currentCategory === 'tags' &&
                    <>
                    <h3>Tags</h3>
                    {
                        tags.map((tag: TagCls) => ToTag(tag))
                    }
                    </>
                }
            </div>
        </>
    );  
};

export default Search;