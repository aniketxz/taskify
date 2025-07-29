import type { Todo } from '../model'
import SingleTodo from './SingleTodo'

interface Props {
	todos: Todo[]
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
	return (
		<ul className='grid grid-cols-3 gap-3 w-[90%] mt-4'>
			{todos.map((todo) => (
				<SingleTodo
					key={todo.id}
					todo={todo}
					todos={todos}
					setTodos={setTodos}
				/>
			))}
		</ul>
	)
}

export default TodoList
