"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import { title } from 'process'
import React from 'react'

const TodoForm = () => {

    const router = useRouter();

    const handleSubmit = async(event: React.FormEvent) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;

        const formData = new FormData(form);

        const data = {
            title: formData.get('title')
        }

        

        try{

            const res = await fetch('http://localhost:3000/api/todo', {
                method: 'POST',
                body: JSON.stringify(data)
            });

            await res.json();
            router.refresh();
            form.reset();
            alert("Todo Registered Successfully.")

            
        }catch(e){
        console.error("Database connection error:", e);
        throw new Error("Failed to connect to the database.");
        }
    }


  return (
     <form onSubmit={handleSubmit} className='w-full'>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name='title' placeholder="Title of your Todo" />
            </div>
           <div>
           {/* <Button className=' bg-cyan-400 hover:bg-black'>Add</Button> */}
           </div>
          </div>
        </form>
  )
}

export default TodoForm
