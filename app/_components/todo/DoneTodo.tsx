"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

const DoneTodo = ({todoId, isDone}: {todoId: string, isDone: boolean}) => {
    const router = useRouter();
    const handleDone = async() => {

       
            
        try{
            // haddu done ahaa inaa dhahno undone
            // haddu done ahaa inaa dhahno undone
            const newStatus = !isDone // caksiga is Done;

            const res = await fetch('http://localhost:3000/api/todo/' + todoId, {
                method: 'PUT',
                body: JSON.stringify(newStatus)
            });

            await res.json();
            router.refresh();
            // form.reset();
            alert("Todo updated Successfully.")

            
        }catch(e){
        console.error("Database connection error:", e);
        throw new Error("Failed to connect to the database.");
        }
    }
    
  
    return (
    <div>
      <button onClick={handleDone}>
            {isDone ? "unDone": "Done"}
      </button>
    </div>
  )
}

export default DoneTodo
