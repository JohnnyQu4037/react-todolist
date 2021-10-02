import React  from "react";
import { Link } from "react-router-dom";
import store from "../store/index"

function Detail(props){
    const list = store.getState().list
    const ID = parseInt(props.match.params.id)
    const taskDetail = list.find(x=>x.id === ID)
    return (
        <div>
            <div><b>Description: </b>{taskDetail.description}</div>
            <div><b>Category: </b>{taskDetail.category}</div>
            <div><b>Content: </b>{taskDetail.content}</div>
            <button><Link to = "/todo/" style = {{textDecoration:"none"}}>back</Link></button>
        </div>
    )
}

export default Detail