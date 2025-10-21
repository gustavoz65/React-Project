import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Dedicar 2 horas diárias para estudar programação.",
      IsCompleted: false,
    },
    {
      id: 2,
      title: "Exercícios Físicos",
      description: "Fazer exercícios físicos por pelo menos 30 minutos.",
      IsCompleted: true,
    },
    {
      id: 3,
      title: "Estudar Portugues",
      description: "Dedicar 2 horas diárias para estudar Portugues",
      IsCompleted: false,
    },
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-blod text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
