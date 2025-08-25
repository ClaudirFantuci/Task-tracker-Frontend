import { Check, Trash2 } from "lucide-react";
import "./task.css"

const Task = ({ task, handleComplete, handleRemove, handleStatusChange }) => {
    return (
        <div className={`task task-${task.status.toLowerCase()}`} key={task.id}>
            <span className="task-name">{task.name}</span>
            <span className="task-start">{new Date(task.start).toLocaleDateString()}</span>
            <span className="task-ending">{new Date(task.ending).toLocaleDateString()}</span>
            <span className="task-description">{task.description}</span>
            <span className="task-status">
                <select
                    className={`status-select status-${task.status.toLowerCase()}`}
                    value={task.status}
                    onChange={e => handleStatusChange(task.id, e.target.value)}
                >
                    <option value="ANDAMENTO">Andamento</option>
                    <option value="PENDENTE">Pendente</option>
                    <option value="CONCLUIDA">Concluída</option>
                    <option value="ATRASADA">Atrasada</option>
                </select>
            </span>
            <span className="actions">
                <button className="complete-btn" onClick={() => handleComplete(task.id)}>
                    <Check size={12} />
                </button>
                <button className="remove-btn" onClick={() => handleRemove(task.id)}>
                    <Trash2 size={12} />
                </button>
            </span>
        </div>
    );
};

export default Task;