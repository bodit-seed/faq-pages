import React from "react";
import './TOC.css';
import {Link} from "react-router-dom";

function TOC({contents}) {

    let q_list = [];

    contents.forEach((item) => {
        q_list.push(
            <Link to={{pathname: item.id}}>{item.title}</Link>
        )
    });

    return (
        <div className="TOC">
            <header>
                <h2>FAQ</h2>
            </header>
            <nav>
                {q_list}
            </nav>
        </div>
    )
}

export default TOC;