import React, { Component } from 'react';
import store from '../store/index.js'
import {changeDescriptionAction,changeContentAction, changeCategoryAction,submitAction} from "../store/actionCreators"

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.changeDescription = this.changeDescription.bind(this)
        this.changeCategory = this.changeCategory.bind(this)
        this.changeContent = this.changeContent.bind(this)
        this.changeStore = this.changeStore.bind(this)
        store.subscribe(this.changeStore)
    }
    componentWillUnmount() {
        this.setState = ()=>{
            return;
        };
    }
    render() { 
        return ( 
            <div>
                <table cellPadding="10px">   
                    <tbody>
                        <tr>    
                            <td>Description: </td>    
                            <td><input onChange = {this.changeDescription} value = {this.state.description}/> </td>    
                        </tr>    
                        <tr>    
                            <td>Category: </td>    
                            <td>  
                                <select onChange ={this.changeCategory} value = {this.state.category}>
                                    <option></option>
                                    <option value="html">html</option>    
                                    <option value="css">css</option>    
                                    <option value="js">js</option>    
                                </select>     
                            </td>    
                        </tr>
                        <tr>    
                            <td>Content: </td>    
                            <td><textarea rows="2" cols="30" onChange = {this.changeContent} value = {this.state.content}></textarea> </td>    
                        </tr>
                    </tbody>     
                </table> 
                <button onClick = {this.submitForm.bind(this)}>submit</button>
            </div>
         );
    }

    changeDescription(e){
        const action = changeDescriptionAction(e.target.value)
        store.dispatch(action)
    }
    changeCategory(e){
        const action = changeCategoryAction(e.target.value)
        store.dispatch(action)
    }
    changeContent(e){
        const action = changeContentAction(e.target.value)
        store.dispatch(action)
    }
    changeStore(){
        this.setState(store.getState())
    }
    submitForm(){
        const action = submitAction()
        store.dispatch(action)
    }
}
 
export default Form;