import React from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import "./style.css"
import About from './pages/About'
import Main from './pages/Main'
import Detail from './pages/Detail'

function Todolist(){
    //set up the routing paths and components
    let routeConfig = [
        {path: "/todo/", title:"to do", exact:true, component:Main},
        {path: "/about/", title:"about", exact:true, component:About}
    ]
    //jsx code that returns the outline of the page
    //topNav in this page remains still and only the display section changes based on the path change.
    //The routing rules of detailed information of to do tasks are set up here as well.
    return (
        <Router>
            <div>
            <div className = "topNav">
                <ul>
                    {
                        routeConfig.map((item,index)=>{
                            return <li key = {index}><Link to = {item.path} style = {{textDecoration:"none"}}>{item.title}</Link></li>
                        })
                    }
                </ul>
            </div>
            <div className = "display">
                {
                    routeConfig.map((item,index)=>{
                        return <Route key = {index} path = {item.path} exact = {item.exact} component = {item.component}></Route>
                    })
                }
                <Route path = "/todo/:id" exact component = {Detail}/>
            </div>
        </div>
        </Router>
    )
}

export default Todolist