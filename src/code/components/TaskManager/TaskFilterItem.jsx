import { useRef, useState, useEffect } from "react";

const TaskFilterItem = ({name, displayName, items}) => {

    const [selectedFilter, setSelectedFilter] = useState(undefined);
    const [isOpen, setIsOpen] = useState(false);

    const groupElement = useRef();

    const toggleDropDown = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                groupElement.current &&
                !groupElement.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div 
            className='task-filter-item'
            ref={groupElement}
        >
            <div 
                className="filter-dropdown-button"
                onClick={toggleDropDown}
            > 
                <span>{selectedFilter ?? displayName}</span>    
            </div>       
            <div className={`dropdown-filter${isOpen ? '' : ' closed'}`}>
                {selectedFilter !== undefined &&
                    <div
                        className={`dropdown-filter-item`}
                        onClick={() => { setSelectedFilter(undefined); toggleDropDown(); }}
                    >
                        <span>Убрать</span>
                    </div>
                }
                
                {items.map((item) => (
                    <div 
                        key={item.id}
                        className={`dropdown-filter-item ${selectedFilter === item.displayName ? 'selected' : ''}`}
                        onClick={() => { setSelectedFilter(item.displayName); toggleDropDown(); }}
                    >
                        <span>{item.displayName}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TaskFilterItem;