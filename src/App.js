import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: '',
      class: '',
    };
  }

  handleSubmit(e) {
    if (this.state.newTask) {
      const index = this.state.tasks.length + 1;
      this.setState({
        tasks: this.state.tasks.concat({id: index, name: this.state.newTask, done: false }),
        newTask: '',
        class: ''
      });
    } else {
      this.setState({
        class: 'error'
      });
    }
    e.preventDefault();
  }

  hanleChange(e) {
    this.setState({
      newTask: e.target.value
    });
  }

  handleClick(task) {
    const { id, name, done } = task;
    const tasks = this.state.tasks.slice();
    tasks[id-1] = {id: id, name: name, done: !done};
    this.setState({
      tasks: tasks
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li className={ task.done ? 'done' : 'null' } onClick={() => this.handleClick(task)} key={task.id}>{task.name}</li>)}
          </ul>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input className={this.state.class} type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} onChange={this.hanleChange.bind(this)}/>
          </form>
        </div>
      </div>
    )
  }
}

export default App;
