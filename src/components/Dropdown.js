import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({label, options, selected, onSelectChange}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current && ref.current.contains(event.target)) {       //this line will check if the element that was clicked on was inside the reffed element.
                return;                
            }
            setOpen(false);
        }

        document.body.addEventListener("click", onBodyClick, {capture: true});

        return () => {
            document.body.removeEventListener("click", onBodyClick);
        }
    }, []);


    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {  //this can be use for fitering the list and showing the selected item.
            return null;
        }

        return (
            <div key={option.value} className="item" onClick={() => onSelectChange(option)} >
                {option.label}
            </div>
        )
    });

/*
    for allowing the click on window to close the Dropdown, we need to use Event Bubbling.
    In event bubbling we normally just need another onClick event on any other element other than the main one
    where it is previously applied.
    The main element always has difficulty in setting up event handlers on stuff it does not create. 

    In Event Bubbling, firstly the body element is clicked, 
    then the react event handlers which are called in the order of child to parent
*/

    return (
        <div ref={ref} className="ui form">
             <div className="field">
                 <label className="label">
                     {label}
                 </label>
                 <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? `visible active` : ``}`}>
                     <i className="dropdown icon"></i>
                     <div className="text">{selected.label}</div>
                     <div className={`menu ${open ? `visible transition` : ``}`}>
                         {renderedOptions}
                     </div>
                 </div>
             </div>
        </div>
    )
};

export default Dropdown;