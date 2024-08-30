import './index.css'

const TodoItem = props => {
  const {listDetails, onDeleteButton} = props
  const {id, title} = listDetails

  const onDeleteItem = () => {
    onDeleteButton(id)
  }

  return (
    <li className="list-item">
      <p className="para-in-list">{title}</p>
      <div>
        <button type="button" className="button" onClick={onDeleteItem}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
