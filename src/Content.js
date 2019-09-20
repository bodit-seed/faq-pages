import React from "react";
import {A} from 'hookrouter';

function Content(pros) {
    const content = pros.contents.find(item => {
        return item.id === Number(pros.id)
    });
    return (
        <div>
            <nav><A href="/">Index</A></nav>
            <h2>{content.title}</h2>
        </div>
    )
}

export default Content;