import React  from "react";
import Form from "../subForm/Form";
import Table from "../tableView/Table";
import "../style.css"
import store from '../store/index'
import {Provider} from 'react-redux'

//In this page there are two modules that were achieved store-reducer in two different ways.
//Form module on the left of the page is statefull and achieved through redux
//However, Table module on the right is stateless and connect through react-redux
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