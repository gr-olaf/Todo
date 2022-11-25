import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodoCompleted } from '../store/todoSlice'

const TodoItem = ({ id, text, completed }) => {
	const dispatch = useDispatch();

	return (
		<li>
			<label>
				<input
					type="checkbox"
					className='checkbox'
					checked={completed}
					onChange={() => dispatch(toggleTodoCompleted({ id }))}
				/>
				<span className='custom-checkbox'></span>
				<span className='text'>{text}</span>
				<span
					className="delete"
					onClick={() => dispatch(removeTodo({ id }))}
				>
					&times;
				</span>
			</label>
		</li>
	)
}

export default TodoItem