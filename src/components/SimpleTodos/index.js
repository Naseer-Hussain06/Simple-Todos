import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

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

class SimpleTodos extends Component {
  state = {todoList: initialTodosList}

  onDelete = id => {
    const {todoList} = this.state
    const filterListItems = todoList.filter(eachItem => eachItem.id !== id)
    this.setState({todoList: filterListItems})
  }

  render() {
    const {todoList} = this.state
    return (
      <div className="app-container">
        <div className="simple-todo-card">
          <h1 className="title">Simple Todos</h1>
          <ul>
            {todoList.map(eachitem => (
              <TodoItem
                listDetails={eachitem}
                key={eachitem.id}
                onDeleteButton={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
