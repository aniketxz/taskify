import type { Todo } from '../model'

export type Action =
	| { type: 'ADD'; payload: string }
	| { type: 'DELETE'; payload: string }
	| { type: 'TOGGLE_DONE'; payload: string }
	| { type: 'EDIT'; payload: { id: string; newTodo: string } }

export const todoReducer = (state: Todo[], action: Action): Todo[] => {
	switch (action.type) {
		case 'ADD':
			return [
				...state,
				{
					id: crypto.randomUUID(),
					todo: action.payload,
					isDone: false,
				},
			]
		case 'DELETE':
			return state.filter((todo) => todo.id !== action.payload)
		case 'TOGGLE_DONE':
			return state.map((todo) =>
				todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
			)
		case 'EDIT':
			return state.map((todo) =>
				todo.id === action.payload.id
					? { ...todo, todo: action.payload.newTodo }
					: todo
			)
		default:
			return state
	}
}
