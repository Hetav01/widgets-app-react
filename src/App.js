import React, { useState } from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";


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

const options = [
    {
        label: "The Colour Red", 
        value: "red"
    },
    {
        label: "The Colour Green", 
        value: "green"
    },
    {
        label: "The Colour Blue", 
        value: "blue"
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (    
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown label="Select A Colour" options={options} selected={selected} onSelectChange={setSelected} />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};

// <Accordion items={items} />

/*
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            { showDropdown ? 
                <Dropdown options={options} selected={selected} onSelectChange={setSelected} /> : null
            }

*/