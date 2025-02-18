const Item = ({ task, onDelete }) => {
    return (
        <li>
            {task}
            <button onClick={onDelete}>❌</button>
        </li>
    );
};

export default Item;