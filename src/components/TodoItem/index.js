// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  onDelete = () => {
    deleteTodo(id)
  }
  return (
    <div>
      <p className="title">{title}</p>
      <button type="button" className="btn" onClick={onDelete}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem
