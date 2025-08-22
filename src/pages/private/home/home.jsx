import React, { useState } from 'react';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import "./home.css"
import Task from '../../../components/task/task';
import Taskform from '../../../components/taskForm/TaskForm';
import Filter from '../../../components/filters/Filter';
import { PlusCircle } from "lucide-react";

const Home = () => {
    const [tasks, setTasks] = useState([
        { id: 1, name: "Fazer o APP", start: "2024-06-01", ending: "2024-06-01", description: "Desenvolver o aplicativo conforme requisitos.", status: "ATRASADA" },
        { id: 2, name: "Testar funcionalidades", start: "2024-06-02", ending: "2024-06-02", description: "Realizar testes nas funcionalidades principais.", status: "ANDAMENTO" },
        { id: 3, name: "Revisar código", start: "2024-06-03", ending: "2024-06-03", description: "Revisar o código para garantir qualidade.", status: "PENDENTE" }
    ]);

    const [open, setOpen] = useState(false);
    const [filter, setFilter] = useState("ALL");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addTask = (taskObj) => {
        setTasks(prev => {
            const newId = prev.length ? Math.max(...prev.map(t => t.id)) + 1 : 1;
            return [...prev, { id: newId, ...taskObj }];
        });
        setOpen(false);
    };

    const handleComplete = (id) => {
        setTasks(prev => prev.map(t => t.id === id ? { ...t, status: "CONCLUIDA" } : t));
    };

    const handleRemove = (id) => {
        setTasks(prev => prev.filter(t => t.id !== id));
    };

    const handleStatusChange = (id, newStatus) => {
        setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
    };

    return (
        <>
            <Header />
            <div className='container-main'>
                <h1>Lista de Tarefas</h1>


                <div className="task-controls">
                    <button className="btn-control" onClick={handleOpen}>
                        <PlusCircle size={18} /> Adicionar Tarefa
                    </button>
                    <Filter filter={filter} setFilter={setFilter} />
                </div>

                <div className='task-list'>
                    {tasks
                        .filter(t => filter === "ALL" ? true : t.status === filter)
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
                            <button className="dialog-close" onClick={handleClose}>Fechar</button>
                            <Taskform addTask={addTask} />
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Home;
