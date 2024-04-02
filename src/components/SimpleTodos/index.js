import TodoItem from '../TodoItem/'
import './index.css'
import {Component} from 'react'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {todoUSersList: initialTodosList}

  deleteTodo = id => {
    const {todoUSersList} = this.state
    const filteredTodoList = todoUSersList.filter(
      eachTodo => eachTodo.id !== eachTodo,
    )
    this.setState({todoUSersList: filteredTodoList})
  }

  render() {
    const {todoUSersList} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="headig">Simple Todos</h1>
          <ul>
            {todoUSersList.map(eachTodo => (
              <TodoItem
                todoDetails={eachTodo}
                key={eachTodo.id}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
