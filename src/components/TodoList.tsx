import type { Todo } from '../model'
import type { Action } from '../reducers/todoReducer'
import SingleTodo from './SingleTodo'

interface Props {
	todos: Todo[]
	dispatch: React.Dispatch<Action>
}

const TodoList: React.FC<Props> = ({ todos, dispatch }) => {
	const activeTodos = todos.filter(todo => !todo.isDone)
	const completedTodos = todos.filter(todo => todo.isDone)

	return (
		<section className='w-[94%] md:w-[88%] flex flex-col md:flex-row justify-between gap-3 md:gap-4 mt-4'>
			{/* Active Todos */}
			<div className='flex-1 p-3 pt-2 md:p-4 md:pt-3 rounded-md bg-cyan-500/60 md:max-w-1/2'>
				<h3 className='text-xl md:text-2xl text-white'>Active Tasks</h3>
				<ul className='mt-2 md:mt-3 flex flex-col gap-2'>
					{activeTodos.map((todo) => (
						<SingleTodo key={todo.id} todo={todo} dispatch={dispatch} />
					))}
				</ul>
			</div>

			{/* Completed Todos */}
			<div className='flex-1 p-3 pt-2 md:p-4 md:pt-3 rounded-md bg-red-500/90 md:max-w-1/2'>
        <h3 className='text-xl md:text-2xl text-white'>Completed Tasks</h3>
        <ul className='mt-2 md:mt-3 flex flex-col gap-2'>
          {completedTodos.map(todo => 
            <SingleTodo key={todo.id} todo={todo} dispatch={dispatch} />
          )}
        </ul>
			</div>
		</section>
	)
}

export default TodoList
