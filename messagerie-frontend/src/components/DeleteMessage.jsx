const DeleteMessage = ({ message, onDelete }) => {
    return (
        <li>
            {message}
            <button onClick={onDelete}>❌</button>
        </li>
    )
}

export default DeleteMessage;