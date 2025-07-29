import { useState } from 'react'
import InputField from './components/InputField'
import type { Todo } from './model'
import TodoList from './components/TodoList'

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('')
	const [todos, setTodos] = useState<Todo[]>([])

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault()

		if (todo.trim()) {
			setTodos([
				...todos,
				{ id: crypto.randomUUID(), todo: todo.trim(), isDone: false },
			])
			setTodo('')
		}
	}

	return (
		<main className='min-h-screen flex flex-col items-center bg-[#2f74c0] font-[Neucha]'>
			<h1 className='uppercase text-3xl md:text-4xl my-3.5 md:my-7 text-white z-10 text-center'>
				Taskify
			</h1>
			<InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
			<TodoList todos={todos} setTodos={setTodos} />
		</main>
	)
}

export default App
