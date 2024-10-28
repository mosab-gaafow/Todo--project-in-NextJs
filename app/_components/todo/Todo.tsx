import React from 'react'
import { TodoItemProps } from './Todos'
import DoneTodo from './DoneTodo'

interface TodoProps {
    todo: TodoItemProps // 1-kii item todo wxuu u udhigmaa todoItemProps o ah id, title, isDone

}


const Todo = ({todo}: TodoProps) => {
  return (
    <li className='flex justify-between gap-x-4 py-5'>
        <div className='flex min-w-0 gap-x-4'>
            <p className={`text-sm font-sans leading-6 text-gray-900 ${todo.isDone && 'line-through'}`}> {todo.title}</p>
        </div>
        <div className='flex'>
            <span className='isolate inline-flex rounded-md shadow-sm'>
                <DoneTodo todoId = {todo._id} isDone={todo.isDone} />
                {/* <DeleteTodo todoId = {todo.id}  /> */}


            </span>
        </div>
    </li>
  )
}

export default Todo
