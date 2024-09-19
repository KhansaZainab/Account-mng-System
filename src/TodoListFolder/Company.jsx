import React, { useState } from 'react'

const Company = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);
    const [updatingIndex, setUpdatingIndex] = useState( )
    const [toggle, setToggle] = useState(false);

    function additems(){
        if(!inputData){
            alert("empty input field")
        }else{
            setItems([...items, inputData]);
            setInputData("");
        }
    }

    function deleteItem(index){
        let listAfterRemoval =  items.filter((item)=> item !== items[index])
        console.log(listAfterRemoval);
        
        setItems(listAfterRemoval)
        console.log(items);
    }

    function editItem(index){
        let editedList = items.filter((item)=> item === items[index])
        console.log(editedList);
        
        setInputData(editedList[0])
        setUpdatingIndex(index);
        setToggle(true)
    }

    function updateList(){
        items.splice(updatingIndex,1,inputData);
        console.log(items);
        
        setToggle(false)
        setInputData("")
   
    }

    function companyInfo(){

    }

  return (
    <div>

        <input type="text"  placeholder='add your Company here' value={inputData} onChange={(e)=> setInputData(e.target.value)}/>
        {toggle ? <button className='bg-violet-500 text-white rounded-md p-1' onClick={updateList}>Update</button> : <button className='bg-violet-600 rounded-md text-white p-1' onClick={additems}>Submit</button> }
         

        {/* <button className='bg-violet-600 rounded-md text-white p-1' onClick={additems}>Submit</button>  */}
        <br></br>
        <h2>Your Companies </h2>
        {
            items.map((ele,index)=>(
               <div key={index}>
                  <h3 onclick={<companyInfo>{ele}</companyInfo>} >{ele}</h3>
                  <button onClick={()=>deleteItem(index)}>Delete Item</button>
                  <button onClick={()=>editItem(index)}>editItem</button>

               </div>
              
            ))
        }

        {/* <button onclick={removeItem}>Remove Item</button> */}
            
       <span> {
            
            // console.log(listAfterRemoval)
            
        }
      </span>

    </div>
  )
}

export default Company
