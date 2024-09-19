import React from 'react'
import {useState} from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function Todo() {
    const [inputData , setInputData] = useState("")
    const [items, setItems] = useState([]);
    const [Uid, setUid] = useState()
    const [toggle,setToggle] = useState(false)

    const additems=()=> {
        if(!inputData){
            alert("")
        }else{
            setItems([...items, inputData] ) 
            setInputData('') 
        }
    }
    
    
    const deleteItem=(index)=> {
        // console.log(index,array);
        // let newarr = array.splice(index,1)  // console.log(newarr); // console.log(array);
        const newList = items.filter((item)=>(item!== items[index]))
        console.log("newList ",newList);
        // /console.log();
        
        
        // setItems([...array])
        setItems(newList)
        
    }
     // Edit the item form the list
     const editItem = (ele,index,array,)=>{
       const editList = items.filter((item)=>{
        return (item === items[index])
       })
       setInputData(editList[0])
       console.log(editList[0]);
       setUid(index)
       setToggle(true)
    
    }
    const updateList = ()=>{
       items.splice( Uid,1,inputData)
       console.log(items);
       setInputData("")
       setToggle(false)
    }

    // Removing all items form the list
    const removeAll = ()=>{
        console.log(items);
        items.length = 0;
        
        setItems([]);
        console.log(items); 
    }
   
  return (
    <>
    <div className='flex flex-col bg-indigo-950 items-center justify-center'>
        <div className='py-5 text-xl text-center text-gray-200 font bold'>
            <h1>Add Your Todo List here.</h1>
        </div>

        <div className='flex w-64 bg-white justify-between rounded-md items-center'>
            <input className='p-2 rounded-md outline-none' type="text" placeholder='Add items' value={inputData} onChange={(e)=> setInputData(e.target.value)}/>
            {toggle ? <button className='bg-violet-500 text-white rounded-md p-1' onClick={updateList}>Update</button> : <button className='bg-violet-600 rounded-md text-white p-1' onClick={additems}>Submit</button> }
            
        </div>
                 {/* <GoPlus className='text-3xl text-black px-1' onClick={additems}/> */}
        <br></br>
        {
            items.map((ele,index,array)=>{
            return(
                <div className='flex w-64 my-1 rounded-md justify-between items-center bg-violet-600 text-white' key={index}>
                    <div className='items-list flex flex-col p-2' > 
                       <h3>{ele}</h3>
                    </div>
                     <FaRegEdit className='text-2xl text-gray-400 ml-auto ' title='edit item' onClick={()=>editItem(ele,index,array)}/> 
                    <MdDeleteForever className='text-5xl text-gray-400 px-2'title='delete item' onClick={()=>deleteItem(index)}/>
                    
                </div>

            )
            })
        }

        
           
        

        <br></br>

        <div className='flex items-center justify-center'>
            <button className=' bg-white p-2 rounded-full hover:bg-blue-500'onClick={removeAll}>Remove All</button>
        </div>

    </div>

    </>
  )
}

export default Todo
