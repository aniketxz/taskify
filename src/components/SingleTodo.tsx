import { useEffect, useRef, useState } from 'react'
import type { Todo } from '../model'
import {
	MdOutlineDelete,
	MdOutlineDone,
	MdOutlineModeEdit,
} from 'react-icons/md'

interface Props {
	todo: Todo
	todos: Todo[]
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
	const [edit, setEdit] = useState<boolean>(false)
	const [editTodo, setEditTodo] = useState<string>(todo.todo)

	const handleDone = (id: string) => {
		setTodos(
			todos.map((item) =>
				item.id === id ? { ...item, isDone: !item.isDone } : item
			)
		)
	}

	const handleDelete = (id: string) => {
		setTodos(todos.filter((item) => item.id !== id))
	}

	const handleEdit = (e: React.FormEvent, id: string) => {
		e.preventDefault()
		setTodos(
			todos.map((item) => (item.id === id ? { ...item, todo: editTodo } : item))
    )
    setEdit(false)
  }
  
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit]);

	return (
		<form
			onSubmit={(e) => handleEdit(e, todo.id)}
			className='flex rounded-sm p-4 gap-6 font-sans bg-[url("https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg")]'
		>
			{edit ? (
        <input
          ref={inputRef}
					value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className='flex-1 text-lg p-1 bg-white/30 rounded outline-none'
				></input>
			) : (
				<span
					className={`flex-1 text-lg p-1 ${
						todo.isDone ? 'line-through text-gray-600' : ''
					}`}
				>
					{todo.todo}
				</span>
			)}
			<div className='flex gap-0.5 items-center text-xl text-stone-700'>
				<span
					className={`cursor-pointer p-1.5 rounded-full hover:bg-white/30 ${edit ? 'text-blue-700': ''}`}
					onClick={() => {
						if (!edit && !todo.isDone) {
							setEdit((prev) => !prev)
						}
					}}
				>
					<MdOutlineModeEdit />
				</span>
				<span className='cursor-pointer p-1.5 rounded-full hover:bg-white/30 hover:text-red-400' onClick={() => handleDelete(todo.id)}>
					<MdOutlineDelete />
				</span>
				<span className={`cursor-pointer p-1.5 rounded-full hover:bg-white/30 ${todo.isDone ? 'text-blue-700': ''}`} onClick={() => handleDone(todo.id)}>
					<MdOutlineDone />
				</span>
			</div>
		</form>
	)
}

export default SingleTodo
