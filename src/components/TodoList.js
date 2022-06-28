import React ,{useState}from 'react'
import { GrFormAdd ,GrFormTrash} from "react-icons/gr";
const TodoList = () => {
    const[inputData,setInputData]=useState('')
    const[items,setItems]=useState([])


    const addItem=()=>{
        if(!inputData){

        }else{
            setItems([...items,inputData])
            setInputData("")
        }
        
    }
    const deleteitem=(id)=>{
        const updateData=items.filter((element,index)=>{
            return index !== id
            
        })
        setItems(updateData)
    }
  return (
    <div>
    <h3 >ToDo List</h3>
        <div className='main'>
            <div className='inputdiv'>
            <input type="text" className="form-control mb-2" value={inputData} onChange={(e)=>setInputData(e.target.value)} placeholder="Write Here.." />
            <GrFormAdd style={{fontSize:'30px'}} onClick={addItem}/>
            </div>
            
        </div>
        <div >
            {
                items.map((element,index)=>{
                    return(
                        <div className="inputdiv" key={index}>
                        <h3>{element}</h3>
                         <GrFormTrash style={{fontSize:'30px'}}  onClick={()=>deleteitem(index)}/>
                        </div>
                    

                    )
                })

            }
        </div>
    </div>
  )
}

export default TodoList
