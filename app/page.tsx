import Image from "next/image";
import TodoForm from "./_components/todo/TodoForm";
import Todos from "./_components/todo/Todos";

export default function Home() {
  return (
    <main className="felx items-center justify-center flex-col max-w-lg mx-auto mt-32">
      {/* TODO FORM */}
      <TodoForm/>
      <Todos/>
    </main>
  );
}
