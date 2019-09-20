import React from "react";
import './TOC.css';

function TOC(pros) {

    let q_list = [];

    pros.contents.forEach((item) => {
        q_list.push(
            <a key={item.id} href={item.id}>{item.title}</a>
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