import React from "react";
import './css/Content.css'

function Content({history, title, answer}) {
    return (
        <div className='Content'>
            <button className='btn btn-link' onClick={() => history.push('/')}>目次</button>
            <h2>{title}</h2>
            <article>
                {answer.split('\n').map(line => <p dangerouslySetInnerHTML={{__html: line}}/>)}
            </article>
        </div>
    )
}

export default Content;