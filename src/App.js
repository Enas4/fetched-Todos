import React, { Component } from 'react';
import "/home/enas/server-todoapp/src/App.css";
import axios from "axios";
import TodoItem from '/home/enas/server-todoapp/src/components/Todos.js';
import AddTodo from '/home/enas/server-todoapp/src/components/Addtodo.js';

class App extends Component {
  state = {
    todos:[],
    text:"hello"
  }

  componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20"')
        .then(result=>{
          console.log(result)
         this.setState({
              todos: result.data
                       
         })
        })
      }
     
      
     
    
  addTodo = (text) => {
       const newtodo = this.state.todos.concat({
         title:text,
         completed:false
       })
       this.setState({
         todos:newtodo,
         completed:true
       })
      }

      togglecompleted=(index)=>{
        const newtodos = this.state.todos.map((todo, i)=>{
           if(index===i){
             return{
              ...todo,
              completed:!todo.completed
             }
           }
           return todo;
        })
        this.setState({
          todos:newtodos
        })
      }

      Deletetodo=(index)=>{
        const newtodos = this.state.todos.filter((todo, i)=>{
      return index === i ? false :true;
       })
      this.setState({
        todos:newtodos
      })
    }

    editTodofromState =(index, newText )=>{
      const newTodos = this.state.todos.map((todo, i)=>{
          if(index===i){
            return{
              ...todo,
              title:newText
            }
          }
          return todo;
      })
      this.setState({
        todos:newTodos
      })
    }
  render(){
    return(
       <div>
        {this.state.todos.map((todo, index)=>{
          return (
            <TodoItem  
            toggle={this.togglecompleted} 
            Deletetodo ={this.Deletetodo}
            editTodofromState={this.editTodofromState}
            todo={todo}
             key={index} 
             index={index}/>
          )
        })}
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  } 
} 
export default App;

