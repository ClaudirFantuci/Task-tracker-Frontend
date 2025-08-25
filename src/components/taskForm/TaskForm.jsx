import InputField from "../inputField/InputField";
import "./TaskForm.css"
import { useState } from "react";

const TaskForm = ({ addTask }) => {
    const [name, setName] = useState("")
    const [start, setStart] = useState("");
    const [ending, setEnding] = useState("");
    const [status, setStatus] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !start || !ending || !status || !description) {
            return;
        }
        console.log("Nova tarefa:", { name, start, ending, status, description });

        addTask({
            name,
            start,
            ending,
            status,
            description
        });

        setName("");
        setStart("");
        setEnding("");
        setStatus("");
        setDescription("");
    }

    return (
        <div className="task-form">
            <h2>Nova Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <InputField
                    type="text"
                    placeholder="nome"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <InputField
                    type="date"
                    name="start"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                    className="date-input"
                />
                <InputField
                    type="date"
                    name="ending"
                    value={ending}
                    onChange={(e) => setEnding(e.target.value)}
                    className="date-input"
                />
                <select
                    className="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="">Selecione o Status da tarefa no momento</option>
                    <option value="ANDAMENTO">Andamento</option>
                    <option value="PENDENTE">Pendente</option>
                    <option value="CONCLUIDA">Concluída</option>
                    <option value="ATRASADA">Atrasada</option>
                </select>
                <InputField
                    type="text"
                    placeholder="Descrição"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button className="task-form-button" type="submit">Salvar</button>
            </form>
        </div>
    )
}

export default TaskForm;