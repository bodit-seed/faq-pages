import React from "react";

function Content({title, answer}) {
    return (
        <div>
            <h2>{title}</h2>
            <article>
                {answer}
            </article>
        </div>
    )
}

export default Content;