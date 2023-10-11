import React, { useState } from 'react'
import "./card.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useScrollTrigger } from '@mui/material';
import { Popup } from './popup/Popup';
export const Card = ({data,handleDelete,handleUpdate,item}) => {
    
  return (
    <div className='card'>
        <h3 className='gradient-text'>{item.title}</h3>
        <p className='gradient-text-p'>UserId:{item.userId}</p>
        <p className='gradient-text-p'>Id:{item.id}</p>
        <p className='gradient-text-p'>Completed: {item.completed ? 'Yes' : 'No'}</p>
        <div className='icons'>
          <div className='delete'>  <DeleteForeverOutlinedIcon onClick={()=>{
            handleDelete(item.id)
        }}/></div>
        <div className='edit'>
       <EditIcon onClick={()=>{
        handleUpdate(item.id);
       }}/>
        </div>
        </div>
       
    </div>
  )
}
