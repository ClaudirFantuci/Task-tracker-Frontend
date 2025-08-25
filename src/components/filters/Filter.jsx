const Filter = ({ filter, setFilter, sortBy, setSortBy }) => {
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
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="none">Sem ordenação</option>
                    <option value="name_asc">Nome A-Z</option>
                    <option value="name_desc">Nome Z-A</option>
                    <option value="start_asc">Data Início Crescente</option>
                    <option value="start_desc">Data Início Decrescente</option>
                </select>
            </div>
        </div >
    )
}

export default Filter;