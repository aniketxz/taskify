import { useEffect, useReducer, useState } from 'react'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { todoReducer } from './reducers/todoReducer'
import type { Todo } from './model'

const LOCAL_STORAGE_KEY = 'todos'

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('')

	// Initialize todos from localStorage
	const initializer = (): Todo[] => {
		const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
		return saved ? JSON.parse(saved) : []
	}

	const [todos, dispatch] = useReducer(todoReducer, [], initializer)

	// Save todos in localStorage when they change
	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
	}, [todos])

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault()

		if (todo.trim()) {
			dispatch({ type: 'ADD', payload: todo })
			setTodo('')
		}
	}

	return (
		<main className='min-h-screen flex flex-col items-center bg-[#2f74c0] font-[Neucha]'>
			<h1 className='uppercase text-3xl md:text-4xl my-3.5 md:my-7 text-white z-10 text-center'>
				Taskify
			</h1>
			<InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
			<TodoList todos={todos} dispatch={dispatch} />
		</main>
	)
}

export default App
