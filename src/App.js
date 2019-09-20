import React from 'react';
import {useRoutes} from 'hookrouter';
import TOC from "./TOC";
import Content from "./Content";

const routes = {
    '/': () => (contents) => <TOC contents={contents}/>,
    '/:id': ({id}) => (contents) => <Content id={id} contents={contents}/>
};

function App() {

    const contents = [
        {id: 1, title: "防水機能はありますか。"},
        {id: 2, title: "充電時間と使用時間はどれくらいですか。"},
        {id: 3, title: "着用は必ず右側にしなければならないですか。"}
    ];

    return useRoutes(routes)(contents)
}

export default App;
