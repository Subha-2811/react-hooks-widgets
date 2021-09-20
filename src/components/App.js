import React from 'react';
import Accordion from './Accordion';
import Search from './Search';

const items = [
    {
        title : "What is React.js?",
        content : "It is a front-end JavaScript library"
    },
    {
        title : "Why do we use React?",
        content : "It allows reusability of code"
    },
    {
        title : "What is your name?",
        content : "My name is Subhajyoti Naskar"
    }
]

const App = ()=>{
    return(
        <div>
            {/* <Accordion items={items}/> */}
            <Search />
        </div>
    );
}

export default App;