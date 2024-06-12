import Todoitem from "./todoitem";

function Todolist(props) {
    var listArr = props.listArr
    var setList = props.setList
    return (
        <div className="bg-[#BDB4EA] border rounded-md p-4 flex-grow">
            <h1 className="font-md text-2xl">Today's Activity</h1>
            {
                listArr.length === 0 ? <p>you haven't added any activity yet</p> : ""
            }
            {
                listArr.map(function (item, index) {
                    return <Todoitem id={item.id} item={item.activity} index={index} listArr={listArr} setList={setList}></Todoitem>
                })
            }

        </div>
    )
}

export default Todolist