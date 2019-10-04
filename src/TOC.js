import React from "react";
import './css/TOC.css';
import {Link} from "react-router-dom";

function TOC({contents}) {
    let qList = [];

    contents.forEach((item) => {
        qList.push(
            <Link key={item.id} to={{pathname: item.id}}>{item.title}</Link>
        )
    });

    return (
        <div className="TOC">
            <header>
                <h2>よくある質問</h2>
            </header>
            <nav>
                {qList}
            </nav>
        </div>
    )
}

export default TOC;