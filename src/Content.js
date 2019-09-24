import React from "react";
import './css/Content.css'

function Content({title, answer}) {
    return (
        <div className='Content'>
            <h2>{title}</h2>
            <article>
                {answer.split('\n').map(line => <p dangerouslySetInnerHTML={{__html: line}}/>)}
            </article>
        </div>
    )
}

export default Content;