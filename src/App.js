import React, { useState } from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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

const showAccordion = () => {
    if (window.location.pathname === "/") {
        return <Accordion items={items} />
    }
}

const showList = () => {
    if (window.location.pathname === "/list") {
        return <Search />
    }
}

const showDropdown = () => {
    if (window.location.pathname === "/dropdown") {
        return <Dropdown options={options} selected={selected} onSelectChange={setSelected} />   
    }
}

const showTranslate = () => {
    if (window.location.pathname === "/translate") {
        return <Translate />
    }
}

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (    
        <div {...showAccordion()} {...showDropdown()} {...showTranslate()} {...showList()} ></div>
    )
};

// <Accordion items={items} />

/*
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            { showDropdown ? 
                <Dropdown options={options} selected={selected} onSelectChange={setSelected} /> : null
            }

*/