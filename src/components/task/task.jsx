import "./task.css"
const Task = ({ task, handleComplete, handleRemove, handleStatusChange }) => {
    return (
        <div className="task" key={task.id}>
            <span className="task-name" style={{ flex: 2 }}>{task.name}</span>
            <span style={{ flex: 1 }}>{new Date(task.start).toLocaleDateString()}</span>
            <span style={{ flex: 1 }}>{new Date(task.ending).toLocaleDateString()}</span>
            <span style={{ flex: 3 }}>{task.description}</span>
            <span style={{ flex: 1 }}>
                <select
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