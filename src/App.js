import React from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
    {
        title: "What is React?",
        content: "React is a front end JS library."
    }, 
    {
        title: "Why use React?",
        content: "React is one of the most popular and easy to learn libraries."
    }, 
    {
        title: "How do you use React?",
        content: "By learning from YouTube and Courses and of course the Docs. :)"
    }
]

export default () => {
    return (
        <Search />
    )
};

// <Accordion items={items} />