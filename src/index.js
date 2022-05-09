import React from 'react'
import * as ReactDom from 'react-dom/client'
import './index.css'
import Header from './Header'
import MainContent from "./MainContent";
import Footer from "./Footer";

function App() {
    return (
        <div>
           <Header/>
            <MainContent/>
           <Footer/>
        </div>

    )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<App/>)