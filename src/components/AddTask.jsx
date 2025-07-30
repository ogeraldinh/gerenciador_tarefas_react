import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log({ title, description });
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        type="submit"
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium hover:bg-slate-600 cursor-pointer transition-colors"
        value={"Adicionar"}
        onClick={() => {
          // Verifica se o título e a descrição estão preenchidos
          if (!title.trim() || !description.trim()) {
            alert("Preencha o título e a descrição da tarefa!");
          } else {
            onAddTaskSubmit(title, description);
            setTitle("");
            setDescription("");
          }
        }}
      />
    </div>
  );
}

export default AddTask;
