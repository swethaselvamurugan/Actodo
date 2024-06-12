import Todoform from "./todoform"
import Todolist from "./todolist"
import { useState } from "react"

function Todocontainer() {
    var [listArr, setList] = useState([
        {
            id: 1,
            activity: "Go for a walk"
        },
        {
            id: 2,
            activity: "Take a Shower"
        },
        {
            id: 3,
            activity: "Have Breakfast"
        }
    ])
    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <Todoform listArr={listArr} setList={setList}></Todoform>
                <Todolist listArr={listArr} setList={setList}></Todolist>
            </div>
        </div>
    )
}

export default Todocontainer