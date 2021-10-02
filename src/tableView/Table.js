import React from 'react';
import "./table-style.css"
import {connect} from 'react-redux'
import {removeTaskAction,selectAction} from "../store/actionCreators"
import {Link} from 'react-router-dom'
import Detail from '../pages/Detail';

const Table  = (props)=>{
    let {list,removeTask,toggleSelect,selected,allSelected,toggleAllSelect,deleteSelection} = props
    let routeConfig = {path: "/todo/", exact:true, component:Detail}
    return ( 
            <div>
                <button className = "delete-button" onClick = {()=>{deleteSelection()}}>Delete selected</button>
                <br/>
                <br/>
                <table rules = "none" className = "tableView">   
                    <thead >
                        <tr>  
                            <th width ="50px">
                                <input 
                                    type="checkbox" 
                                    checked = {allSelected}
                                    onChange = {()=>{toggleAllSelect()}}
                                />
                            </th>  
                            <th width ="300px">Description</th>    
                            <th width ="100px">Category</th>    
                            <th width ="100px">Operate</th>    
                        </tr>     
                    </thead>
                    <tbody>
                        {   
                            list.map((item,index)=>
                                <tr key = {index} className = {(index+1)%2 ===0?"even-row":""}>
                                    {/* to do */}
                                    <td>
                                        <input 
                                            type="checkbox" 
                                            checked = {selected.includes(index)} 
                                            onChange = {()=>{toggleSelect(index)}}
                                        />
                                    </td>
                                    <td>
                                        <Link 
                                            to = {{pathname: routeConfig.path+item.id, state: {task:list}}} 
                                            style = {{textDecoration:"none"}}
                                        >
                                            {item.description}
                                        </Link>
                                    </td>
                                    <td>{item.category}</td>
                                    <td style={{ color: 'red' }} onClick = {()=>{removeTask(index)}}>Delete</td>
                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
              
     );
}

const stateToProps = (state)=>{
    return {
        list:state.list,
        selected:state.selected,
        allSelected:state.allSelected
    }
}

const dispatchToState = (dispatch)=>{
    return {
        removeTask(index){
            const action = removeTaskAction(index)
            dispatch(action)
        },
        toggleSelect(index){
            const action = selectAction(index)
            dispatch(action)
        },
        toggleAllSelect(){
            const action = {type:"allSelect"}
            dispatch(action)
        },
        deleteSelection(){
            const action = {type:"deleteSelection"}
            dispatch(action)
        }
    }
}
        
export default connect(stateToProps,dispatchToState)(Table);