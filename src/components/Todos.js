import React, { Component } from "react";
import "/home/enas/server-todoapp/src/components/Todo.css";

class TodoItem extends Component {
    state={
        isEditing:false,
        text:"hello"
    }
    toggleEditing=()=>{
        this.setState({
            isEditing:!this.state.isEditing
        })
    }
   clickHandler=()=>{
       this.props.toggle(this.props.index)
   }
   Deletetodo=()=>{
    this.props.Deletetodo(this.props.index)
   }
   editTodosubmit =(event)=>{
     event.preventDefault();
     this.props.editTodofromState(this.props.index, this.newText.value);
    this.toggleEditing()
   }
   
    render(){
        
        const {todo } = this.props;
        // console.log(this.props)
        
        if(this.state.isEditing){
          
          return  <li>
              <form onSubmit={this.editTodosubmit}>
              <input type="text"
               defaultValue={todo.title}
               ref={node=>{
                   this.newText=node
               }}
               />
              <button type="submit">save</button>
              <button onClick={this.toggleEditing}>cancel</button>
              </form>
              </li>
        }

        
        return(<li 
            
            className={todo.completed ? "completed" : ""}>
                
            <span  className="Listing" onClick={this.clickHandler}>{todo.title}</span>

            <span>
            <button className="edit" onClick={this.toggleEditing}>Edit</button>
            <button className="delete" onClick={this.Deletetodo}>Delete</button>
            </span>
            </li>
        )
    }
}


export default TodoItem; 
