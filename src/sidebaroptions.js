import React from 'react';
import './sidebar.css';

function sidebaroptions({active, Icon, text }) {
    return (
        <div className={`sidebar__options ${active && "sidebar__options--active"}`} >
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default sidebaroptions;
