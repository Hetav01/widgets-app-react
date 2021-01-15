import { render } from '@testing-library/react';
import React, { useState } from 'react';

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    };


    const renderedItems = items.map((item, index) => {
        const activate = index === activeIndex ? 'active' : "";

        return (
            <React.Fragment key="item.title">
                <div className={`title ${activate}`} onClick={() => onTitleClick(index)} >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${activate}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    
    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
};

export default Accordion;