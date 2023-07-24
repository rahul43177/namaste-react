import React from 'react'
import ReactDOM from 'react-dom/client'

// const heading = React.createElement("h1")
// const root = ReactDOM.createRoot(document.getElementById("root"))
//this method is tedious and complicated when we want to write HTML 
//hence we can write HTML inside react using JSX 
//above code in JSX 
// const heading = <h1 id='title' className='heading'>This is Rahul writing from JSX</h1>

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)
//this is way we can write JSX 

// const HeaderComponent = () => {
//     return (
//         <div>
//             <h1>
//                 This is H2 tag
//             </h1>
//         </div>
//     )
// }

const root = ReactDOM.createRoot(document.getElementById("root"))
const HeaderComponent = (root) => (
    <div>
        <h1>Hello World</h1>
        {console.log(h1)}
    </div>
)


root.render(<HeaderComponent/>)