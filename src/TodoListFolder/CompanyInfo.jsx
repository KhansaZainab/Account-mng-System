import React, { useState } from 'react'

const CompanyInfo = () => {
  const [inputIncome, setInputIncome] = useState("")
 
  const [inputExpense, setInputExpense] = useState("")
  const [expenseList, setExpenseList] = useState([])

  
  function addExpense(){
      if(!inputExpense){
        alert("please fill the field first")
      }else{
        setExpenseList([...expenseList, inputExpense]);
        setInputExpense("");
      }
  }


  return (
   
    <div>
       <input type='text' name='companyIncome' placeholder='add income here' value={inputIncome} onChange={(e)=>setInputIncome()}/>




       <input type='text' name='companyExpense' placeholder='add expense here' value={inputExpense} onChange={(e)=> setInputExpense(e.target.value)} />

       <button onClick={addExpense} >Submit</button>
      
    </div>
  )
}

export default CompanyInfo
