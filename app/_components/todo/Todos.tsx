import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Todo from './Todo';
  
// interface oo data so laabaneso
export interface TodoItemProps {
    _id: string;
    title: string,
    isDone: boolean
}

const Todos = async() => {

    const res = await fetch('http://localhost:3000/api/todo', {cache: 'no-cache'}
       
    );

// todolist wxu la mid yhay todoItem oo badan 1-kii TodoList waa todoeItem oo badn oo array ah
    const todoList:TodoItemProps[] = await res.json();
    // console.log(todoList)

  return (
    <div className='w-full my-10'>
      <Card>
  <CardHeader>
    <CardTitle>Create your Todo</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
   <ul role='list' className='divide-y divide-gray-300'>
    {
        todoList.map(todo => (
            // <span>{todo.title}</span>
            <Todo todo={todo}/> // todo-ga la maraayo ayaa u baase 
        ))
    }
   </ul>
  </CardContent>
  
</Card>

    </div>
  )
}

export default Todos
