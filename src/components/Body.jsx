import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import AddIcon from '@mui/icons-material/Add';
import "./body.css"
import { Popup } from './popup/Popup'
import axios from "axios"
export const Body = () => {
    const [data,setData]=useState([]);
    const[open,setOpen]=useState(false)
    const [shape,setShape]=useState('update')
    const [id,setId]=useState(0);
    useEffect(()=>{
      let fetchData=async()=>{
        let temp=await axios.get("https://jsonplaceholder.typicode.com/todos");
        setData([...temp.data]);
        console.log(temp.data)
      }
      fetchData();
    },[])
    let handleDelete=(id)=>{
        let temp;
        temp=data.filter((item)=>{
            return item.id!==id;
        })
        setData([...temp]);
    }
    let handleAdd=(newdata)=>{
        setData([newdata,...data]);
        setOpen(false);
    }
    let handleUpdate=(indid)=>{
        setShape('update');
        setOpen(true);
        setId(indid);
       
    }
    let update=(newData)=>{
        let temp=data;
        temp.forEach((item,index)=>{
            if(item.id===id){
              temp[index]=newData;
              temp[index].id=id;
            }
         })
       console.log(id);
         setData([...temp])
         setOpen(false);
       }

  return (
    <div className='body'>
        <AddIcon onClick={()=>{
             setShape('add');
            setOpen(true)}}/>
        <div className='card-container'>
    { 
    
        data.map((item)=>{
          
           return <Card id={item.id}
            userId={item.userId}
            title={item.title}
            item={item}
            completed={item.completed}
            data={data}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            />
        })
     
    }
     <Popup set={open} shape={shape} 
     handleAdd={handleAdd}
     update={update}
    
     />
    </div>
      
    </div>
  )
}
