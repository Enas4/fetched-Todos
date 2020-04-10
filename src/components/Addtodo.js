import React, { Component } from 'react'
import "/home/enas/server-todoapp/src/components/Addtodo.css";
class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // call function to add a todo
    this.props.addTodo(this.state.content);
    this.setState({
      content: ''
    })
  }
  render() {
   
    return (
      <div >
        <form  className="todosubmit"
        onSubmit={this.handleSubmit}>
          <label>Add a new todo:</label>
          <input 
          type="text" 
          onChange={this.handleChange} 
          value={this.state.content} />
          <button className="Submitting">Add todo</button>
        </form>
      </div>
    )
  }
}

export default AddTodo;