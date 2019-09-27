import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import TOC from "./TOC";
import Content from "./Content";
import {contents} from './contents'
import ScrollToTop from "./ScrollToTop";


function App() {

    return (
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route exact strict path="/:id"
                           render={({match, history}) => {
                               const content = contents.find(item => {
                                   return item.id === Number(match.params.id)
                               });
                               if (content)
                                   return <Content history={history} title={content.title} answer={content.answer}/>;
                               else
                                   return <TOC contents={contents}/>
                           }}/>
                    <Route render={() => <TOC contents={contents}/>}/>
                </Switch>
            </ScrollToTop>
        </Router>
    )
}

export default App;
