import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './popup.css';
import Button from '@mui/material/Button';

export const Popup = ({ set, shape,indid,handleAdd ,update}) => {
  const [title,setTitle]=useState("");
  const[id,setId]=useState(0);
  const[userId,setUserId]=useState(0);
  const[status,setStatus]=useState(true);


  if (!set) return null;
  let cond=status?true:false;
  let handleSubmit=()=>{
    
   if(shape==='add'){
    let data={
        title,
        id,
        userId,
        completed:cond
    }
    handleAdd(data);
    return;
   } 
   else{
    const data={
        title,
       
        userId,
        completed:cond
    }
    update(data);
   }
  }

  const buttonstyles = {
    marginTop: '43px',
    marginLeft: '120px',
  };

 

  
  return ReactDOM.createPortal(
    <>
      <div id="modal" >
        <div className="modal-content">
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
          />
          <br />
          <label htmlFor="userId">User ID:</label>
          <br />
          <input
            type="text"
            id="userId"
            name="userId"
            value={userId}
            onChange={(e)=>{setUserId(e.target.value)}}
          />
          <br />
          {shape==='add'?<><label htmlFor="id">ID:</label>
          <br />
         <input
            type="text"
            id="id"
            name="id"
            value={id}
            onChange={(e)=>{setId(e.target.value)}}
          /></>:<></>}
          <br />
          <label htmlFor="completed">Completed</label>
          <select
            id="completed"
            name="completed"
            value={status}
            onChange={(e)=>{setStatus(e.target.value)}}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <br />
          <Button variant="contained" style={buttonstyles} onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
};
