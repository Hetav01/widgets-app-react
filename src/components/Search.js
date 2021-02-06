import React, {useState, useEffect} from 'react';
import axios from "axios";
import "./Search.css";

const Search = () => {
    const [term, setTerm] = useState("");
//   const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

/*     useEffect(() => {
        const timerID = setTimeout(() => {
            setDebouncedTerm(term);
        }, 400); 

        return (() => {
            clearTimeout(timerID);
        });
    }, [term]);

    useEffect(() => {
        const searchWiki = async (e) => {
            const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query", 
                    list: "search", 
                    format: "json", 
                    origin: "*", 
                    srsearch: term
                },
            });
            setResults(data.query.search); 
        };
        searchWiki();
    }, [debouncedTerm]);
 */

    useEffect(() => {
        const searchWiki = async (e) => {
            const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query", 
                    list: "search", 
                    format: "json", 
                    origin: "*", 
                    srsearch: term
                },
            });
            setResults(data.query.search); 
        };
        //here we need to check first if term is an empty string or not.
        if (term && !results.length) {
            searchWiki();
        }
        else {
            const timeoutID = setTimeout(() => {
                if (term) {
                    searchWiki();
                }
            }, 300);

            return () => {
                clearTimeout(timeoutID);
            };
        }
    }, [term, results.length]); 

/*
    in useEffect, the second arguemnets control how the useEffect hook is going to run.
    So there are three possibilities, 
        1. [] = this means the arrow function provided will run only at the intial render.
        2. [data] = this means the arrow function will run at the intial render and (the subsequent renders if the data has changed since last render.
        3. nothing... = this means the arrow function will run at the inital as well as the subsequent renders too.
*/

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content linkButt">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content dataDiv">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        )
    }); 

    return (
        <div className="ui form">
            <div className="field">
                <label className="searchLabel">Enter Search Term</label>
                <input className="input" value={term} onChange={(e) => setTerm(e.target.value)} />
            </div>
            <div className="ui relaxed divided list">
                {renderedResults}
            </div>
        </div>
    )
};

export default Search;