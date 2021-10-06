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
        <div className="mt-3">
            {list.map((item,index)=>{
                return <TodoComponent key={index} item={item}/>
            })}
        </div>
    </div>
}

function TodoComponent(props){
    const {item} = props
    return <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{item}</label>
    </div>
}