import {CHANGE_DESCRIPTION,CHANGE_CONTENT,CHANGE_CATEGORY, SUBMIT,REMOVETASK,SELECTTASK} from "./actionTypes"

export const changeDescriptionAction = (value)=>({
    type:CHANGE_DESCRIPTION,
    value
})

export const changeContentAction = (value)=>({
    type: CHANGE_CONTENT,
    value
})

export const changeCategoryAction = (value)=>({
    type:CHANGE_CATEGORY,
    value
})

export const submitAction = ()=>({
    type:SUBMIT
})

export const removeTaskAction = (index)=>({
    type:REMOVETASK,
    index
})

export const selectAction = (index)=>({
    type:SELECTTASK,
    index
})