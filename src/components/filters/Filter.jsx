const Filter = ({ filter, setFilter }) => {
    return (
        <div className="filter">

            <div className="filter-options">
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="ALL">Todas</option>
                    <option value="ANDAMENTO">Andamento</option>
                    <option value="PENDENTE">Pendente</option>
                    <option value="CONCLUIDA">Concluída</option>
                    <option value="ATRASADA">Atrasada</option>
                </select>
            </div>
        </div >
    )
}

export default Filter;
