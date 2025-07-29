import type { Todo } from '../model'
import type { Action } from '../reducers/todoReducer'
import SingleTodo from './SingleTodo'

interface Props {
	todos: Todo[]
	dispatch: React.Dispatch<Action>
}

const TodoList: React.FC<Props> = ({ todos, dispatch }) => {
	return (
		<ul className='grid grid-cols-3 gap-3 w-[90%] mt-4'>
			{todos.map((todo) => (
				<SingleTodo
					key={todo.id}
					todo={todo}
					dispatch={dispatch}
				/>
			))}
		</ul>
	)
}

export default TodoList
