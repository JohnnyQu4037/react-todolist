import {CHANGE_DESCRIPTION,CHANGE_CONTENT,CHANGE_CATEGORY, SUBMIT,REMOVETASK,SELECTTASK} from "./actionTypes"

//Reducer records the id and other information of current Form field
//It tracks the index of the selected task and also whether or not all tasks has been selected.
//The list of all tasks has been saved here.
const defaultState = {
    id: 0,
    description:"",
    category:"",
    content:"",
    allSelected: false,
    selected:[],
    list: [{
        id: 0,
        description:"For test purpose",
        category:"css",
        content:"test 0"
    },{
        id: 1,
        description:"For test purpose aaa",
        category:"css",
        content:"test 1"
    },{
        id: 3,
        description:"sadf",
        category:"css",
        content:"test 3"
    }]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState,action)=>{
    if(action.type ===CHANGE_DESCRIPTION){
        let newState = JSON.parse(JSON.stringify(state))
        newState.description = action.value    
        return newState
    }
    if (action.type ===CHANGE_CONTENT){
        let newState = JSON.parse(JSON.stringify(state))
        newState.content = action.value  
        return newState
    }
    if(action.type === CHANGE_CATEGORY){
        let newState = JSON.parse(JSON.stringify(state))
        newState.category = action.value  
        return newState
    }
    //make a new submit newSub to have the id, description,content and category value of the current state.
    //If the list is not empty, change the id of the newSub to the id of last task of the list +1
    //add the newSub to the list
    //Increment the id for the next submition.
    //Empty the description,content and category value.
    if(action.type === SUBMIT){
        let newState = JSON.parse(JSON.stringify(state))
        let newSub  = (({ id, description,content,category }) => ({  id, description,content,category }))(newState);
        if(newState.list.length !== 0){
            newSub.id = newState.list.slice(-1)[0].id+1
        }
        newState.list.push(newSub)
        newState.id = newState.id +1
        newState.description = newState.content = newState.category= ""
        return newState
    }
    if(action.type === REMOVETASK){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    //Add or remove the index of the task from the selected list depending on the existence of the index in the list
    //If the index of the task is the last one that can be add in the list, make allSelected true, otherwise false.
    if(action.type === SELECTTASK){
        const newState = JSON.parse(JSON.stringify(state))
        if(newState.selected.includes(action.index)){
            newState.selected.splice(newState.selected.indexOf(action.index),1)
        }else{
            newState.selected.push(action.index)
        }
        if (newState.selected.length === newState.list.length) {
            newState.allSelected = true
        }else{
            newState.allSelected = false
        }
        return newState
    }
    //when called, if the allSelect is toggled to be true, generate a list that includes the index of all tasks
    //otherwise, assign an empty list.
    if(action.type === "allSelect"){
        const newState = JSON.parse(JSON.stringify(state))
        newState.allSelected = !newState.allSelected
        if (newState.allSelected){
            newState.selected = [...Array(newState.list.length).keys()]
        }else{
            newState.selected = []
        }
        return newState
    }
    //sort the list into a descending order and traverse the list to remove the task with same index.
    if(action.type === "deleteSelection"){
        const newState = JSON.parse(JSON.stringify(state))
        let selection = newState.selected
        selection.sort(function(a, b){return b-a});
        for (let i = 0; i < selection.length; i++) {
            newState.list.splice(selection[i],1)
        }
        newState.allSelected = false
        return newState
    }
    return state
}