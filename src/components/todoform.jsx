import { useState } from "react"

function Todoform(props) {
    var activityArr = props.listArr
    var setActivityList = props.setList

    var[inputItem, setItem]= useState("")

    function handleChange(event){
        setItem(event.target.value)
    }
    function handleAdd(){
        setActivityList([...activityArr, {id: activityArr.length+1, activity: inputItem}])
        setItem("")
    }
    return (
        <div className="flex flex-col gap-3">
            <h1 className="font-md text-2xl">Manage Activities</h1>
            <div>
                <input value={inputItem} onChange={handleChange} type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity?"></input>
                <button onClick={handleAdd} className="bg-black text-white p-1 border border-black">Add</button>
            </div>
        </div>
    )
}

export default Todoform