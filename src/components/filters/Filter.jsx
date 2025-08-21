const Filter = () => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <p>Status:</p>
                <select>
                    <option value="ANDAMENTO">Andamento</option>
                    <option value="PENDENTE">Pendente</option>
                    <option value="CONCLUIDA">Concluída</option>
                    <option value="ATRASADA">Atrasada</option>
                </select>
            </div>
        </div>
    )
}

export default Filter;