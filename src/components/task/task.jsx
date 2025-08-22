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
                <button onClick={() => handleComplete(task.id)}>
                    Completar
                </button>
                <button onClick={() => handleRemove(task.id)}>
                    Remover
                </button>
            </span>
        </div>
    );
};

export default Task;
