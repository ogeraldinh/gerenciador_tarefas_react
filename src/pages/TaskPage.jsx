import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="bg-slate-400 text-white p-2 rounded-md hover:bg-slate-600 cursor-pointer transition-colors absolute left-0"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da tarefa</Title>
        </div>
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
          <h2 className="text-2xl text-slate-500 font-medium text-center">
            {title}
          </h2>
          <p className="text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
