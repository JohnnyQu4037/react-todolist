import React  from "react";
import Form from "../subForm/Form";
import Table from "../tableView/Table";
import "../style.css"
import store from '../store/index'
import {Provider} from 'react-redux'

function Main(){
    return (
        <div className  = "todolist-display">
            <Form />
            <Provider store = {store}>
                <Table />
            </Provider>
            
        </div>
    )
}

export default Main