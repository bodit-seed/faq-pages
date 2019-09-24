import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import TOC from "./TOC";
import Content from "./Content";
import {contents} from './contents'


function App() {

    return (
        <Router>
            <Switch>
                <Route exact strict path="/:id"
                       render={({match}) => {
                           const content = contents.find(item => {
                               return item.id === Number(match.params.id)
                           });
                           if (content)
                               return <Content title={content.title} answer={content.answer}/>
                           else
                               return <TOC contents={contents}/>
                       }}/>
                <Route render={() => <TOC contents={contents}/>}/>
            </Switch>
        </Router>
    )
}

export default App;
