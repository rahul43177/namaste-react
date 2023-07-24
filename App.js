import React from 'react'
import ReactDOM from 'react-dom/client'

// const heading = React.createElement("h1")
// const root = ReactDOM.createRoot(document.getElementById("root"))
//this method is tedious and complicated when we want to write HTML 
//hence we can write HTML inside react using JSX 
//above code in JSX 
const heading = <h1 id='title'>This is Rahul writing from JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)
//this is way we can write JSX 

