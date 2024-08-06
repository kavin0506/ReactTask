import { useState } from "react";

const Task=()=>{

    const[addList,setAddList]=useState('');
    const[storeData,setStoreData]=useState([]);

    const handleAdd=()=>{
        if(!addList)return
        else{
            setStoreData([...storeData,addList])
            setAddList("")
        }
   
    }

    const handleDelete=(value,index)=>{
        const res=storeData.filter((val,input)=>val!==value)
        setStoreData(res)

    }
    return(
        <>
        <h2>ToDo List</h2>
        <div className="list">
            <input type="text" onChange={((e)=>setAddList(e.target.value))} value={addList}/>
            <button onClick={()=>handleAdd()}>Add</button>

        </div>
          {storeData.map((value,index)=>(

                <div key={index}>
                    <p >{value} </p>
                    <button onClick={()=>handleDelete(value)}>Delete</button>

                </div>
               
          )
          )}

        </>
    )
}

export default Task;