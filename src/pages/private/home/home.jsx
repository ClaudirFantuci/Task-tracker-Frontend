import React, { useState, useEffect } from 'react';
import "./home.css"
import Task from '../../../components/task/task';
import Taskform from '../../../components/taskForm/TaskForm';
import Filter from '../../../components/filters/Filter';
import { PlusCircle } from "lucide-react";
import TaskService from '../../../service/TaskService';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState("ALL");
    const [sortBy, setSortBy] = useState("none");
    const taskService = new TaskService();

    const fetchTasks = async () => {
        try {
            const response = await taskService.getTasks(filter);
            setTasks(response.data);
        } catch (err) {
            console.error("Erro ao carregar tarefas:", err);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, [filter]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addTask = async (taskObj) => {
        try {
            const response = await taskService.createTask(taskObj);
            setTasks(prev => [...prev, response.data]);
            setOpen(false);
        } catch (err) {
            console.error("Erro ao adicionar tarefa:", err);
        }
    };

    const handleComplete = async (id) => {
        await handleStatusChange(id, "CONCLUIDA");
    };

    const handleRemove = async (id) => {
        try {
            await taskService.deleteTask(id);
            setTasks(prev => prev.filter(t => t.id !== id));
        } catch (err) {
            console.error("Erro ao remover tarefa:", err);
        }
    };

    const handleStatusChange = async (id, newStatus) => {
        try {
            const task = tasks.find(t => t.id === id);
            const updatedTask = { ...task, status: newStatus };
            const response = await taskService.updateTask(id, updatedTask);
            setTasks(prev => prev.map(t => t.id === id ? response.data : t));
        } catch (err) {
            console.error("Erro ao atualizar status:", err);
        }
    };

    const getSortedTasks = () => {
        let sorted = [...tasks];
        if (sortBy === "name_asc") {
            sorted.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "name_desc") {
            sorted.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortBy === "start_asc") {
            sorted.sort((a, b) => new Date(a.start) - new Date(b.start));
        } else if (sortBy === "start_desc") {
            sorted.sort((a, b) => new Date(b.start) - new Date(a.start));
        }
        return sorted;
    };

    const sortedTasks = getSortedTasks();

    return (
        <div className='container-main'>
            <h1>Lista de Tarefas</h1>

            <div className="task-controls">
                <button className="btn-control" onClick={handleOpen}>
                    <PlusCircle size={18} /> Adicionar Tarefa
                </button>
                <Filter filter={filter} setFilter={setFilter} sortBy={sortBy} setSortBy={setSortBy} />
            </div>

            <div className="task-header">
                <span className="task-name">Nome</span>
                <span className="task-start">Data Início</span>
                <span className="task-ending">Data Fim</span>
                <span className="task-description">Descrição</span>
                <span className="task-status">Status</span>
            </div>
            <div className='task-list'>
                {sortedTasks
                    .map((t) => (
                        <Task
                            key={t.id}
                            task={t}
                            handleStatusChange={handleStatusChange}
                            handleComplete={handleComplete}
                            handleRemove={handleRemove}
                        />
                    ))}
            </div>

            {open && (
                <div className="dialog-backdrop">
                    <div className="dialog-content">
                        <button className="task-form-button" onClick={handleClose}>Fechar</button>
                        <Taskform addTask={addTask} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;