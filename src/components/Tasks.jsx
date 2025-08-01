import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`flex items-center gap-2 bg-slate-400 text-white font-medium p-2 rounded-md w-full hover:bg-slate-600 cursor-pointer transition-colors ${
              task.isCompleted && "bg-slate-600 line-through"
            }`}
          >
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </button>

          <Button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 text-white p-2 rounded-md hover:bg-slate-600 cursor-pointer transition-colors"
          >
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)} variant="delete">
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
