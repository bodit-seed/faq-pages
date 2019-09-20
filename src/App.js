import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import TOC from "./TOC";
import Content from "./Content";

function App() {

    const contents = [
        {id: 1, title: "防水機能はありますか。"},
        {id: 2, title: "充電時間と使用時間はどれくらいですか。"},
        {id: 3, title: "着用は必ず右側にしなければならないですか。"}
    ];

    return (
        <Router>
            <Switch>
                <Route exact strict path="/:id"
                       render={({match}) => {
                           const content = contents.find(item => {
                               return item.id === Number(match.params.id)
                           });
                           return <Content title={content.title}/>
                       }}/>
                <Route render={() => <TOC contents={contents}/>}/>
            </Switch>
        </Router>
    )
}

export default App;
