import { useRef } from 'react'

interface InputProps {
	todo: string
	setTodo: React.Dispatch<React.SetStateAction<string>>
	handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<InputProps> = ({ todo, setTodo, handleAdd }) => {
	const inputRef = useRef<HTMLInputElement>(null)

	return (
		<form
			onSubmit={(e) => {
				handleAdd(e), inputRef.current?.blur()
			}}
			className='flex relative items-center w-[96%] md:w-[90%]'
		>
			<input
				ref={inputRef}
				type='input'
				placeholder='Enter a task'
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				className='w-full rounded-full px-4 md:px-7 py-3 md:py-5 text-lg md:text-2xl transition duration-200 bg-white inset-shadow-md focus:inset-shadow-none focus:shadow-full outline-none'
			/>
			<button
				type='submit'
				className='absolute size-10 md:size-14 m-1 md:m-2 rounded-full text-sm md:text-lg right-0 text-white transition-all duration-150 shadow-custom-lg bg-[#2f74c0] hover:bg-[#388ae2] active:scale-75 active:shadow-custom-md'
			>
				Go
			</button>
		</form>
	)
}

export default InputField
