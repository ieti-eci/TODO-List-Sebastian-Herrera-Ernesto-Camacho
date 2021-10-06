import React,{useState} from "react";

export function ToDoList(){
    var [list,setList] = useState([]);

    const handleSubmit=(event)=>{
        event.preventDefault()
        var newList = [...list]
        newList.push(event.target.elements[0].value)
        setList(newList)
    }
    
    return <div className="container">
        <form className="row mt-5" onSubmit={handleSubmit}>
            <section className="col-12">
                <input placeholder="new task" className="form-control" required/>
            </section>
            <section className="col-12 mt-3" style={{textAlign:"center"}}>
                <button className="btn btn-primary" style={{width:"50%"}}>add task</button>
            </section>
        </form>
    </div>
}