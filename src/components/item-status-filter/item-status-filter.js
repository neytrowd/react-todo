import './item-status-filter.css';

const filterButtons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
];

export default function ItemStatusFilter({filter, onFilterChange}) {
    return (
        <div className={'todo-filter d-flex justify-content-end'}>
            <div className={'btn-group'}>
                {filterButtons.map(({name, label}) => {
                    const isActive = name === filter;
                    const classNames = 'btn ' + (isActive ? 'btn-secondary' : 'btn-outline-secondary');
                    return (
                        <button
                            key={name}
                            type={'button'}
                            className={classNames}
                            onClick={() => onFilterChange(name)}
                        >{label}</button>
                    )
                })}
            </div>
        </div>
    )
}