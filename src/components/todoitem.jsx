function Todoitem(props) {
    var activityArr = props.listArr
    var setActivityList = props.setList

    function handleDelete(deleteId){
        var tempArr = activityArr.filter(function(item){
            if(item.id === deleteId){
                return false
            }
            else{
                return true
            }
        })
        setActivityList(tempArr)
    }

    return (
        <div className="flex justify-between">
            <p>{props.index + 1}. {props.item}</p>
            <button onClick={()=>handleDelete(props.id)} className="text-red-500">Delete</button>
        </div>
    )
}

export default Todoitem