import React from "react";
import './css/Content.css'

function Content({history, title, answer}) {
    return (
        <div className='Content'>
            <button className='btn btn-light' onClick={history.goBack}>戻る</button>
            <h2>{title}</h2>
            <article>
                {answer.split('\n').map(line => <p dangerouslySetInnerHTML={{__html: line}}/>)}
            </article>
        </div>
    )
}

export default Content;